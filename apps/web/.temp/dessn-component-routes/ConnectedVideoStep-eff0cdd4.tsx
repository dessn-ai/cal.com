import React from 'react';
import { useParentState } from '../useIframeState';
import { ConnectedVideoStep } from '../../components/getting-started/steps-views/ConnectedVideoStep';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    nextStep: {
      type: "boolean",
      value: false,
      label: "Trigger Next Step",
    },
  });

  const handleNextStep = () => {
    setState('nextStep', true);
    console.log('Next step triggered');
  };

  return (
    <ConnectedVideoStep
      nextStep={handleNextStep}
    />
  );
}