import React from 'react';
import { useParentState } from '../useIframeState';
import { getLayout } from '../../../../packages/ui/layouts/WizardLayout';


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

  const isOptionalCallback = state.isOptionalCallback.value ? () => console.log("Optional callback") : undefined;

  return getLayout(
    <div>
      <h1>Sample Content</h1>
      <p>This is a sample child component for the WizardLayout.</p>
    </div>
  );
}