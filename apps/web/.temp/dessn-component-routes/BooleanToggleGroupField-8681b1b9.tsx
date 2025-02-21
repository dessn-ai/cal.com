import React from 'react';
import { useParentState } from '../useIframeState';
import { BooleanToggleGroupField } from '../../../../packages/ui/components/form/toggleGroup/BooleanToggleGroup';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    defaultValue: {
      type: "boolean",
      value: true,
      label: "Default Value",
    },
    value: {
      type: "boolean",
      value: true,
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
    label: {
      type: "string",
      value: "Toggle Group Label",
      label: "Label",
    },
    containerClassName: {
      type: "string",
      value: "",
      label: "Container Class Name",
    },
    name: {
      type: "string",
      value: "toggleGroup",
      label: "Name",
    },
    className: {
      type: "string",
      value: "",
      label: "Class Name",
    },
    error: {
      type: "string",
      value: "",
      label: "Error",
    },
  });

  const handleValueChange = (value?: boolean) => {
    setState("value", value);
  };

  return (
    <BooleanToggleGroupField
      defaultValue={state.defaultValue.value}
      value={state.value.value}
      onValueChange={handleValueChange}
      disabled={state.disabled.value}
      variant={state.variant.value as "default" | "small"}
      label={state.label.value}
      containerClassName={state.containerClassName.value}
      name={state.name.value}
      className={state.className.value}
      error={state.error.value}
    />
  );
}