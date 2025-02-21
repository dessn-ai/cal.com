import React from 'react';
import { useParentState } from '../useIframeState';
import { RadioAreaGroup, Item } from '../../../../packages/ui/form/radio-area/RadioAreaGroup';

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
      <Item value="option1">Option 1</Item>
      <Item value="option2">Option 2</Item>
      <Item value="option3">Option 3</Item>
    </RadioAreaGroup>
  );
}