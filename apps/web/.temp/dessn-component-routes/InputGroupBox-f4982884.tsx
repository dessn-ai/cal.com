import React from 'react';
import { useParentState } from '../useIframeState';
import { InputGroupBox } from '../../../../packages/ui/components/form/inputs/Input';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    children: {
      type: "string",
      value: "Example content",
      label: "Children",
    },
    className: {
      type: "string",
      value: "custom-class",
      label: "Class Name",
    },
  });

  return (
    <InputGroupBox className={state.className.value}>
      {state.children.value}
    </InputGroupBox>
  );
}