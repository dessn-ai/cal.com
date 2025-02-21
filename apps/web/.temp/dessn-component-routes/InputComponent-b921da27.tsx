import React from 'react';
import { useParentState } from '../useIframeState';
import { InputComponent } from '../../../../packages/ui/components/form/select/components';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    inputClassName: {
      type: "string",
      value: "custom-input-class",
      label: "Input Class Name",
    },
  });

  return (
    <InputComponent<any, false>
      inputClassName={state.inputClassName.value}
      onBlur={() => {}}
      onChange={() => {}}
      onFocus={() => {}}
      value=""
    />
  );
}