import React from 'react';
import { useParentState } from '../useIframeState';
import { TeamMembersCTA } from '../../../../packages/features/ee/organizations/pages/settings/other-team-members-view';


export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  return (
    <TeamMembersCTA />
  );
}