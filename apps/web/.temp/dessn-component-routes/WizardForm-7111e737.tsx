import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/ui/components/form/wizard/WizardForm';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    href: {
      type: "string",
      value: "/example",
      label: "Href",
    },
    disableNavigation: {
      type: "boolean",
      value: false,
      label: "Disable Navigation",
    },
    containerClassname: {
      type: "string",
      value: "",
      label: "Container Classname",
    },
    prevLabel: {
      type: "string",
      value: "Back",
      label: "Previous Label",
    },
    nextLabel: {
      type: "string",
      value: "Next",
      label: "Next Label",
    },
    finishLabel: {
      type: "string",
      value: "Finish",
      label: "Finish Label",
    },
  });

  const steps = [
    {
      title: "Step 1",
      description: "This is step 1",
      content: <div>Step 1 Content</div>,
    },
    {
      title: "Step 2",
      description: "This is step 2",
      content: <div>Step 2 Content</div>,
    },
  ];

  return (
    <ImportedComponent
      href={state.href.value}
      steps={steps}
      disableNavigation={state.disableNavigation.value}
      containerClassname={state.containerClassname.value}
      prevLabel={state.prevLabel.value}
      nextLabel={state.nextLabel.value}
      finishLabel={state.finishLabel.value}
      stepLabel={(currentStep, maxSteps) => `Step ${currentStep} of ${maxSteps}`}
    />
  );
}