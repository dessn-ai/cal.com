import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/form/components/Select';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    options: {
      type: "string",
      value: JSON.stringify([
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
      ]),
      label: "Options",
    },
    isMulti: {
      type: "boolean",
      value: false,
      label: "Is Multi Select",
    },
    placeholder: {
      type: "string",
      value: "Select an option",
      label: "Placeholder",
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

  const options = JSON.parse(state.options.value);

  return (
    <ImportedComponent
      options={options}
      isMulti={state.isMulti.value}
      placeholder={state.placeholder.value}
      isDisabled={state.isDisabled.value}
      required={state.required.value}
      onChange={(selectedOption) => console.log('Selected:', selectedOption)}
    />
  );
}