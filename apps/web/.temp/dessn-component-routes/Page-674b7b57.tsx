import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';
import { SessionProvider } from 'next-auth/react';
import { I18nextProvider } from 'react-i18next';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { FeatureProvider } from '@calcom/features/flags/context/provider';
import { OrgBrandingProvider } from '@calcom/features/ee/organizations/context/provider';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

const ImportedComponent = React.lazy(() => import('../../app/(use-page-wrapper)/settings/(admin-layout)/admin/organizations/[id]/edit/page'));

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    params: {
      type: "string",
      value: JSON.stringify({ id: "1" }),
      label: "Params",
    },
  });

  const params = JSON.parse(state.params.value);

  return (
    <ErrorBoundary>
      <SessionProvider>
        <I18nextProvider i18n={{}}>
          <QueryClientProvider client={queryClient}>
            <TooltipProvider>
              <FeatureProvider>
                <OrgBrandingProvider>
                  <Suspense fallback={<div>Loading...</div>}>
                    <ImportedComponent params={params} />
                  </Suspense>
                </OrgBrandingProvider>
              </FeatureProvider>
            </TooltipProvider>
          </QueryClientProvider>
        </I18nextProvider>
      </SessionProvider>
    </ErrorBoundary>
  );
}

// Simple Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
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