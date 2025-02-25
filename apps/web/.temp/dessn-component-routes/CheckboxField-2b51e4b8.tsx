import React from 'react';
import { useParentState } from '../useIframeState';
import { CheckboxField } from '../../../../packages/ui/components/form/checkbox/Checkbox';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    label: {
      type: "string",
      value: "Checkbox Label",
      label: "Label",
    },
    description: {
      type: "string",
      value: "This is a description for the checkbox",
      label: "Description",
    },
    error: {
      type: "boolean",
      value: false,
      label: "Error",
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled",
    },
    descriptionAsLabel: {
      type: "boolean",
      value: false,
      label: "Description as Label",
    },
    checked: {
      type: "boolean",
      value: false,
      label: "Checked",
    },
  });

  return (
    <CheckboxField
      label={state.label.value}
      description={state.description.value}
      error={state.error.value}
      disabled={state.disabled.value}
      descriptionAsLabel={state.descriptionAsLabel.value}
      checked={state.checked.value}
      onChange={() => setState('checked', !state.checked.value)}
    />
  );
}