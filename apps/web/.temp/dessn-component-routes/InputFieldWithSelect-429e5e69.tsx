import React from 'react';
import { useParentState } from '../useIframeState';
import { InputFieldWithSelect } from '../../../../packages/ui/components/form/inputs/InputFieldWithSelect';

import { UnstyledSelect } from '../../../../packages/ui/components/form/Select';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    label: {
      type: "string",
      value: "Email",
      label: "Label",
    },
    placeholder: {
      type: "string",
      value: "Enter your email",
      label: "Placeholder",
    },
    defaultValue: {
      type: "string",
      value: "",
      label: "Default Value",
    },
    selectOptions: {
      type: "string",
      value: "option1,option2,option3",
      label: "Select Options (comma-separated)",
    },
  });

  const selectOptions = state.selectOptions.value.split(',').map(option => ({ value: option, label: option }));

  return (
    <InputFieldWithSelect
      label={state.label.value}
      placeholder={state.placeholder.value}
      defaultValue={state.defaultValue.value}
      selectProps={{
        options: selectOptions,
        defaultValue: selectOptions[0],
      }}
    />
  );
}