import React from 'react';
import { useParentState } from '../useIframeState';
import { EmailInput } from '../../../../packages/ui/components/form/inputs/Input';

import { useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
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
    className: {
      type: "string",
      value: "",
      label: "Class Name",
    },
  });

  const { register } = useForm();

  return (
    <EmailInput
      placeholder={state.placeholder.value}
      disabled={state.disabled.value}
      className={state.className.value}
      {...register("email")}
    />
  );
}