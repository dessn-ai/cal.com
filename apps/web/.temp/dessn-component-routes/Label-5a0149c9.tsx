import React from 'react';
import { useParentState } from '../useIframeState';
import { Label } from '../../../../packages/ui/components/form/inputs/Label';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    children: {
      type: "string",
      value: "Label Text",
      label: "Label Content",
    },
    className: {
      type: "string",
      value: "",
      label: "Additional CSS Classes",
    },
  });

  return (
    <Label className={state.className.value}>
      {state.children.value}
    </Label>
  );
}