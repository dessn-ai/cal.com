import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/teams/components/MakeTeamPrivateSwitch';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from '@radix-ui/react-tooltip';

// Mock providers
const SessionProvider = ({ children }) => children;
const I18nextProvider = ({ children }) => children;
const TRPCProvider = ({ children }) => children;
const FeatureProvider = ({ children }) => children;
const OrgBrandingProvider = ({ children }) => children;

const ErrorFallback = ({ error }) => (
  <div>
    <h2>Something went wrong:</h2>
    <pre>{error.message}</pre>
  </div>
);

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
      return <ErrorFallback error={this.state.error} />;
    }
    return this.props.children;
  }
}

export default function ComponentPreview() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        cacheTime: 0,
      },
    },
  });

  const [state, setState] = useParentState({
    teamId: {
      type: "number",
      value: 1,
      label: "Team ID",
    },
    isPrivate: {
      type: "boolean",
      value: false,
      label: "Is Private",
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled",
    },
    isOrg: {
      type: "boolean",
      value: false,
      label: "Is Organization",
    },
  });

  // Mock TRPC context
  const mockUtils = {
    viewer: {
      teams: {
        update: {
          useMutation: () => ({
            mutate: async () => {},
            isLoading: false,
            isPending: false
          })
        }
      }
    }
  };

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <SessionProvider>
          <I18nextProvider>
            <TRPCProvider>
              <TooltipProvider>
                <FeatureProvider>
                  <OrgBrandingProvider>
                    <Suspense fallback={<div>Loading...</div>}>
                      <div style={{ padding: '20px' }}>
                        <ImportedComponent
                          teamId={state.teamId.value}
                          isPrivate={state.isPrivate.value}
                          disabled={state.disabled.value}
                          isOrg={state.isOrg.value}
                        />
                      </div>
                    </Suspense>
                  </OrgBrandingProvider>
                </FeatureProvider>
              </TooltipProvider>
            </TRPCProvider>
          </I18nextProvider>
        </SessionProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}