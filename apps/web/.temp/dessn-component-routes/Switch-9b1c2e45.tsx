import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/ui/components/form/switch/Switch';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    label: {
      type: "string",
      value: "Toggle Switch",
      label: "Label",
    },
    checked: {
      type: "boolean",
      value: false,
      label: "Checked",
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled",
    },
    size: {
      type: "dropdown",
      value: "base",
      options: ["base", "sm"],
      label: "Size",
    },
    labelOnLeading: {
      type: "boolean",
      value: false,
      label: "Label on Leading",
    },
    tooltip: {
      type: "string",
      value: "",
      label: "Tooltip",
    },
    padding: {
      type: "boolean",
      value: false,
      label: "Padding",
    },
  });

  return (
    <ImportedComponent
      label={state.label.value}
      checked={state.checked.value}
      onCheckedChange={(checked) => setState('checked', checked)}
      disabled={state.disabled.value}
      size={state.size.value as "base" | "sm"}
      labelOnLeading={state.labelOnLeading.value}
      tooltip={state.tooltip.value}
      padding={state.padding.value}
    />
  );
}