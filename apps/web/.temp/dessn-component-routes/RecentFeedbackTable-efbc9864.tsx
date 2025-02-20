import React from 'react';
import { useParentState } from '../useIframeState';
import { RecentFeedbackTable } from '../../../../packages/features/insights/components/RecentFeedbackTable';

import { TRPCProvider } from '@calcom/trpc/react';
import { InsightsProvider } from '../../../../packages/features/insights/context/insights-provider';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // No props to set for this component
  });

  return (
    <TRPCProvider>
      <InsightsProvider>
        <RecentFeedbackTable />
      </InsightsProvider>
    </TRPCProvider>
  );
}