import React from 'react';
import { useParentState } from '../useIframeState';
import { UpgradeTeamsBadge } from '../../../../packages/ui/components/badge/UpgradeTeamsBadge';

// Mock providers and hooks
const mockT = (key: string) => key;

// Create a mock context for useLocale
const MockLocaleContext = React.createContext({ t: mockT });
export const useLocale = () => React.useContext(MockLocaleContext);

// Create a mock for useHasPaidPlan
export const useHasPaidPlan = () => ({ hasPaidPlan: false });

// Mock Link component
const Link = ({ children }: { children: React.ReactNode }) => <>{children}</>;

// Override the actual imports with our mocks
import('@calcom/lib/hooks/useLocale').then((module) => {
  Object.defineProperty(module, 'useLocale', { value: useLocale });
});

import('@calcom/lib/hooks/useHasPaidPlan').then((module) => {
  Object.defineProperty(module, 'useHasPaidPlan', { value: useHasPaidPlan });
});

import('next/link').then((module) => {
  Object.defineProperty(module, 'default', { value: Link });
});

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // No props to control for this component
  });

  return (
    <MockLocaleContext.Provider value={{ t: mockT }}>
      <UpgradeTeamsBadge />
    </MockLocaleContext.Provider>
  );
}