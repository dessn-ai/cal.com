import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/hitpay/components/KeyInput';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    defaultValue: {
      type: "string",
      value: "secretkey123",
      label: "Default Value",
    },
    name: {
      type: "string",
      value: "apiKey",
      label: "Name",
    },
    label: {
      type: "string",
      value: "API Key",
      label: "Label",
    },
    placeholder: {
      type: "string",
      value: "Enter your API key",
      label: "Placeholder",
    },
    required: {
      type: "boolean",
      value: true,
      label: "Required",
    },
    readOnly: {
      type: "boolean",
      value: false,
      label: "Read Only",
    },
    showAsteriskIndicator: {
      type: "boolean",
      value: true,
      label: "Show Asterisk Indicator",
    },
  });

  return (
    <ImportedComponent
      defaultValue={state.defaultValue.value}
      name={state.name.value}
      label={state.label.value}
      placeholder={state.placeholder.value}
      required={state.required.value}
      readOnly={state.readOnly.value}
      showAsteriskIndicator={state.showAsteriskIndicator.value}
    />
  );
}