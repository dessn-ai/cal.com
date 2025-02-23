import React from 'react';
import { useParentState } from '../useIframeState';
import { Select } from '../../../../packages/ui/components/form/select/Select';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    value: {
      type: "string",
      value: "",
      label: "Selected Value",
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
    placeholder: {
      type: "string",
      value: "Select an option",
      label: "Placeholder",
    },
    size: {
      type: "dropdown",
      value: "md",
      options: ["sm", "md"],
      label: "Size",
    },
  });

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  return (
    <Select
      options={options}
      value={state.value.value ? options.find(option => option.value === state.value.value) : null}
      onChange={(selectedOption) => {
        if (Array.isArray(selectedOption)) {
          setState('value', selectedOption.map(option => option.value).join(','));
        } else {
          setState('value', selectedOption ? selectedOption.value : '');
        }
      }}
      isMulti={state.isMulti.value}
      isDisabled={state.isDisabled.value}
      placeholder={state.placeholder.value}
      size={state.size.value as "sm" | "md"}
    />
  );
}