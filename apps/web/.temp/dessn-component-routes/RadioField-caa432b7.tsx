import React from 'react';
import { useParentState } from '../useIframeState';
import { RadioField, Group } from '../../../../packages/ui/form/radio-area/Radio';

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
    <Group defaultValue={state.value.value}>
      <RadioField
        label={state.label.value}
        disabled={state.disabled.value}
        id={state.id.value}
        value={state.value.value}
        className={state.className.value}
        withPadding={state.withPadding.value}
      />
    </Group>
  );
}