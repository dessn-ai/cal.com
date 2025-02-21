import React from 'react';
import { useParentState } from '../useIframeState';
import { UpgradeTeamsBadge } from '../../../../packages/ui/components/badge/UpgradeTeamsBadge';


// Mock the necessary hooks and components
const mockUseLocale = () => ({
  t: (key: string) => key,
});

const mockUseHasPaidPlan = () => ({
  hasPaidPlan: false,
});

jest.mock('@calcom/lib/hooks/useLocale', () => ({
  useLocale: mockUseLocale,
}));

jest.mock('@calcom/lib/hooks/useHasPaidPlan', () => ({
  useHasPaidPlan: mockUseHasPaidPlan,
}));

jest.mock('next/link', () => {
  return ({ children }: { children: React.ReactNode }) => <>{children}</>;
});

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // No props to control for this component
  });

  return <UpgradeTeamsBadge />;
}