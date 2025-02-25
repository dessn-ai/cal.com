import React from 'react';
import { useParentState } from '../useIframeState';
import { SelectField } from '../../../../packages/ui/components/form/select/Select';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    label: {
      type: "string",
      value: "Select an option",
      label: "Label",
    },
    placeholder: {
      type: "string",
      value: "Choose...",
      label: "Placeholder",
    },
    isMulti: {
      type: "boolean",
      value: false,
      label: "Is Multi Select",
    },
    isDisabled: {
      type: "boolean",
      value: false,
      label: "Is Disabled",
    },
    required: {
      type: "boolean",
      value: false,
      label: "Is Required",
    },
  });

  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  return (
    <SelectField
      label={state.label.value}
      placeholder={state.placeholder.value}
      options={options}
      isMulti={state.isMulti.value}
      isDisabled={state.isDisabled.value}
      required={state.required.value}
      onChange={(selectedOption) => console.log('Selected:', selectedOption)}
    />
  );
}