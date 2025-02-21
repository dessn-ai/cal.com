import React from 'react';
import { useParentState } from '../useIframeState';
import { ConnectedVideoStep } from '../../components/getting-started/steps-views/ConnectedVideoStep';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create contexts for our mocked functionality
const LocaleContext = React.createContext({ t: (key: string) => key });
const TRPCContext = React.createContext({
  viewer: {
    integrations: {
      useQuery: () => ({
        data: {
          items: [
            {
              name: "Zoom",
              slug: "zoom",
              logo: "zoom-logo.svg",
              type: "video",
              description: "Video conferencing solution",
              userCredentialIds: [],
              appData: {
                location: {
                  linkType: "dynamic"
                }
              },
              dependencyData: null
            }
          ]
        },
        isPending: false
      })
    }
  }
});

// Mock hooks by overriding the real ones
const mockUseLocale = () => React.useContext(LocaleContext);
const mockUseMeQuery = () => ({
  data: {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    metadata: {
      defaultConferencingApp: {
        appSlug: null
      }
    }
  }
});

// Override the real hooks with our mocked versions
(window as any).useLocale = mockUseLocale;
(window as any).useMeQuery = mockUseMeQuery;

// Create a new QueryClient instance
const queryClient = new QueryClient();

// Create a wrapper component that provides all necessary context
const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    <LocaleContext.Provider value={{ t: (key: string) => key }}>
      <TRPCContext.Provider value={{
        viewer: {
          integrations: {
            useQuery: () => ({
              data: {
                items: [
                  {
                    name: "Zoom",
                    slug: "zoom",
                    logo: "zoom-logo.svg",
                    type: "video",
                    description: "Video conferencing solution",
                    userCredentialIds: [],
                    appData: {
                      location: {
                        linkType: "dynamic"
                      }
                    },
                    dependencyData: null
                  }
                ]
              },
              isPending: false
            })
          }
        }
      }}>
        {children}
      </TRPCContext.Provider>
    </LocaleContext.Provider>
  </QueryClientProvider>
);

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    nextStep: {
      type: "boolean",
      value: false,
      label: "Trigger Next Step",
    },
  });

  const handleNextStep = () => {
    setState('nextStep', true);
    console.log('Next step triggered');
  };

  return (
    <Providers>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <ConnectedVideoStep
          nextStep={handleNextStep}
        />
      </ErrorBoundary>
    </Providers>
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