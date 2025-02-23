import React from 'react';
import { useParentState } from '../useIframeState';
import { LeastBookedTeamMembersTable } from '../../../../packages/features/insights/components/LeastBookedTeamMembersTable';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // No props to configure for this component
  });

  return <LeastBookedTeamMembersTable />;
}