import React from 'react';
import { useParentState } from '../useIframeState';
import { TeamInviteBadge } from '../../../../packages/features/shell/TeamInviteBadge';


// Mock the necessary hooks and components
const mockUseTeamInvites = () => ({
  isPending: false,
  listInvites: ['invite1', 'invite2'],
});

const mockUseLocale = () => ({
  t: (key: string) => key,
});

jest.mock('@calcom/lib/hooks/useHasPaidPlan', () => ({
  useTeamInvites: mockUseTeamInvites,
}));

jest.mock('@calcom/lib/hooks/useLocale', () => ({
  useLocale: mockUseLocale,
}));

jest.mock('@calcom/ui', () => ({
  Badge: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // No props to control for this component
  });

  return <TeamInviteBadge />;
}