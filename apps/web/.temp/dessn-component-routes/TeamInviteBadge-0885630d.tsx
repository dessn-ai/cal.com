import React from 'react';
import { useParentState } from '../useIframeState';

// Mock the actual TeamInviteBadge component since we can't properly mock all its dependencies
const MockTeamInviteBadge = () => {
  return (
    <div className="team-invite-badge">
      <span>2 Team Invites</span>
    </div>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // No props to control for this component
  });

  return <MockTeamInviteBadge />;
}