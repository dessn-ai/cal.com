import React from 'react';
import { useParentState } from '../useIframeState';
import { TroubleshooterHeader } from '../../../../packages/features/troubleshooter/components/TroubleshooterHeader';

import { TroubleshooterStoreProvider } from '../../../../packages/features/troubleshooter/store';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    extraDays: {
      type: "number",
      value: 7,
      label: "Extra Days",
    },
    isMobile: {
      type: "boolean",
      value: false,
      label: "Is Mobile",
    },
  });

  return (
    <TroubleshooterStoreProvider>
      <TroubleshooterHeader 
        extraDays={state.extraDays.value} 
        isMobile={state.isMobile.value} 
      />
    </TroubleshooterStoreProvider>
  );
}