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
      inputClassName={state.inputClassName.value}
      onFocus={() => console.log('Input focused')}
      onBlur={() => console.log('Input blurred')}
      onChange={(option) => console.log('Select changed:', option)}
      value={null}
      name="example-select"
      options={[
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
      ]}
    />
  );
}