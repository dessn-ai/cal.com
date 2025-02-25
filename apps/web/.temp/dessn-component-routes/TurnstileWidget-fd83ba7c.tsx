import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/auth/Turnstile';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    theme: {
      type: "dropdown",
      value: "auto",
      options: ["auto", "light", "dark"],
      label: "Theme",
    },
    action: {
      type: "string",
      value: "submit",
      label: "Action",
    },
    cData: {
      type: "string",
      value: "",
      label: "Custom Data",
    },
    responseField: {
      type: "string",
      value: "cf-turnstile-response",
      label: "Response Field",
    },
    responseFieldName: {
      type: "string",
      value: "cf-turnstile-response",
      label: "Response Field Name",
    },
    size: {
      type: "dropdown",
      value: "normal",
      options: ["normal", "compact"],
      label: "Size",
    },
    refreshExpired: {
      type: "string",
      value: "manual",
      label: "Refresh Expired",
    },
    language: {
      type: "string",
      value: "auto",
      label: "Language",
    },
    appearance: {
      type: "dropdown",
      value: "always",
      options: ["always", "execute", "interaction-only"],
      label: "Appearance",
    },
    execution: {
      type: "dropdown",
      value: "render",
      options: ["render", "execute"],
      label: "Execution",
    },
  });

  return (
    <ImportedComponent
      theme={state.theme.value}
      action={state.action.value}
      cData={state.cData.value}
      responseField={state.responseField.value}
      responseFieldName={state.responseFieldName.value}
      size={state.size.value}
      refreshExpired={state.refreshExpired.value}
      language={state.language.value}
      appearance={state.appearance.value}
      execution={state.execution.value}
      onVerify={() => console.log("Verified")}
      onLoad={() => console.log("Loaded")}
      onError={() => console.log("Error")}
      onExpire={() => console.log("Expired")}
    />
  );
}