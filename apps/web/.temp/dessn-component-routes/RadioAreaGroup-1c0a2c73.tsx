import React from 'react';
import { useParentState } from '../useIframeState';
import { RadioAreaGroup, Item as RadioAreaItem } from '../../../../packages/ui/form/radio-area/RadioAreaGroup';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    selectedValue: {
      type: "string",
      value: "",
      label: "Selected Value",
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled",
    },
    className: {
      type: "string",
      value: "",
      label: "Class Name",
    },
  });

  const handleValueChange = (value: string) => {
    setState("selectedValue", value);
  };

  return (
    <RadioAreaGroup
      value={state.selectedValue.value}
      onValueChange={handleValueChange}
      disabled={state.disabled.value}
      className={state.className.value}
    >
      <RadioAreaItem value="option1">Option 1</RadioAreaItem>
      <RadioAreaItem value="option2">Option 2</RadioAreaItem>
      <RadioAreaItem value="option3">Option 3</RadioAreaItem>
    </RadioAreaGroup>
  );
}