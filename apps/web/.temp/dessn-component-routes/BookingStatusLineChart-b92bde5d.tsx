import React, { createContext, useContext } from 'react';
import { useParentState } from '../useIframeState';
import { BookingStatusLineChart } from '../../../../packages/features/insights/components/BookingStatusLineChart';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import { createTRPCReact } from '@trpc/react-query';
import superjson from 'superjson';
import { InsightsOrgTeamsProvider } from '../../../../packages/features/insights/context/InsightsOrgTeamsProvider';

// Create contexts for our mocked functionality
const InsightsParametersContext = createContext(null);
const LocaleContext = createContext(null);

// Create custom hooks that will override the original ones
export const useInsightsParameters = () => {
  return {
    isAll: true,
    teamId: undefined,
    userId: undefined,
    startDate: new Date(new Date().setMonth(new Date().getMonth() - 1)),
    endDate: new Date(),
    dateRangePreset: 'm',
    eventTypeId: undefined,
  };
};

export const useLocale = () => {
  return {
    t: (key: string) => key,
    i18n: {
      language: 'en',
      defaultLocale: 'en',
      locales: ['en'],
    },
    isLocaleReady: true,
    setLocale: () => {},
  };
};

// Create a new TRPC instance
const trpc = createTRPCReact();

// Create a new query client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

// Create TRPC client
const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: '/api/trpc',
    }),
  ],
  transformer: superjson,
});

// Mock data for InsightsOrgTeamsProvider
const mockTeamsData = {
  teams: [],
  currentTeamId: undefined,
  setCurrentTeamId: () => {},
  isLoading: false,
};

// Create a wrapper component that provides all necessary context
const ProvidersWrapper = ({ children }) => {
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <InsightsOrgTeamsProvider value={mockTeamsData}>
          {children}
        </InsightsOrgTeamsProvider>
      </QueryClientProvider>
    </trpc.Provider>
  );
};

// Mock the components that use the hooks
const MockedBookingStatusLineChart = () => {
  const insightsParams = useInsightsParameters();
  const locale = useLocale();
  
  return <BookingStatusLineChart />;
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // No props to set for this component
  });

  return (
    <ProvidersWrapper>
      <MockedBookingStatusLineChart />
    </ProvidersWrapper>
  );
}