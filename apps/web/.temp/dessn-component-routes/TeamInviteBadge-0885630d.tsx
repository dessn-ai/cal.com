import React from 'react';
import { useParentState } from '../useIframeState';

// Create mock components and hooks
const mockListInvites = ['invite1', 'invite2'];

// Mock the TeamInviteBadge component
const TeamInviteBadge = () => {
  // Directly use mocked data instead of trying to mock the hooks with Jest
  return (
    <div>
      {mockListInvites.length > 0 && (
        <div className="badge">
          {mockListInvites.length}
        </div>
      )}
    </div>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // No props to control for this component
  });

  return <TeamInviteBadge />;
}