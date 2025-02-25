import React from 'react';
import { useParentState } from '../useIframeState';
import { UnstyledSelect } from '../../../../packages/ui/form/Select';


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
    isMulti: {
      type: "boolean",
      value: false,
      label: "Is Multi",
    },
  });

  const options = JSON.parse(state.options.value);

  return (
    <UnstyledSelect
      options={options}
      placeholder={state.placeholder.value}
      isDisabled={state.isDisabled.value}
      isMulti={state.isMulti.value}
      onChange={(selectedOption) => console.log('Selected:', selectedOption)}
    />
  );
}