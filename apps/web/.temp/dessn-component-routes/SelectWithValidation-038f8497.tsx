import React from 'react';
import { useParentState } from '../useIframeState';
import { SelectWithValidation } from '../../../../packages/features/form/components/Select';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    value: {
      type: "string",
      value: "",
      label: "Selected Value",
    },
    required: {
      type: "boolean",
      value: false,
      label: "Required",
    },
    isMulti: {
      type: "boolean",
      value: false,
      label: "Multiple Selection",
    },
  });

  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  return (
    <SelectWithValidation
      options={options}
      value={state.value.value ? { value: state.value.value, label: state.value.value } : null}
      onChange={(newValue) => {
        setState('value', newValue ? newValue.value : '');
      }}
      required={state.required.value}
      isMulti={state.isMulti.value}
      placeholder="Select an option"
    />
  );
}