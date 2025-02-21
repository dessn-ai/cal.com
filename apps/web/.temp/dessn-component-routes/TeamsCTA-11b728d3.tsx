import React from 'react';
import { useParentState } from '../useIframeState';
import { TeamsCTA } from '../../modules/teams/teams-view';
import { createContext, useContext } from 'react';

// Create mock TRPC context
const TRPCContext = createContext(null);

// Mock TRPC Provider
const MockTRPCProvider = ({ children }) => {
  const mockTrpcClient = {
    query: () => ({
      teams: {
        list: () => Promise.resolve([]),
        hasTeams: () => Promise.resolve(false),
      },
      viewer: {
        teams: {
          list: () => Promise.resolve([]),
          hasTeams: () => Promise.resolve(false),
        },
        organizations: {
          listCurrent: () => Promise.resolve([]),
        },
      },
    }),
  };

  return (
    <TRPCContext.Provider value={mockTrpcClient}>
      {children}
    </TRPCContext.Provider>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isOrgAdmin: {
      type: "boolean",
      value: true,
      label: "Is Organization Admin",
    },
    organizationId: {
      type: "number",
      value: 1,
      label: "Organization ID",
    },
  });

  const mockData = {
    organizationId: state.organizationId.value,
    organization: { isOrgAdmin: state.isOrgAdmin.value },
  };

  return (
    <MockTRPCProvider>
      <TeamsCTA />
    </MockTRPCProvider>
  );
}