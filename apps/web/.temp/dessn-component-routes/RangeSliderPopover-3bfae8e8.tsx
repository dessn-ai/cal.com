import React from 'react';
import { useParentState } from '../useIframeState';
import { RangeSliderPopover } from '../../../../packages/ui/components/form/slider/RangeSliderPopover';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    triggerText: {
      type: "string",
      value: "Select Range",
      label: "Trigger Text",
    },
    value: {
      type: "string",
      value: "[0,100]",
      label: "Value",
    },
    min: {
      type: "number",
      value: 0,
      label: "Min",
    },
    max: {
      type: "number",
      value: 100,
      label: "Max",
    },
    step: {
      type: "number",
      value: 1,
      label: "Step",
    },
    badgeVariant: {
      type: "dropdown",
      value: "default",
      options: ["default", "success", "gray", "warning", "orange", "red"],
      label: "Badge Variant",
    },
    badgeSuffix: {
      type: "string",
      value: "units",
      label: "Badge Suffix",
    },
    inputSuffix: {
      type: "string",
      value: "units",
      label: "Input Suffix",
    },
    inputLeading: {
      type: "string",
      value: "$",
      label: "Input Leading",
    },
  });

  const handleChange = (newValue: number[]) => {
    setState('value', JSON.stringify(newValue));
  };

  return (
    <RangeSliderPopover
      triggerText={state.triggerText.value}
      value={JSON.parse(state.value.value)}
      onChange={handleChange}
      min={state.min.value}
      max={state.max.value}
      step={state.step.value}
      badgeVariant={state.badgeVariant.value as "default" | "success" | "gray" | "warning" | "orange" | "red"}
      badgeSuffix={state.badgeSuffix.value}
      inputSuffix={state.inputSuffix.value}
      inputLeading={state.inputLeading.value}
    />
  );
}