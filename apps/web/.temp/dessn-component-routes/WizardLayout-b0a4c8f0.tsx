import React from 'react';
import { useParentState } from '../useIframeState';
import { WizardLayout } from '../../../../packages/ui/layouts/WizardLayout';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    maxSteps: {
      type: "number",
      value: 2,
      label: "Max Steps",
    },
    currentStep: {
      type: "number",
      value: 0,
      label: "Current Step",
    },
    isOptionalCallback: {
      type: "boolean",
      value: false,
      label: "Is Optional Callback",
    },
  });

  const handleOptionalCallback = state.isOptionalCallback.value ? () => console.log("Optional callback") : undefined;

  return (
    <WizardLayout
      maxSteps={state.maxSteps.value}
      currentStep={state.currentStep.value}
      isOptionalCallback={handleOptionalCallback}
    >
      <div>Sample content for the wizard step</div>
    </WizardLayout>
  );
}