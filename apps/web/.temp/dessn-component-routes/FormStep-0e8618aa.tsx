import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/ui/components/form/step/FormStep';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    steps: {
      type: "number",
      value: 5,
      label: "Total Steps"
    },
    currentStep: {
      type: "number",
      value: 2,
      label: "Current Step"
    }
  });

  return (
    <ImportedComponent
      steps={state.steps.value}
      currentStep={state.currentStep.value}
    />
  );
}