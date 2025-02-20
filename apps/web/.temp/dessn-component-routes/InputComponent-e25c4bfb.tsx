import React from 'react';
import { useParentState } from '../useIframeState';
import Select from '../../../../packages/ui/form/Select';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    inputClassName: {
      type: "string",
      value: "custom-input-class",
      label: "Input Class Name",
    },
  });

  return (
    <Select
      className={state.inputClassName.value}
      onChange={(option) => console.log('Select changed:', option)}
      options={[
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
      ]}
      value={null}
      placeholder="Select an option..."
    />
  );
}