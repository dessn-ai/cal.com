import React from 'react';
import { useParentState } from '../useIframeState';
import { UpgradeTeamsBadge } from '../../../../packages/ui/components/badge/UpgradeTeamsBadge';

// Mock the modules by creating a new module object
const useLocale = () => ({
  t: (key: string) => key,
});

const useHasPaidPlan = () => ({
  hasPaidPlan: false,
});

// Mock Link component
const Link = ({ children, ...props }: { children: React.ReactNode; [key: string]: any }) => (
  <a {...props}>{children}</a>
);

// Create a mock context wrapper if needed
const MockProviders: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="mock-provider-wrapper">{children}</div>;
};

// Override the module imports
const mockModules = {
  '@calcom/lib/hooks/useLocale': { useLocale },
  '@calcom/lib/hooks/useHasPaidPlan': { useHasPaidPlan },
  'next/link': { default: Link },
};

// Apply mocks
Object.defineProperty(window, '__mocks__', {
  value: mockModules,
  writable: true,
});

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // No props to control for this component
  });

  return (
    <MockProviders>
      <UpgradeTeamsBadge />
    </MockProviders>
  );
}