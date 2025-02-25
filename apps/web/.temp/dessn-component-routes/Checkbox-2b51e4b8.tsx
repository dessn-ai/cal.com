import React from 'react';
import { useParentState } from '../useIframeState';
import { Checkbox } from '../../../../packages/ui/components/form/checkbox/Checkbox';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    checked: {
      type: "boolean",
      value: false,
      label: "Checked",
    },
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
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled",
    },
    error: {
      type: "boolean",
      value: false,
      label: "Error",
    },
  });

  return (
    <Checkbox
      checked={state.checked.value}
      onCheckedChange={(checked) => setState('checked', checked)}
      label={state.label.value}
      description={state.description.value}
      disabled={state.disabled.value}
      error={state.error.value}
    />
  );
}