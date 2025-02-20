import React from 'react';
import { useParentState } from '../useIframeState';
import { UpgradeTeamsBadge } from '../../../../packages/ui/components/badge/UpgradeTeamsBadge';

// Mock modules directly
const mockT = (key: string) => key;

// Mock the locale module
const actualUseLocale = {
  useLocale: () => ({
    t: mockT
  })
};

// Mock the paid plan hook
const actualUseHasPaidPlan = {
  useHasPaidPlan: () => ({
    hasPaidPlan: false
  })
};

// Mock next/link
const MockLink = ({ children }: { children: React.ReactNode }) => <>{children}</>;

// Override the imports
globalThis.__mockModules = {
  '@calcom/lib/hooks/useLocale': actualUseLocale,
  '@calcom/lib/hooks/useHasPaidPlan': actualUseHasPaidPlan,
  'next/link': { default: MockLink }
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // No props to control for this component
  });

  return <UpgradeTeamsBadge />;
}