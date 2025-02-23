import React from 'react';
import { useParentState } from '../useIframeState';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';
import { I18nextProvider } from 'react-i18next';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { FeatureProvider } from '@calcom/features/flags/context/provider';

// Lazy load the component to handle any potential loading errors
const ImportedComponent = React.lazy(() => import('../../app/(use-page-wrapper)/settings/(settings-layout)/teams/[id]/settings/page')
  .catch(err => {
    console.error('Failed to load component:', err);
    return { default: () => <div>Error loading component</div> };
  })
);

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // Since this component doesn't have any props, we don't need to define any state
  });

  // Mock the getTranslate function
  const mockGetTranslate = () => (key: string) => key;

  // Mock the generateMetadata function
  const mockGenerateMetadata = async () => ({
    title: 'Settings',
    description: 'Team settings description'
  });

  // Mock i18n instance
  const i18nInstance = {
    language: 'en',
    languages: ['en'],
    loadNamespaces: () => Promise.resolve(),
    t: (key: string) => key,
    // Add other required i18n methods as needed
  };

  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <QueryClientProvider client={queryClient}>
        <SessionProvider>
          <I18nextProvider i18n={i18nInstance}>
            <TooltipProvider>
              <FeatureProvider>
                <React.Suspense fallback={<div>Loading...</div>}>
                  <ImportedComponent 
                    getTranslate={mockGetTranslate}
                    generateMetadata={mockGenerateMetadata}
                  />
                </React.Suspense>
              </FeatureProvider>
            </TooltipProvider>
          </I18nextProvider>
        </SessionProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

// Simple ErrorBoundary component
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

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}