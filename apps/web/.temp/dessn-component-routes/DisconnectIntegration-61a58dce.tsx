import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/apps/components/DisconnectIntegration';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    credentialId: {
      type: "number",
      value: 1,
      label: "Credential ID",
    },
    label: {
      type: "string",
      value: "Disconnect",
      label: "Label",
    },
    trashIcon: {
      type: "boolean",
      value: false,
      label: "Show Trash Icon",
    },
    isGlobal: {
      type: "boolean",
      value: false,
      label: "Is Global",
    },
  });

  const onSuccess = () => {
    console.log("Disconnection successful");
  };

  return (
    <ImportedComponent
      credentialId={state.credentialId.value}
      label={state.label.value}
      trashIcon={state.trashIcon.value}
      isGlobal={state.isGlobal.value}
      onSuccess={onSuccess}
      buttonProps={{}}
    />
  );
}