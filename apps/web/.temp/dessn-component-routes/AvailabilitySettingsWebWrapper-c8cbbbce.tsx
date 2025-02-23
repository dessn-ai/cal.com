import React, { createContext, useContext } from 'react';
import { useParentState } from '../useIframeState';
import { AvailabilitySettingsWebWrapper } from '../../modules/availability/[schedule]/schedule-view';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import { KBarProvider } from 'kbar';

// Initialize i18next
i18next.init({
  lng: 'en',
  resources: {
    en: {
      translation: {
        success: 'Success',
        schedule_deleted_successfully: 'Schedule deleted successfully',
        availability_updated_successfully: 'Availability updated successfully',
      },
    },
  },
});

// Create OrgBranding Context
const OrgBrandingContext = createContext(null);

// Create useOrgBranding hook
export const useOrgBranding = () => {
  const context = useContext(OrgBrandingContext);
  if (!context) {
    throw new Error('useOrgBranding was used outside of OrgBrandingProvider.');
  }
  return context;
};

// Create custom OrgBrandingProvider
const CustomOrgBrandingProvider = ({ children }) => {
  const mockOrgBranding = {
    brandColor: '#292929',
    darkBrandColor: '#fafafa',
    theme: null,
    logo: '',
    name: 'Test Organization',
    orgUsername: 'test-org',
    slug: 'test-org',
    hideBranding: false,
  };

  return (
    <OrgBrandingContext.Provider value={mockOrgBranding}>
      {children}
    </OrgBrandingContext.Provider>
  );
};

// Create Feature Context and Provider
const FeaturesContext = createContext({
  'email-verification': true,
  'organizations': true,
  'teams': true,
  'webhooks': true,
  'workflows': true,
  'booking-page-v2': true,
  'availability': true,
});

const CustomFeatureProvider = ({ children }) => {
  const features = {
    'email-verification': true,
    'organizations': true,
    'teams': true,
    'webhooks': true,
    'workflows': true,
    'booking-page-v2': true,
    'availability': true,
  };

  return (
    <FeaturesContext.Provider value={features}>
      {children}
    </FeaturesContext.Provider>
  );
};

// Create a mock TRPC Provider component
const TRPCProvider = ({ children }) => {
  const mockTrpcContext = {
    useQuery: () => ({
      data: null,
      isLoading: false,
      error: null,
    }),
    useMutation: () => ({
      mutate: async () => {},
      isLoading: false,
      error: null,
    }),
    useContext: () => ({
      client: {
        query: () => Promise.resolve(null),
        mutation: () => Promise.resolve(null),
      },
    }),
    viewer: {
      availability: {
        schedule: {
          get: {
            useQuery: () => ({
              data: null,
              isLoading: false,
              error: null,
            }),
          },
          update: {
            useMutation: () => ({
              mutate: async () => {},
              isLoading: false,
            }),
          },
        },
      },
      getTravelSchedules: {
        useQuery: () => ({
          data: [],
          isLoading: false,
        }),
      },
      me: {
        useQuery: () => ({
          data: {
            timeFormat: 12,
            weekStart: 'Sunday',
            defaultScheduleId: 1,
            completedOnboarding: true,
            emailVerified: true,
          },
          isLoading: false,
        }),
      },
    },
  };

  return <div data-testid="mock-trpc-provider">{children}</div>;
};

export default function ComponentPreview() {
  // Create QueryClient instance inside the component
  const [queryClient] = React.useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
      },
    },
  }));

  const [state, setState] = useParentState({
    scheduleFetched: {
      type: "string",
      value: JSON.stringify({
        id: 1,
        name: "Default Schedule",
        timeZone: "America/New_York",
        availability: [],
        schedule: [],
        dateOverrides: [],
        workingHours: [],
        userId: 1,
      }),
      label: "Schedule Fetched",
    },
    travelSchedules: {
      type: "string",
      value: JSON.stringify([
        {
          id: 1,
          name: "Business Trip",
          startDate: new Date().toISOString(),
          endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
        },
      ]),
      label: "Travel Schedules",
    },
  });

  const parsedScheduleFetched = state.scheduleFetched.value ? JSON.parse(state.scheduleFetched.value) : undefined;
  const parsedTravelSchedules = state.travelSchedules.value ? JSON.parse(state.travelSchedules.value) : [];

  // Mock session data with organization and complete user profile
  const mockSession = {
    user: {
      id: 1,
      name: 'Test User',
      email: 'test@example.com',
      timeFormat: 12,
      weekStart: 'Sunday',
      defaultScheduleId: 1,
      completedOnboarding: true,
      emailVerified: true,
      organization: {
        id: 1,
        slug: 'test-org',
        name: 'Test Organization',
        logo: '',
      },
    },
    expires: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
  };

  // Mock KBar actions
  const mockActions = [];

  return (
    <CustomFeatureProvider>
      <QueryClientProvider client={queryClient}>
        <TRPCProvider>
          <SessionProvider session={mockSession}>
            <I18nextProvider i18n={i18next}>
              <CustomOrgBrandingProvider>
                <KBarProvider actions={mockActions}>
                  <AvailabilitySettingsWebWrapper
                    scheduleFetched={parsedScheduleFetched}
                    travelSchedules={parsedTravelSchedules}
                  />
                </KBarProvider>
              </CustomOrgBrandingProvider>
            </I18nextProvider>
          </SessionProvider>
        </TRPCProvider>
      </QueryClientProvider>
    </CustomFeatureProvider>
  );
}