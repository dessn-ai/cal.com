import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/settings/TimezoneChangeDialog';
import { SessionProvider } from 'next-auth/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a new QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

// Mock TRPC Provider to avoid API calls
const MockTRPCProvider = ({ children }) => {
  return children;
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    showDialog: {
      type: "boolean",
      value: true,
      label: "Show Dialog",
    },
  });

  return (
    <div className="preview-container">
      <SessionProvider session={null}>
        <MockTRPCProvider>
          <QueryClientProvider client={queryClient}>
            {state.showDialog.value && (
              <React.Suspense fallback={<div>Loading...</div>}>
                <ImportedComponent 
                  onClose={() => setState(prev => ({
                    ...prev,
                    showDialog: {
                      ...prev.showDialog,
                      value: false
                    }
                  }))}
                />
              </React.Suspense>
            )}
          </QueryClientProvider>
        </MockTRPCProvider>
      </SessionProvider>
    </div>
  );
}