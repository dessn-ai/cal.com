import React from 'react';
import { useParentState } from '../useIframeState';
import * as RadioGroup from '@radix-ui/react-radio-group';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    value: {
      type: "string",
      value: "option1",
      label: "Selected Value",
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled",
    },
    id: {
      type: "string",
      value: "radio-example",
      label: "ID",
    },
    label: {
      type: "string",
      value: "Example Radio",
      label: "Label",
    },
    withPadding: {
      type: "boolean",
      value: true,
      label: "With Padding",
    },
  });

  return (
    <RadioGroup.Root
      value={state.value.value}
      onValueChange={(value) => {
        setState((prev) => ({
          ...prev,
          value: { ...prev.value, value },
        }));
      }}
    >
      <div className={state.withPadding.value ? 'p-4' : ''}>
        <RadioGroup.Item
          value={state.value.value}
          disabled={state.disabled.value}
          id={state.id.value}
          className="w-4 h-4 rounded-full border border-gray-300 hover:border-gray-400"
        >
          <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-2 after:h-2 after:rounded-full after:bg-black" />
        </RadioGroup.Item>
        <label 
          htmlFor={state.id.value}
          className="ml-2 text-sm text-gray-900"
        >
          {state.label.value}
        </label>
      </div>
    </RadioGroup.Root>
  );
}