import React, { createContext, useState } from 'react';
import { useParentState } from '../useIframeState';
import { RecentFeedbackTable } from '../../../../packages/features/insights/components/RecentFeedbackTable';

// Types from the original implementation
type OrgTeamsType = 'org' | 'team' | 'yours';

type InsightsOrgTeamsContextType = {
  orgTeamsType: OrgTeamsType;
  setOrgTeamsType: (type: OrgTeamsType) => void;
  selectedTeamId: number | undefined;
  setSelectedTeamId: (id: number | undefined) => void;
};

// Create the context with the exact same type
export const InsightsOrgTeamsContext = createContext<InsightsOrgTeamsContextType | null>(null);

// Mock next-auth session
const mockSession = {
  data: {
    user: {
      id: 1,
      org: {
        id: 1,
        role: 'ADMIN'
      }
    }
  },
  status: 'authenticated'
};

// Mock useSession hook
const useSession = () => mockSession;

// Mock InsightsOrgTeamsProvider
const InsightsOrgTeamsProvider = ({ children }: { children: React.ReactNode }) => {
  const session = useSession();
  const currentOrgId = session.data?.user.org?.id;
  const orgRole = session.data?.user.org?.role;
  const isAdminOrOwner = orgRole === 'ADMIN' || orgRole === 'OWNER';
  const [orgTeamsType, setOrgTeamsType] = useState<OrgTeamsType>(
    isAdminOrOwner && currentOrgId ? 'org' : 'yours'
  );
  const [selectedTeamId, setSelectedTeamId] = useState<number | undefined>();

  return (
    <InsightsOrgTeamsContext.Provider
      value={{
        orgTeamsType,
        setOrgTeamsType,
        selectedTeamId,
        setSelectedTeamId,
      }}>
      {children}
    </InsightsOrgTeamsContext.Provider>
  );
};

// Mock TRPCProvider
const MockTRPCProvider = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // No props to set for this component
  });

  // Mock the next-auth session context
  (global as any).useSession = useSession;

  return (
    <MockTRPCProvider>
      <InsightsOrgTeamsProvider>
        <RecentFeedbackTable />
      </InsightsOrgTeamsProvider>
    </MockTRPCProvider>
  );
}