import React from 'react';
import { useParentState } from '../useIframeState';
import { HighestRatedMembersTable } from '../../../../packages/features/insights/components/HighestRatedMembersTable';

// Mock data and client configurations
const mockTrpcClient = {
  viewer: {
    insights: {
      membersWithHighestRatings: {
        useQuery: () => ({
          data: [
            { id: 1, name: 'John Doe', rating: 4.8, feedbackCount: 50 },
            { id: 2, name: 'Jane Smith', rating: 4.7, feedbackCount: 45 },
            { id: 3, name: 'Bob Johnson', rating: 4.6, feedbackCount: 40 },
          ],
          isSuccess: true,
          isPending: false,
        }),
      },
    },
  },
};

// Create InsightsOrgTeamsContext
const InsightsOrgTeamsContext = React.createContext<any>(null);

// Mock InsightsOrgTeamsProvider
const MockInsightsOrgTeamsProvider = ({ children }: { children: React.ReactNode }) => {
  const mockValue = {
    teams: [
      { id: 1, name: 'Team 1' },
      { id: 2, name: 'Team 2' },
    ],
    isLoading: false,
    selectedTeamId: 1,
    setSelectedTeamId: () => {},
  };

  return (
    <InsightsOrgTeamsContext.Provider value={mockValue}>
      {children}
    </InsightsOrgTeamsContext.Provider>
  );
};

// Create mock TRPC context
const TRPCContext = React.createContext(mockTrpcClient);

// Mock TRPCProvider component
const MockTRPCProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <TRPCContext.Provider value={mockTrpcClient}>
      {children}
    </TRPCContext.Provider>
  );
};

// Mock the useLocale hook
const mockUseLocale = () => ({
  t: (key: string) => key,
  i18n: {
    language: 'en',
    defaultLocale: 'en',
    locales: ['en'],
  },
});

// Mock the useInsightsParameters hook
const mockUseInsightsParameters = () => ({
  isAll: true,
  teamId: 1,
  startDate: new Date('2023-01-01'),
  endDate: new Date('2023-12-31'),
  eventTypeId: 1,
});

// Mock useInsightsOrgTeams hook
const mockUseInsightsOrgTeams = () => ({
  teams: [
    { id: 1, name: 'Team 1' },
    { id: 2, name: 'Team 2' },
  ],
  isLoading: false,
  selectedTeamId: 1,
  setSelectedTeamId: () => {},
});

// Mock I18nLanguageHandler component
const I18nLanguageHandler = ({ children }: { children: React.ReactNode }) => <>{children}</>;

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
    (global as any).trpc = mockTrpcClient;
    (global as any).useLocale = mockUseLocale;
    (global as any).useInsightsParameters = mockUseInsightsParameters;
    (global as any).useInsightsOrgTeams = mockUseInsightsOrgTeams;
  }, []);

  return (
    <MockTRPCProvider>
      <MockInsightsOrgTeamsProvider>
        <I18nLanguageHandler>
          <HighestRatedMembersTable />
        </I18nLanguageHandler>
      </MockInsightsOrgTeamsProvider>
    </MockTRPCProvider>
  );
}