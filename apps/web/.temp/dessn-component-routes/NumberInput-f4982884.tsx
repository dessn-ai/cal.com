import React from 'react';
import { useParentState } from '../useIframeState';
import { NumberInput } from '../../../../packages/ui/components/form/inputs/Input';

import { useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    value: {
      type: "number",
      value: 0,
      label: "Value",
    },
    placeholder: {
      type: "string",
      value: "Enter a number",
      label: "Placeholder",
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled",
    },
  });

  const { control } = useForm();

  return (
    <NumberInput
      value={state.value.value}
      onChange={(e) => setState('value', Number(e.target.value))}
      placeholder={state.placeholder.value}
      disabled={state.disabled.value}
    />
  );
}