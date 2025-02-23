import React from 'react';
import { useParentState } from '../useIframeState';
import { AverageEventDurationChart } from '../../../../packages/features/insights/components/AverageEventDurationChart';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createTRPCReact, httpBatchLink } from '@trpc/react-query';
import superjson from 'superjson';
import { SessionProvider } from 'next-auth/react';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import { InsightsOrgTeamsContext } from '@calcom/features/insights/context/InsightsOrgTeamsProvider';

// Initialize i18next
i18next.init({
  lng: 'en',
  resources: {
    en: {
      translation: {
        "average_event_duration": "Average Event Duration",
        "insights_no_data_found_for_filter": "No data found for the selected filters"
      }
    }
  }
});

// Create a mock TRPC instance
const trpc = createTRPCReact();

// Mock data provider
const mockTrpcProvider = trpc.createClient({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000/api/trpc',
    }),
  ],
  transformer: superjson,
});

// Mock session data
const mockSession = {
  data: {
    user: {
      id: 1,
      org: {
        id: 1,
        role: "ADMIN"
      },
    },
    expires: "1",
  },
  status: 'authenticated',
};

// Create a wrapper component to provide mock data
const MockProvider = ({ children }) => {
  const [queryClient] = React.useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
      },
    },
  }));

  // Mock the TRPC query response
  React.useEffect(() => {
    queryClient.setQueryData(
      [['viewer', 'insights', 'averageEventDuration']],
      [
        { Date: '2023-01-01', Average: 30 },
        { Date: '2023-01-02', Average: 45 },
        { Date: '2023-01-03', Average: 35 },
        { Date: '2023-01-04', Average: 40 },
      ]
    );
  }, [queryClient]);

  const mockInsightsOrgTeamsValue = {
    orgTeamsType: "org",
    setOrgTeamsType: () => {},
    selectedTeamId: undefined,
    setSelectedTeamId: () => {},
  };

  return (
    <I18nextProvider i18n={i18next}>
      <SessionProvider session={mockSession}>
        <trpc.Provider client={mockTrpcProvider} queryClient={queryClient}>
          <QueryClientProvider client={queryClient}>
            <InsightsOrgTeamsContext.Provider value={mockInsightsOrgTeamsValue}>
              {children}
            </InsightsOrgTeamsContext.Provider>
          </QueryClientProvider>
        </trpc.Provider>
      </SessionProvider>
    </I18nextProvider>
  );
};

// Mock the useInsightsParameters hook
const useInsightsParameters = () => ({
  isAll: true,
  teamId: 1,
  userId: 1,
  memberUserId: undefined,
  startDate: new Date('2023-01-01'),
  endDate: new Date('2023-12-31'),
  eventTypeId: undefined,
});

// Create a wrapped version of AverageEventDurationChart with mocked hooks
const WrappedAverageEventDurationChart = () => {
  return <AverageEventDurationChart />;
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // No props to set for this component
  });

  return (
    <MockProvider>
      <WrappedAverageEventDurationChart />
    </MockProvider>
  );
}