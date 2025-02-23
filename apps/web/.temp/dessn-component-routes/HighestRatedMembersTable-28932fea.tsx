import React from 'react';
import { useParentState } from '../useIframeState';
import { HighestRatedMembersTable } from '../../../../packages/features/insights/components/HighestRatedMembersTable';

// Mock the trpc.viewer.insights.membersWithHighestRatings.useQuery
const mockUseQuery = () => ({
  data: [
    { id: 1, name: 'John Doe', rating: 4.8, feedbackCount: 50 },
    { id: 2, name: 'Jane Smith', rating: 4.7, feedbackCount: 45 },
    { id: 3, name: 'Bob Johnson', rating: 4.6, feedbackCount: 40 },
  ],
  isSuccess: true,
  isPending: false,
});

// Mock the trpc object
const mockTrpc = {
  viewer: {
    insights: {
      membersWithHighestRatings: {
        useQuery: mockUseQuery,
      },
    },
  },
};

// Mock the useLocale hook
const mockUseLocale = () => ({
  t: (key: string) => key,
});

// Create Insights Context
const InsightsContext = React.createContext<{
  isAll: boolean;
  teamId: number;
  startDate: Date;
  endDate: Date;
  eventTypeId: number | null;
}>({
  isAll: true,
  teamId: 1,
  startDate: new Date('2023-01-01'),
  endDate: new Date('2023-12-31'),
  eventTypeId: 1,
});

// Create mock InsightsProvider
const MockInsightsProvider = ({ children }: { children: React.ReactNode }) => {
  const value = {
    isAll: true,
    teamId: 1,
    startDate: new Date('2023-01-01'),
    endDate: new Date('2023-12-31'),
    eventTypeId: 1,
  };

  return (
    <InsightsContext.Provider value={value}>
      {children}
    </InsightsContext.Provider>
  );
};

// Create a mock i18n provider component
const I18nProvider = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

// Create a mock TRPC provider component
const MockTRPCProvider = ({ children }: { children: React.ReactNode }) => {
  React.useEffect(() => {
    (global as any).trpc = mockTrpc;
  }, []);
  
  return <>{children}</>;
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isAll: {
      type: "boolean",
      value: true,
      label: "Is All",
    },
    teamId: {
      type: "number",
      value: 1,
      label: "Team ID",
    },
    startDate: {
      type: "string",
      value: new Date('2023-01-01').toISOString(),
      label: "Start Date",
    },
    endDate: {
      type: "string",
      value: new Date('2023-12-31').toISOString(),
      label: "End Date",
    },
    eventTypeId: {
      type: "number",
      value: 1,
      label: "Event Type ID",
    },
  });

  // Override the necessary hooks and modules
  React.useEffect(() => {
    (global as any).useLocale = mockUseLocale;
  }, []);

  return (
    <I18nProvider>
      <MockTRPCProvider>
        <MockInsightsProvider>
          <HighestRatedMembersTable />
        </MockInsightsProvider>
      </MockTRPCProvider>
    </I18nProvider>
  );
}