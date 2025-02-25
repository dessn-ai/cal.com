import React from 'react';
import { useParentState } from '../useIframeState';
import { Steps } from '../../../../packages/ui/components/form/step/Steps';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    maxSteps: {
      type: "number",
      value: 5,
      label: "Max Steps",
    },
    currentStep: {
      type: "number",
      value: 2,
      label: "Current Step",
    },
    disableNavigation: {
      type: "boolean",
      value: false,
      label: "Disable Navigation",
    },
  });

  const nextStep = () => {
    if (state.currentStep.value < state.maxSteps.value) {
      setState('currentStep', state.currentStep.value + 1);
    }
  };

  const stepLabel = (currentStep: number, maxSteps: number) => `Step ${currentStep} of ${maxSteps}`;

  return (
    <Steps
      maxSteps={state.maxSteps.value}
      currentStep={state.currentStep.value}
      nextStep={state.disableNavigation.value ? undefined : nextStep}
      disableNavigation={state.disableNavigation.value}
      stepLabel={stepLabel}
    />
  );
}