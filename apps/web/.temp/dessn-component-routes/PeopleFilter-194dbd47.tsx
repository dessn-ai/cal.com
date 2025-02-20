import React from 'react';
import { useParentState } from '../useIframeState';
import { PeopleFilter } from '../../../../packages/features/bookings/components/PeopleFilter';

import { TRPCProvider } from '@calcom/trpc/react';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // No props to set for this component
  });

  return (
    <TRPCProvider>
      <PeopleFilter />
    </TRPCProvider>
  );
}