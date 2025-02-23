import React from 'react';
import { useParentState } from '../useIframeState';
import { FormBuilderField } from '../../../../packages/features/form-builder/FormBuilderField';

import { useForm, FormProvider } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    fieldName: {
      type: "string",
      value: "exampleField",
      label: "Field Name",
    },
    fieldType: {
      type: "dropdown",
      value: "text",
      options: ["number", "boolean", "name", "address", "select", "textarea", "text", "phone", "checkbox", "radio", "url", "email", "multiemail", "multiselect", "radioInput"],
      label: "Field Type",
    },
    fieldLabel: {
      type: "string",
      value: "Example Label",
      label: "Field Label",
    },
    fieldRequired: {
      type: "boolean",
      value: false,
      label: "Required",
    },
    fieldPlaceholder: {
      type: "string",
      value: "Enter value here",
      label: "Placeholder",
    },
  });

  const methods = useForm();

  const field = {
    name: state.fieldName.value,
    type: state.fieldType.value,
    label: state.fieldLabel.value,
    required: state.fieldRequired.value,
    placeholder: state.fieldPlaceholder.value,
  };

  return (
    <FormProvider {...methods}>
      <FormBuilderField
        field={field}
        readOnly={false}
        className=""
      />
    </FormProvider>
  );
}