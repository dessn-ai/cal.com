import React from 'react';
import { useParentState } from '../useIframeState';
import { Radio } from '../../../../packages/ui/form/radio-area/Radio';
import { RadioGroup } from '@radix-ui/react-radio-group';

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

  const options = [
    {
      label: "Option 1",
      value: "option1"
    },
    {
      label: "Option 2",
      value: "option2"
    }
  ];

  const handleValueChange = (newValue: string) => {
    setState(prev => ({
      ...prev,
      value: {
        ...prev.value,
        value: newValue
      }
    }));
  };

  if (!Radio) {
    return <div>Radio component not available</div>;
  }

  return (
    <RadioGroup 
      value={state.value.value} 
      onValueChange={handleValueChange}
      className="space-y-4"
    >
      {options.map((option) => (
        <Radio
          key={option.value}
          label={option.label}
          id={`${state.id.value}-${option.value}`}
          value={option.value}
          disabled={state.disabled.value}
        />
      ))}
    </RadioGroup>
  );
}