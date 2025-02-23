import React from 'react';
import { useParentState } from '../useIframeState';
import { PasswordField } from '../../../../packages/ui/components/form/inputs/Input';

import { useForm, FormProvider } from 'react-hook-form';

export default function ComponentPreview() {
  const methods = useForm();

  const [state, setState] = useParentState({
    placeholder: {
      type: "string",
      value: "Enter password",
      label: "Placeholder",
    },
    className: {
      type: "string",
      value: "",
      label: "Class Name",
    },
  });

  return (
    <FormProvider {...methods}>
      <PasswordField
        placeholder={state.placeholder.value}
        className={state.className.value}
      />
    </FormProvider>
  );
}