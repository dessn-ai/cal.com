import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

// Lazy load the component to handle any potential import errors
const ImportedComponent = React.lazy(() => import('../../app/(use-page-wrapper)/settings/(settings-layout)/organizations/teams/other/page').catch(() => ({
  default: () => <div>Error loading component</div>,
})));

// Initialize i18next
const i18n = i18next.createInstance();
i18n.init({
  fallbackLng: 'en',
  debug: false,
  resources: {},
});

// Create a new QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

// Mock TRPC Provider component
const MockTRPCProvider = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

// Mock the trpc object with empty queries and mutations
const mockTrpc = {
  useQuery: () => ({
    data: undefined,
    isLoading: false,
    error: null,
  }),
  useMutation: () => ({
    mutate: async () => {},
    isLoading: false,
    error: null,
  }),
};

// Create a mock context
const MockTrpcContext = React.createContext(mockTrpc);

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // Since this component doesn't have any props, we don't need to define any state
  });

  // Mock the getTranslate function
  const mockGetTranslate = async () => (key: string) => key;

  return (
    <QueryClientProvider client={queryClient}>
      <MockTRPCProvider>
        <MockTrpcContext.Provider value={mockTrpc}>
          <I18nextProvider i18n={i18n}>
            <Suspense fallback={<div>Loading...</div>}>
              <ErrorBoundary>
                <ImportedComponent getTranslate={mockGetTranslate} />
              </ErrorBoundary>
            </Suspense>
          </I18nextProvider>
        </MockTrpcContext.Provider>
      </MockTRPCProvider>
    </QueryClientProvider>
  );
}

// Simple Error Boundary Component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error('Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong loading the component.</div>;
    }

    return this.props.children;
  }
}