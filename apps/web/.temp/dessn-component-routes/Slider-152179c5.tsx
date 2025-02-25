import React from 'react';
import { useParentState } from '../useIframeState';
import { Slider } from '../../../../packages/ui/components/image-uploader/Common';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    value: {
      type: "number",
      value: 50,
      label: "Slider Value",
    },
    min: {
      type: "number",
      value: 0,
      label: "Min Value",
    },
    max: {
      type: "number",
      value: 100,
      label: "Max Value",
    },
    step: {
      type: "number",
      value: 1,
      label: "Step",
    },
    label: {
      type: "string",
      value: "Slider Label",
      label: "Slider Label",
    },
  });

  const changeHandler = (newValue: number) => {
    setState("value", newValue);
  };

  return (
    <Slider
      value={state.value.value}
      label={state.label.value}
      changeHandler={changeHandler}
      min={state.min.value}
      max={state.max.value}
      step={state.step.value}
    />
  );
}