import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/settings/TimezoneChangeDialog';
import { SessionProvider } from 'next-auth/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a mock TRPC Provider component
const MockTRPCProvider = ({ children }) => {
  return children;
};

// Create a new QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      // Prevent actual data fetching
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    showDialog: {
      type: "boolean",
      value: true,
      label: "Show Dialog",
    },
  });

  return (
    <SessionProvider session={null}>
      <QueryClientProvider client={queryClient}>
        <MockTRPCProvider>
          {state.showDialog.value && (
            <React.Suspense fallback={<div>Loading...</div>}>
              <ImportedComponent />
            </React.Suspense>
          )}
        </MockTRPCProvider>
      </QueryClientProvider>
    </SessionProvider>
  );
}