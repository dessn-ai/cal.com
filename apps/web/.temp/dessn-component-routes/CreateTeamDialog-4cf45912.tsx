import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/dsync/components/CreateTeamDialog';

import { TrpcProvider } from '@calcom/trpc/react';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    open: {
      type: "boolean",
      value: true,
      label: "Open",
    },
  });

  const handleOpenChange = (open: boolean) => {
    setState('open', open);
  };

  return (
    <TrpcProvider>
      <ImportedComponent 
        open={state.open.value} 
        onOpenChange={handleOpenChange}
      />
    </TrpcProvider>
  );
}