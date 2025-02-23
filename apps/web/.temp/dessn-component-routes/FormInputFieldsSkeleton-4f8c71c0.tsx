import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/routing-forms/components/FormInputFields';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    numberOfFields: {
      type: "number",
      value: 5,
      label: "Number of Fields",
    },
  });

  // Mock data for the form
  const mockForm = {
    fields: Array.from({ length: state.numberOfFields.value }).map((_, index) => ({
      id: `field-${index}`,
      type: "text",
      label: `Field ${index + 1}`,
      required: false,
      placeholder: `Enter Field ${index + 1}`,
    }))
  };

  const [response, setResponse] = React.useState({});

  return (
    <ImportedComponent 
      form={mockForm}
      response={response}
      setResponse={setResponse}
    />
  );
}