import React from 'react';
import { useParentState } from '../useIframeState';

// Mock data
const mockSession = {
  data: {
    user: {
      id: 1,
      org: {
        id: 1
      }
    }
  }
};

const mockInsightsData = {
  orgTeamsType: 'team' as const,
  selectedTeamId: 1,
  setOrgTeamsType: () => {},
  setSelectedTeamId: () => {},
  isAll: false,
  teamId: 1,
  userId: 1,
  memberUserId: null,
  startDate: new Date('2024-01-01'),
  endDate: new Date('2024-01-31'),
  eventTypeId: null
};

// Create mock component that uses our mocked data
const MockAverageEventDurationChart = () => {
  return (
    <div className="bg-white rounded-md border border-gray-200 p-6">
      <h3 className="text-emphasis mb-4">average_event_duration</h3>
      <div className="h-80">
        <div className="flex items-center justify-center h-full">
          <p>Mock Chart Data</p>
        </div>
      </div>
    </div>
  );
};

// Mock providers for preview
const I18nLanguageHandler = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

// Mock TRPC Provider
const MockTRPCProvider = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // No props to set for this component
  });

  return (
    <I18nLanguageHandler>
      <MockTRPCProvider>
        <div style={{ width: '100%', height: '400px' }}>
          <MockAverageEventDurationChart />
        </div>
      </MockTRPCProvider>
    </I18nLanguageHandler>
  );
}