import React from 'react';
import { useParentState } from '../useIframeState';
import { InputLeading } from '../../../../packages/ui/components/form/inputs/Input';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    children: {
      type: "string",
      value: "Leading Text",
      label: "Children",
    },
  });

  return (
    <InputLeading>
      {state.children.value}
    </InputLeading>
  );
}