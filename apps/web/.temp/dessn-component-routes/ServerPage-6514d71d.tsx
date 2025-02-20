import React, { Suspense, lazy } from 'react';
import { useParentState } from '../useIframeState';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import { SessionProvider } from 'next-auth/react';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { FeatureProvider } from '@calcom/features/flags/context/provider';

// Initialize i18next
const i18n = i18next.createInstance();
i18n.init({
  lng: 'en',
  resources: {},
});

// Initialize QueryClient
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

// Mock TRPC Provider to avoid initialization errors
const MockTRPCProvider = ({ children }) => {
  return children;
};

// Custom Error Boundary Component
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
        <div>
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

// Lazy load the imported component
const LazyImportedComponent = lazy(() => {
  return new Promise((resolve) => {
    import('../../app/(use-page-wrapper)/video/meeting-not-started/[uid]/page')
      .then((module) => {
        resolve({
          default: (props) => {
            try {
              const Component = module.default;
              return <Component {...props} />;
            } catch (error) {
              console.error('Error rendering component:', error);
              return <div>Error loading component</div>;
            }
          },
        });
      })
      .catch((error) => {
        console.error('Error importing component:', error);
        resolve({
          default: () => <div>Failed to load component</div>,
        });
      });
  });
});

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    params: {
      type: "string",
      value: JSON.stringify({ uid: "example-uid" }),
      label: "Params",
    },
    searchParams: {
      type: "string",
      value: JSON.stringify({ query: "example" }),
      label: "Search Params",
    },
  });

  try {
    const params = JSON.parse(state.params.value);
    const searchParams = JSON.parse(state.searchParams.value);

    return (
      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <SessionProvider session={null}>
            <I18nextProvider i18n={i18n}>
              <MockTRPCProvider>
                <QueryClientProvider client={queryClient}>
                  <TooltipProvider>
                    <FeatureProvider>
                      <LazyImportedComponent params={params} searchParams={searchParams} />
                    </FeatureProvider>
                  </TooltipProvider>
                </QueryClientProvider>
              </MockTRPCProvider>
            </I18nextProvider>
          </SessionProvider>
        </Suspense>
      </ErrorBoundary>
    );
  } catch (error) {
    console.error('Error in ComponentPreview:', error);
    return <div>Error: Failed to initialize component</div>;
  }
}