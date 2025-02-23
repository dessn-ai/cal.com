import React from 'react';
import { useParentState } from '../useIframeState';
import { TeamsCTA } from '../../modules/teams/teams-view';

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

  // Mock the context that would normally be provided by TRPC
  const mockContext = {
    organizationId: state.organizationId.value,
    organization: { isOrgAdmin: state.isOrgAdmin.value },
  };

  return (
    <div data-testid="teams-cta-preview">
      <TeamsCTA />
    </div>
  );
}