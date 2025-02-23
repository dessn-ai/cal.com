import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../pages/router/index';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    formName: {
      type: "string",
      value: "Sample Form",
      label: "Form Name",
    },
    message: {
      type: "string",
      value: "Welcome to the router page",
      label: "Message",
    },
    isEmbed: {
      type: "boolean",
      value: false,
      label: "Is Embed",
    },
  });

  const mockForm = {
    name: state.formName.value,
    // Add other necessary form properties here
  };

  return (
    <ImportedComponent
      form={mockForm}
      message={state.message.value}
      isEmbed={state.isEmbed.value}
    />
  );
}