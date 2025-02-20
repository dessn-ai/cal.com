import React from 'react';
import { useParentState } from '../useIframeState';
import { DisconnectIntegrationComponent } from '../../../../packages/ui/components/disconnect-calendar-integration/DisconnectIntegration';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    label: {
      type: "string",
      value: "Disconnect",
      label: "Label",
    },
    trashIcon: {
      type: "boolean",
      value: true,
      label: "Show Trash Icon",
    },
    isGlobal: {
      type: "boolean",
      value: false,
      label: "Is Global",
    },
    isModalOpen: {
      type: "boolean",
      value: false,
      label: "Is Modal Open",
    },
    buttonColor: {
      type: "dropdown",
      value: "destructive",
      options: ["destructive", "primary", "secondary", "minimal"],
      label: "Button Color",
    },
  });

  return (
    <DisconnectIntegrationComponent
      label={state.label.value}
      trashIcon={state.trashIcon.value}
      isGlobal={state.isGlobal.value}
      isModalOpen={state.isModalOpen.value}
      onModalOpen={() => setState("isModalOpen", !state.isModalOpen.value)}
      onDeletionConfirmation={() => console.log("Deletion confirmed")}
      buttonProps={{ color: state.buttonColor.value as any }}
    />
  );
}