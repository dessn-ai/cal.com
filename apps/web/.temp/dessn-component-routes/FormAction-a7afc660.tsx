import React from 'react';
import { useParentState } from '../useIframeState';

// Mock FormAction component that doesn't depend on organization branding
const MockFormAction = ({ action, routingForm, children }) => {
  const getActionButton = () => {
    switch (action) {
      case 'preview':
        return <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">Preview</button>;
      case 'edit':
        return <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">Edit</button>;
      case 'copyLink':
        return <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">Copy Link</button>;
      case 'toggle':
        return (
          <button className={`px-4 py-2 text-sm font-medium rounded-md ${routingForm?.disabled ? 'bg-gray-100 text-gray-500' : 'bg-green-600 text-white'}`}>
            {routingForm?.disabled ? 'Disabled' : 'Enabled'}
          </button>
        );
      case '_delete':
        return <button className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700">Delete</button>;
      case 'embed':
        return <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">Embed</button>;
      case 'duplicate':
        return <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">Duplicate</button>;
      case 'download':
        return <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">Download</button>;
      case 'copyRedirectUrl':
        return <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">Copy Redirect URL</button>;
      case 'create':
        return <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">Create</button>;
      default:
        return <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">{children}</button>;
    }
  };

  return (
    <div className="flex items-center space-x-2">
      {getActionButton()}
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
    <MockFormAction
      routingForm={routingForm}
      action={state.action.value}
    >
      {state.action.value}
    </MockFormAction>
  );
}