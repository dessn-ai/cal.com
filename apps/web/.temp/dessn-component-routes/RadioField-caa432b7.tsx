import React from 'react';
import { useParentState } from '../useIframeState';
import * as RadioGroup from '@radix-ui/react-radio-group';
import { RadioField } from '../../../../packages/ui/form/radio-area/Radio';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    label: {
      type: "string",
      value: "Sample Label",
      label: "Label",
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled",
    },
    id: {
      type: "string",
      value: "sample-id",
      label: "ID",
    },
    value: {
      type: "string",
      value: "sample-value",
      label: "Value",
    },
    className: {
      type: "string",
      value: "",
      label: "Class Name",
    },
    withPadding: {
      type: "boolean",
      value: false,
      label: "With Padding",
    },
  });

  return (
    <RadioGroup.Root defaultValue={state.value.value} name="radio-group">
      <RadioField
        label={state.label.value}
        disabled={state.disabled.value}
        id={state.id.value}
        value={state.value.value}
        className={state.className.value}
        withPadding={state.withPadding.value}
      />
    </RadioGroup.Root>
  );
}