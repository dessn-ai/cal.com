import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/users/pages/users-add-view';

import { TRPCProvider } from '@calcom/trpc/react';

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  return (
    <TRPCProvider>
      <ImportedComponent />
    </TRPCProvider>
  );
}