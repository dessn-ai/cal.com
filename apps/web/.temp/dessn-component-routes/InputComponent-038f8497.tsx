import React from 'react';
import { useParentState } from '../useIframeState';
import { InputComponent } from '../../../../packages/features/form/components/Select';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    inputClassName: {
      type: "string",
      value: "custom-input-class",
      label: "Input Class Name"
    },
    placeholder: {
      type: "string",
      value: "Select an option",
      label: "Placeholder"
    },
    isDisabled: {
      type: "boolean",
      value: false,
      label: "Is Disabled"
    },
    isClearable: {
      type: "boolean",
      value: true,
      label: "Is Clearable"
    },
    isSearchable: {
      type: "boolean",
      value: true,
      label: "Is Searchable"
    }
  });

  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  return (
    <InputComponent
      inputClassName={state.inputClassName.value}
      placeholder={state.placeholder.value}
      isDisabled={state.isDisabled.value}
      isClearable={state.isClearable.value}
      isSearchable={state.isSearchable.value}
      options={options}
      onChange={(selectedOption) => console.log(selectedOption)}
    />
  );
}