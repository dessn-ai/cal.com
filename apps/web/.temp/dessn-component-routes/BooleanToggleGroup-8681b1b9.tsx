import React from 'react';
import { useParentState } from '../useIframeState';
import { BooleanToggleGroup } from '../../../../packages/ui/components/form/toggleGroup/BooleanToggleGroup';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    defaultValue: {
      type: "boolean",
      value: true,
      label: "Default Value",
    },
    value: {
      type: "boolean",
      value: false,
      label: "Value",
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled",
    },
    variant: {
      type: "dropdown",
      value: "default",
      options: ["default", "small"],
      label: "Variant",
    },
  });

  const handleValueChange = (newValue?: boolean) => {
    setState("value", newValue || false);
  };

  return (
    <BooleanToggleGroup
      defaultValue={state.defaultValue.value}
      value={state.value.value}
      onValueChange={handleValueChange}
      disabled={state.disabled.value}
      variant={state.variant.value as "default" | "small"}
    />
  );
}