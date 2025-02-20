import React from 'react';
import { useParentState } from '../useIframeState';
import { RoutingFormResponsesTable } from '../../../../packages/features/insights/components/RoutingFormResponsesTable';

import { TRPCProvider } from '@calcom/trpc/react';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // Since there are no props for this component, we don't need to define any state
  });

  return (
    <TRPCProvider>
      <RoutingFormResponsesTable />
    </TRPCProvider>
  );
}