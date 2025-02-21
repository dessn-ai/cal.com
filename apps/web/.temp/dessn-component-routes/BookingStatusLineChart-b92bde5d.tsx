import React from 'react';
import { useParentState } from '../useIframeState';
import { BookingStatusLineChart } from '../../../../packages/features/insights/components/BookingStatusLineChart';

import { TRPCProvider } from '@calcom/trpc/react';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // No props to set for this component
  });

  return (
    <TRPCProvider>
      <BookingStatusLineChart />
    </TRPCProvider>
  );
}