import React from 'react';
import { useParentState } from '../useIframeState';
import { RoutingFormResponsesTable } from '../../../../packages/features/insights/components/RoutingFormResponsesTable';
import { trpc } from '@calcom/trpc/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // Since there are no props for this component, we don't need to define any state
  });

  const [queryClient] = React.useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        // Since this is a preview, we can disable refetching
        refetchOnWindowFocus: false,
        // Add a default error handler
        onError: (err) => {
          console.error('Query error:', err);
        }
      }
    }
  }));

  const [trpcClient] = React.useState(() => {
    try {
      return trpc.createClient({
        links: [
          httpBatchLink({
            url: '/api/trpc',
            // Add headers if needed
            headers: () => ({
              'x-preview': 'true'
            })
          }),
        ],
      });
    } catch (e) {
      console.error('Failed to create TRPC client:', e);
      // Return a minimal client that won't throw
      return {
        query: () => ({
          data: [],
          isLoading: false,
          error: null
        }),
        mutation: () => ({
          mutate: async () => {},
          isLoading: false,
          error: null
        })
      };
    }
  });

  // Wrap the component in an error boundary
  return (
    <ErrorBoundary fallback={<div>Error loading table</div>}>
      <trpc.Provider client={trpcClient} queryClient={queryClient}>
        <QueryClientProvider client={queryClient}>
          <React.Suspense fallback={<div>Loading...</div>}>
            <RoutingFormResponsesTable />
          </React.Suspense>
        </QueryClientProvider>
      </trpc.Provider>
    </ErrorBoundary>
  );
}

// Simple error boundary component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; fallback: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}