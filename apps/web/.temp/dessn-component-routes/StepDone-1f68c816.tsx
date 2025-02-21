import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../components/setup/StepDone';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    currentStep: {
      type: "number",
      value: 1,
      label: "Current Step",
    },
    nextStepPath: {
      type: "string",
      value: "/next-step",
      label: "Next Step Path",
    },
  });

  const setIsPending = (value: boolean) => {
    console.log("setIsPending called with:", value);
  };

  return (
    <ImportedComponent
      currentStep={state.currentStep.value}
      nextStepPath={state.nextStepPath.value}
      setIsPending={setIsPending}
    />
  );
}