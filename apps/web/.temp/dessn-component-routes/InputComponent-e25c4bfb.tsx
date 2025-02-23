import React from 'react';
import { useParentState } from '../useIframeState';
import { InputComponent } from '../../../../packages/ui/form/Select';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    inputClassName: {
      type: "string",
      value: "custom-input-class",
      label: "Input Class Name",
    },
  });

  return (
    <InputComponent
      inputClassName={state.inputClassName.value}
      onFocus={() => console.log('Input focused')}
      onBlur={() => console.log('Input blurred')}
      onChange={(e) => console.log('Input changed:', e.target.value)}
      value=""
      name="example-input"
    />
  );
}