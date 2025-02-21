import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/settings/security/impersonation-view';

import { TRPCProvider } from '@calcom/trpc/react';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // No props to configure for this component
  });

  return (
    <TRPCProvider>
      <ImportedComponent />
    </TRPCProvider>
  );
}