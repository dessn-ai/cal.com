import React from 'react';
import { useParentState } from '../useIframeState';
import { RecentFeedbackTable } from '../../../../packages/features/insights/components/RecentFeedbackTable';

// Mock InsightsProvider context
const MockInsightsContext = React.createContext({});

const MockInsightsProvider = ({ children }) => {
  return (
    <MockInsightsContext.Provider value={{}}>
      {children}
    </MockInsightsContext.Provider>
  );
};

// Mock TRPC Provider
const MockTRPCProvider = ({ children }) => {
  return (
    <div data-testid="mock-trpc-provider">
      {children}
    </div>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // No props to set for this component
  });

  return (
    <MockTRPCProvider>
      <MockInsightsProvider>
        <RecentFeedbackTable />
      </MockInsightsProvider>
    </MockTRPCProvider>
  );
}