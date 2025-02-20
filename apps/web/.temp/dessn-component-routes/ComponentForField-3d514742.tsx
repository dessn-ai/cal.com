import React from 'react';
import { useParentState } from '../useIframeState';
import { ComponentForField } from '../../../../packages/features/form-builder/FormBuilderField';

import { useForm, FormProvider } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    fieldType: {
      type: "dropdown",
      value: "text",
      options: ["text", "number", "boolean", "select", "textarea", "phone", "checkbox", "radio", "url", "email", "multiemail", "multiselect", "radioInput"],
      label: "Field Type",
    },
    fieldName: {
      type: "string",
      value: "exampleField",
      label: "Field Name",
    },
    fieldLabel: {
      type: "string",
      value: "Example Field",
      label: "Field Label",
    },
    fieldPlaceholder: {
      type: "string",
      value: "Enter value here",
      label: "Field Placeholder",
    },
    fieldRequired: {
      type: "boolean",
      value: false,
      label: "Required",
    },
    fieldReadOnly: {
      type: "boolean",
      value: false,
      label: "Read Only",
    },
  });

  const methods = useForm();

  const field = {
    name: state.fieldName.value,
    type: state.fieldType.value,
    label: state.fieldLabel.value,
    placeholder: state.fieldPlaceholder.value,
    required: state.fieldRequired.value,
  };

  return (
    <FormProvider {...methods}>
      <ComponentForField
        field={field}
        readOnly={state.fieldReadOnly.value}
        value=""
        setValue={() => {}}
        className=""
      />
    </FormProvider>
  );
}