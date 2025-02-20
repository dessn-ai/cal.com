import React from 'react';
import { useParentState } from '../useIframeState';
import { ToggleGroup } from '../../../../packages/ui/components/form/toggleGroup/ToggleGroup';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    value: {
      type: "string",
      value: "option1",
      label: "Selected Option",
    },
    options: {
      type: "dropdown",
      value: "option1,option2,option3",
      options: ["option1,option2,option3", "option1,option2,option3,option4"],
      label: "Options",
    },
    isFullWidth: {
      type: "boolean",
      value: false,
      label: "Is Full Width",
    },
    orientation: {
      type: "dropdown",
      value: "horizontal",
      options: ["horizontal", "vertical"],
      label: "Orientation",
    },
  });

  const options = state.options.value.split(',').map(option => ({
    value: option,
    label: option,
  }));

  return (
    <ToggleGroup
      value={state.value.value}
      onValueChange={(value) => setState('value', value)}
      options={options}
      isFullWidth={state.isFullWidth.value}
      orientation={state.orientation.value as "horizontal" | "vertical"}
    />
  );
}