import React from 'react';
import { useParentState } from '../useIframeState';

// Mock FormAction component instead of using the real one
const MockFormAction = ({ 
  routingForm, 
  action, 
  children 
}: { 
  routingForm: any; 
  action: string; 
  children: React.ReactNode;
}) => {
  return (
    <div className="mock-form-action">
      <h3>Form Action Preview</h3>
      <div>Action: {action}</div>
      <div>Form: {routingForm ? routingForm.name : 'No form selected'}</div>
      {children}
    </div>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    appUrl: {
      type: "string",
      value: "/app/routing-forms",
      label: "App URL",
    },
    routingForm: {
      type: "dropdown",
      value: "null",
      options: ["null", "exampleForm"],
      label: "Routing Form",
    },
    action: {
      type: "dropdown",
      value: "preview",
      options: ["preview", "edit", "copyLink", "toggle", "_delete", "embed", "duplicate", "download", "copyRedirectUrl", "create"],
      label: "Action",
    },
  });

  const routingForm = state.routingForm.value === "exampleForm" 
    ? { id: "example-id", name: "Example Form", disabled: false }
    : null;

  return (
    <div className="preview-container">
      <MockFormAction
        routingForm={routingForm}
        action={state.action.value}
      >
        {state.action.value}
      </MockFormAction>
    </div>
  );
}