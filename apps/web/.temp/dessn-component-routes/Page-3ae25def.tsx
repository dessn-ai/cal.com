import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { I18nextProvider } from 'react-i18next';
import { SessionProvider } from 'next-auth/react';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { FeatureProvider } from '@calcom/features/flags/context/provider';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

const ErrorFallback = ({ error }: { error: Error }) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
    </div>
  );
};

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
      return <ErrorFallback error={this.state.error!} />;
    }

    return this.props.children;
  }
}

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  // Mock the getTranslate function
  const mockGetTranslate = async () => (key: string) => key;

  // Mock the SettingsHeader component
  const MockSettingsHeader = ({ children }: { children: React.ReactNode }) => (
    <div>
      <h1>Mock Settings Header</h1>
      {children}
    </div>
  );

  // Mock the DirectorySyncTeamView component
  const MockDirectorySyncTeamView = () => <div>Mock Directory Sync Team View</div>;

  const ImportedComponentWithSuspense = React.lazy(() =>
    import('../../app/(use-page-wrapper)/settings/(settings-layout)/organizations/dsync/page')
      .catch(error => ({
        default: () => <div>Error loading component: {error.message}</div>
      }))
  );

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <SessionProvider>
          <I18nextProvider i18n={{} as any}>
            <TooltipProvider>
              <FeatureProvider>
                <Suspense fallback={<div>Loading...</div>}>
                  <ImportedComponentWithSuspense
                    getTranslate={mockGetTranslate}
                    SettingsHeader={MockSettingsHeader}
                    DirectorySyncTeamView={MockDirectorySyncTeamView}
                  />
                </Suspense>
              </FeatureProvider>
            </TooltipProvider>
          </I18nextProvider>
        </SessionProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}