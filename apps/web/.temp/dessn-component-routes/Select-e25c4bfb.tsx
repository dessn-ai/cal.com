import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/ui/form/Select';


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
      label: "Is Multi",
    },
    placeholder: {
      type: "string",
      value: "Select an option",
      label: "Placeholder",
    },
    className: {
      type: "string",
      value: "w-full",
      label: "Class Name",
    },
  });

  const options = JSON.parse(state.options.value);

  return (
    <ImportedComponent
      options={options}
      isMulti={state.isMulti.value}
      placeholder={state.placeholder.value}
      className={state.className.value}
      onChange={(selectedOption) => console.log(selectedOption)}
    />
  );
}