import React from 'react';
import { useParentState } from '../useIframeState';
import { TextAreaField } from '../../../../packages/ui/components/form/inputs/Input';

import { useForm, FormProvider } from 'react-hook-form';

export default function ComponentPreview() {
  const methods = useForm();

  const [state, setState] = useParentState({
    name: {
      type: "string",
      value: "description",
      label: "Field Name",
    },
    label: {
      type: "string",
      value: "Description",
      label: "Label",
    },
    placeholder: {
      type: "string",
      value: "Enter your description here",
      label: "Placeholder",
    },
  });

  return (
    <FormProvider {...methods}>
      <TextAreaField
        name={state.name.value}
        label={state.label.value}
        placeholder={state.placeholder.value}
      />
    </FormProvider>
  );
}