import React, { Suspense, useState, useEffect } from 'react';
import { useParentState } from '../useIframeState';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';
import { I18nextProvider } from 'react-i18next';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { FeatureProvider } from '@calcom/features/flags/context/provider';
import i18next from 'i18next';

// Initialize i18next
const i18n = i18next.createInstance();
i18n.init({
  lng: 'en',
  resources: {},
});

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

const FallbackComponent = () => (
  <div>
    <p>Unable to load the component. Please try again later.</p>
  </div>
);

export default function ComponentPreview() {
  const [DynamicComponent, setDynamicComponent] = useState<any>(null);
  const [error, setError] = useState<boolean>(false);

  const [state, setState] = useParentState({
    params: {
      type: "string",
      value: JSON.stringify({ type: "1" }),
      label: "Params",
    },
    searchParams: {
      type: "string",
      value: JSON.stringify({}),
      label: "Search Params",
    },
  });

  useEffect(() => {
    const loadComponent = async () => {
      try {
        // Using dynamic import with error handling
        const component = await import('../../app/(use-page-wrapper)/event-types/[type]/page')
          .catch((err) => {
            console.error('Failed to load component:', err);
            setError(true);
            return { default: FallbackComponent };
          });
        setDynamicComponent(() => component.default);
      } catch (err) {
        console.error('Error loading component:', err);
        setError(true);
        setDynamicComponent(() => FallbackComponent);
      }
    };

    loadComponent();
  }, []);

  const params = JSON.parse(state.params.value);
  const searchParams = JSON.parse(state.searchParams.value);

  if (error) {
    return <FallbackComponent />;
  }

  if (!DynamicComponent) {
    return <div>Loading...</div>;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SessionProvider session={null}>
        <I18nextProvider i18n={i18n}>
          <QueryClientProvider client={queryClient}>
            <TooltipProvider>
              <FeatureProvider>
                <ErrorBoundary fallback={<FallbackComponent />}>
                  <DynamicComponent params={params} searchParams={searchParams} />
                </ErrorBoundary>
              </FeatureProvider>
            </TooltipProvider>
          </QueryClientProvider>
        </I18nextProvider>
      </SessionProvider>
    </Suspense>
  );
}

// Simple Error Boundary Component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; fallback: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}