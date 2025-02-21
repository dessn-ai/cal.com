import React from 'react';
import { useParentState } from '../useIframeState';
import { Label } from '../../../../packages/ui/form/radio-area/Radio';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled",
    },
    htmlFor: {
      type: "string",
      value: "exampleLabel",
      label: "HTML For",
    },
    children: {
      type: "string",
      value: "Example Label",
      label: "Label Text",
    },
  });

  return (
    <Label
      disabled={state.disabled.value}
      htmlFor={state.htmlFor.value}
    >
      {state.children.value}
    </Label>
  );
}