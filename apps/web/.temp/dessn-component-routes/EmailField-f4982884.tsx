import React from 'react';
import { useParentState } from '../useIframeState';
import { EmailField } from '../../../../packages/ui/components/form/inputs/Input';

import { useForm, FormProvider } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    name: {
      type: "string",
      value: "email",
      label: "Name",
    },
    placeholder: {
      type: "string",
      value: "Enter your email",
      label: "Placeholder",
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled",
    },
    required: {
      type: "boolean",
      value: false,
      label: "Required",
    },
  });

  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <EmailField
        name={state.name.value}
        placeholder={state.placeholder.value}
        disabled={state.disabled.value}
        required={state.required.value}
      />
    </FormProvider>
  );
}