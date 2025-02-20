import React from 'react';
import { useParentState } from '../useIframeState';
import { ConnectedVideoStep } from '../../components/getting-started/steps-views/ConnectedVideoStep';
import { SessionProvider } from 'next-auth/react';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { FeatureProvider } from '@calcom/features/flags/context/provider';

// Initialize i18next
const i18n = i18next.createInstance();
i18n.init({
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en: {
      translation: {
        next_step_text: 'Next Step',
      }
    }
  },
  interpolation: {
    escapeValue: false
  }
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

// Mock data
const mockMetadata = {
  defaultConferencingApp: { appSlug: 'zoom' },
  defaultScheduleId: null,
  timeFormat: null,
  addressFormat: null,
  completedOnboarding: false,
  theme: null,
  weekStart: "Monday",
  hideBranding: false,
  timeZone: "UTC",
  allowDynamicBooking: true,
  brandColor: "#292929",
  darkBrandColor: "#fafafa",
  isPrivate: false
};

// Create a wrapper component that provides the mocked data
const MockDataProvider = ({ children }: { children: React.ReactNode }) => {
  React.useEffect(() => {
    // Mock the global objects
    const mockTrpc = {
      viewer: {
        integrations: {
          useQuery: () => ({
            data: {
              items: [
                {
                  name: "Zoom",
                  logo: "zoom-logo.png",
                  slug: "zoom",
                  type: "video",
                  description: "Zoom Video Integration",
                  userCredentialIds: [],
                  appData: {
                    location: {
                      linkType: "dynamic"
                    }
                  },
                  dependencyData: {}
                }
              ]
            },
            isPending: false
          })
        }
      }
    };

    const mockUseMeQuery = () => ({
      data: {
        metadata: mockMetadata
      }
    });

    // Attach to window
    (window as any).trpc = mockTrpc;
    (window as any).useMeQuery = mockUseMeQuery;

    // Mock the modules
    (window as any).require = (module: string) => {
      if (module === '@calcom/trpc/react') {
        return { trpc: mockTrpc };
      }
      if (module === '@calcom/trpc/react/hooks/useMeQuery') {
        return { default: mockUseMeQuery };
      }
      return {};
    };
  }, []);

  return <>{children}</>;
};

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
    <SessionProvider>
      <I18nextProvider i18n={i18n}>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <FeatureProvider>
              <MockDataProvider>
                <ConnectedVideoStep
                  nextStep={handleNextStep}
                />
              </MockDataProvider>
            </FeatureProvider>
          </TooltipProvider>
        </QueryClientProvider>
      </I18nextProvider>
    </SessionProvider>
  );
}