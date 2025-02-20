import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/ui/form/PhoneInput';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    value: {
      type: "string",
      value: "+1234567890",
      label: "Phone Number",
    },
    placeholder: {
      type: "string",
      value: "Enter phone number",
      label: "Placeholder",
    },
    required: {
      type: "boolean",
      value: false,
      label: "Required",
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled",
    },
  });

  const handleChange = (value: string) => {
    setState("value", value);
  };

  return (
    <ImportedComponent
      value={state.value.value}
      placeholder={state.placeholder.value}
      required={state.required.value}
      disabled={state.disabled.value}
      onChange={handleChange}
    />
  );
}