import React from 'react';
import { useParentState } from '../useIframeState';
import { RadioArea } from '../../../../packages/ui/form/radio-area/RadioAreaGroup';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    id: {
      type: "string",
      value: "radio-area-1",
      label: "ID",
    },
    value: {
      type: "string",
      value: "option1",
      label: "Value",
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled",
    },
    className: {
      type: "string",
      value: "",
      label: "Class Name",
    },
  });

  return (
    <RadioArea
      id={state.id.value}
      value={state.value.value}
      disabled={state.disabled.value}
      className={state.className.value}
    >
      <div>Radio Area Content</div>
    </RadioArea>
  );
}