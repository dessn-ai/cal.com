import React from 'react';
import { useParentState } from '../useIframeState';
import { RadioArea, RadioAreaGroup } from '../../../../packages/ui/form/radio-area/RadioAreaGroup';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    id: {
      type: "string",
      value: "radio-area-1",
      label: "ID",
    },
    value: {
      type: "string",
      value: "option1",
      label: "Value",
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

  const handleValueChange = (newValue: string) => {
    setState((prev) => ({
      ...prev,
      value: {
        ...prev.value,
        value: newValue,
      },
    }));
  };

  return (
    <RadioAreaGroup 
      defaultValue="option1"
      value={state.value.value}
      onValueChange={handleValueChange}
    >
      <RadioArea
        value="option1"
        id="option1"
        disabled={state.disabled.value}
        className={state.className.value}
      >
        <div className="p-2">Option 1</div>
      </RadioArea>
      <RadioArea
        value="option2"
        id="option2"
        disabled={state.disabled.value}
        className={state.className.value}
      >
        <div className="p-2">Option 2</div>
      </RadioArea>
      <RadioArea
        value="option3"
        id="option3"
        disabled={state.disabled.value}
        className={state.className.value}
      >
        <div className="p-2">Option 3</div>
      </RadioArea>
    </RadioAreaGroup>
  );
}