import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/routing-forms/components/FormInputFields';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    form: {
      type: "object",
      value: {
        fields: [
          {
            id: "1",
            type: "text",
            label: "Name",
            placeholder: "Enter your name",
            required: true
          },
          {
            id: "2",
            type: "email",
            label: "Email",
            placeholder: "Enter your email",
            required: true
          }
        ]
      },
      label: "Form"
    },
    response: {
      type: "object",
      value: {},
      label: "Response"
    },
    disabledFields: {
      type: "dropdown",
      value: "",
      options: ["1", "2"],
      label: "Disabled Fields"
    }
  });

  const setResponse = (newResponse: any) => {
    setState("response", newResponse);
  };

  return (
    <ImportedComponent
      form={state.form.value}
      response={state.response.value}
      setResponse={setResponse}
      disabledFields={state.disabledFields.value ? [state.disabledFields.value] : []}
    />
  );
}