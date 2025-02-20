import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/ui/components/form/step/Stepper';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    href: {
      type: "string",
      value: "/example",
      label: "Href",
    },
    step: {
      type: "number",
      value: 2,
      label: "Current Step",
    },
    disableSteps: {
      type: "boolean",
      value: false,
      label: "Disable Steps",
    },
  });

  const steps = [
    { title: "Step 1" },
    { title: "Step 2" },
    { title: "Step 3" },
    { title: "Step 4" },
  ];

  const stepLabel = (currentStep: number, totalSteps: number) => `Step ${currentStep} of ${totalSteps}`;

  return (
    <ImportedComponent
      href={state.href.value}
      step={state.step.value}
      steps={steps}
      disableSteps={state.disableSteps.value}
      stepLabel={stepLabel}
    />
  );
}