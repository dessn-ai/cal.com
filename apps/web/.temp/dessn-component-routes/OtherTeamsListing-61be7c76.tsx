import React from 'react';
import { useParentState } from '../useIframeState';
import { OtherTeamsListing } from '../../../../packages/features/ee/organizations/pages/components/OtherTeamsListing';

// Create a mock TRPC provider
const MockTRPCProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Create a mock implementation of trpc
  const mockTrpc = {
    viewer: {
      organizations: {
        listOtherTeams: {
          useQuery: () => ({
            data: [
              { id: 1, name: 'Team 1' },
              { id: 2, name: 'Team 2' }
            ],
            isPending: false,
            error: null
          })
        }
      }
    }
  };

  // Override the module
  (window as any).trpc = mockTrpc;

  return <>{children}</>;
};

// Create a mock locale provider
const MockLocaleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Mock the useLocale functionality
  (window as any).useLocale = () => ({
    t: (key: string) => key
  });

  return <>{children}</>;
};

export default function ComponentPreview() {
  const [state] = useParentState({
    isPending: {
      type: "boolean",
      value: false,
      label: "Is Loading",
    },
    hasError: {
      type: "boolean",
      value: false,
      label: "Has Error",
    },
    teamsCount: {
      type: "number",
      value: 2,
      label: "Number of Teams",
    },
  });

  return (
    <MockTRPCProvider>
      <MockLocaleProvider>
        <OtherTeamsListing />
      </MockLocaleProvider>
    </MockTRPCProvider>
  );
}