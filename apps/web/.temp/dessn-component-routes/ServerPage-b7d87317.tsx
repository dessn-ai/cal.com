import React from 'react';
import { useParentState } from '../useIframeState';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create mock TRPC client and provider
const createTRPCClient = () => ({
  query: () => Promise.resolve(null),
  mutation: () => Promise.resolve(null),
});

const mockTrpc = {
  Provider: ({ children }) => {
    const queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
          refetchOnWindowFocus: false,
        },
      },
    });

    return (
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    );
  },
};

// Export mock TRPC provider for other components to use
export const TRPCProvider = mockTrpc.Provider;

// Create a simple placeholder component
const PlaceholderComponent = () => (
  <div className="p-4 border rounded">
    <h2>Signup Page Preview</h2>
    <p>Loading component...</p>
  </div>
);

// Mock any required providers
const MockProviders = ({ children }) => (
  <mockTrpc.Provider>
    {children}
  </mockTrpc.Provider>
);

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    params: {
      type: "string",
      value: JSON.stringify({ id: "example" }),
      label: "Params",
    },
    searchParams: {
      type: "string",
      value: JSON.stringify({ query: "test" }),
      label: "Search Params",
    },
  });

  const [Component, setComponent] = React.useState(() => PlaceholderComponent);

  React.useEffect(() => {
    const loadComponent = async () => {
      try {
        const module = await import('../../app/(use-page-wrapper)/signup/page');
        setComponent(() => module.default || PlaceholderComponent);
      } catch (error) {
        console.error('Failed to load component:', error);
        setComponent(() => PlaceholderComponent);
      }
    };

    loadComponent();
  }, []);

  const pageProps = {
    params: JSON.parse(state.params.value),
    searchParams: JSON.parse(state.searchParams.value),
  };

  return (
    <div className="preview-container">
      <React.Suspense fallback={<PlaceholderComponent />}>
        <MockProviders>
          <Component {...pageProps} />
        </MockProviders>
      </React.Suspense>
    </div>
  );
}

// Export mock TRPC client for other components
export const trpc = {
  useQuery: () => ({ data: null, isLoading: false, error: null }),
  useMutation: () => ({ mutate: async () => {}, isLoading: false }),
  useContext: () => createTRPCClient(),
};