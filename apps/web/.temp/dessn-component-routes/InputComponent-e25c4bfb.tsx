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
      options={[
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
      ]}
      onChange={(option) => console.log('Selected:', option)}
      value={null}
      name="example-select"
    />
  );
}