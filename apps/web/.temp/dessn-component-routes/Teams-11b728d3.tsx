import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/teams/teams-view';

import { TRPCProvider } from '@calcom/trpc/react';

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  return (
    <TRPCProvider>
      <ImportedComponent />
    </TRPCProvider>
  );
}