import React from 'react';
import { useParentState } from '../useIframeState';
import { Radio } from '../../../../packages/ui/form/radio-area/Radio';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    value: {
      type: "string",
      value: "option1",
      label: "Selected Value",
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled",
    },
    id: {
      type: "string",
      value: "radio-example",
      label: "ID",
    },
    label: {
      type: "string",
      value: "Example Radio",
      label: "Label",
    },
    withPadding: {
      type: "boolean",
      value: true,
      label: "With Padding",
    },
  });

  return (
    <Radio.RadioField
      value={state.value.value}
      disabled={state.disabled.value}
      id={state.id.value}
      label={state.label.value}
      withPadding={state.withPadding.value}
    />
  );
}