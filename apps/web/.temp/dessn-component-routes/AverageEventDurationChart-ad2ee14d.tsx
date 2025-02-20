import React from 'react';
import { useParentState } from '../useIframeState';
import { AverageEventDurationChart } from '../../../../packages/features/insights/components/AverageEventDurationChart';

import { TRPCProvider } from '@calcom/trpc/react';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // No props to set for this component
  });

  return (
    <TRPCProvider>
      <AverageEventDurationChart />
    </TRPCProvider>
  );
}