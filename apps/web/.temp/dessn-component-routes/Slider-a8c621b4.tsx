import React from 'react';
import { useParentState } from '../useIframeState';
import { Slider } from '../../../../packages/ui/components/form/slider/index';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    defaultValue: {
      type: "number",
      value: 50,
      label: "Default Value",
    },
    min: {
      type: "number",
      value: 0,
      label: "Minimum Value",
    },
    max: {
      type: "number",
      value: 100,
      label: "Maximum Value",
    },
    step: {
      type: "number",
      value: 1,
      label: "Step",
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled",
    },
  });

  return (
    <Slider
      defaultValue={[state.defaultValue.value]}
      min={state.min.value}
      max={state.max.value}
      step={state.step.value}
      disabled={state.disabled.value}
      onValueChange={(value) => console.log('Value changed:', value)}
    />
  );
}