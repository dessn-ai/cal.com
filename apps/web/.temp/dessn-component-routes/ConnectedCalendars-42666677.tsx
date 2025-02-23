import React from 'react';
import { useParentState } from '../useIframeState';
import { ConnectedCalendars } from '../../components/getting-started/steps-views/ConnectCalendars';

import { TRPCProvider } from '../../components/trpc/TRPCProvider';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    nextStep: {
      type: "boolean",
      value: false,
      label: "Next Step Triggered",
    },
  });

  const nextStep = () => {
    setState('nextStep', true);
    console.log("Next step triggered");
  };

  return (
    <TRPCProvider>
      <ConnectedCalendars nextStep={nextStep} />
    </TRPCProvider>
  );
}