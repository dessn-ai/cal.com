import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/ui/form/AddressInput';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    value: {
      type: "string",
      value: "123 Main St, City, Country",
      label: "Address Value",
    },
    id: {
      type: "string",
      value: "address-input",
      label: "Input ID",
    },
    placeholder: {
      type: "string",
      value: "Enter your address",
      label: "Placeholder",
    },
    required: {
      type: "boolean",
      value: false,
      label: "Required",
    },
    className: {
      type: "string",
      value: "",
      label: "Additional CSS Class",
    },
  });

  const handleChange = (val: string) => {
    setState('value', val);
  };

  return (
    <ImportedComponent
      value={state.value.value}
      id={state.id.value}
      placeholder={state.placeholder.value}
      required={state.required.value}
      onChange={handleChange}
      className={state.className.value}
    />
  );
}