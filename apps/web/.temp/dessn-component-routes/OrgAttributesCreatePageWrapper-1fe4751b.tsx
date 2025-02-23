import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create QueryClient
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

// Mock Components
const MockProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>;

// Error Boundary Component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ color: 'red', padding: '20px' }}>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error?.toString()}
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}

// Loading component
const Loading = () => (
  <div style={{ padding: '20px' }}>Loading...</div>
);

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  const ImportedComponent = React.lazy(() => 
    import('../../app/(use-page-wrapper)/settings/(settings-layout)/organizations/attributes/create/page')
      .catch(err => {
        console.error("Failed to load component:", err);
        return { default: () => <div>Failed to load component</div> };
      })
  );

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <MockProvider>
          <Suspense fallback={<Loading />}>
            <div className="preview-container">
              <ImportedComponent />
            </div>
          </Suspense>
        </MockProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

// Define minimal mock objects for global use
const mockUI = {
  Dialog: ({ children }: { children: React.ReactNode }) => <div>{children}</div>
};

const mockTrpc = {
  useQuery: () => ({ data: null, isLoading: false }),
  useMutation: () => ({ mutate: async () => {}, isLoading: false })
};

if (typeof window !== 'undefined') {
  (window as any).UI = mockUI;
  (window as any).trpc = mockTrpc;
}