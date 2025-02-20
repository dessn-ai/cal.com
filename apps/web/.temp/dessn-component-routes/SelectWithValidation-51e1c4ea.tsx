import React from 'react';
import { useParentState } from '../useIframeState';
import { SelectWithValidation } from '../../../../packages/ui/components/form/select/Select';

import { useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const { control } = useForm();

  const [state, setState] = useParentState({
    options: {
      type: "string",
      value: JSON.stringify([
        { label: "Option 1", value: "option1" },
        { label: "Option 2", value: "option2" },
        { label: "Option 3", value: "option3" }
      ]),
      label: "Options"
    },
    isMulti: {
      type: "boolean",
      value: false,
      label: "Is Multi"
    },
    required: {
      type: "boolean",
      value: false,
      label: "Required"
    },
    placeholder: {
      type: "string",
      value: "Select an option",
      label: "Placeholder"
    }
  });

  const options = JSON.parse(state.options.value);

  return (
    <SelectWithValidation
      options={options}
      isMulti={state.isMulti.value}
      required={state.required.value}
      placeholder={state.placeholder.value}
      onChange={(value) => console.log(value)}
    />
  );
}