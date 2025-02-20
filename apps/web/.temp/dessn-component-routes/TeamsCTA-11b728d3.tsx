import React from 'react';
import { useParentState } from '../useIframeState';
import { TeamsCTA } from '../../modules/teams/teams-view';

// Create a mock TRPC context if needed
const MockProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
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

  const mockTrpcQuery = () => ({
    organizationId: state.organizationId.value,
    organization: { isOrgAdmin: state.isOrgAdmin.value },
  });

  return (
    <MockProvider>
      <TeamsCTA />
    </MockProvider>
  );
}