import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/apps/components/DisconnectIntegrationModal';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    credentialId: {
      type: "number",
      value: 1,
      label: "Credential ID",
    },
    isOpen: {
      type: "boolean",
      value: true,
      label: "Is Open",
    },
    app: {
      type: "string",
      value: "google_calendar",
      label: "App Slug",
    },
    teamId: {
      type: "number",
      value: 1,
      label: "Team ID",
    },
  });

  const handleModelClose = () => {
    setState("isOpen", false);
  };

  const handleRemoveApp = (params: any) => {
    console.log("Removing app with params:", params);
    handleModelClose();
  };

  return (
    <ImportedComponent
      credentialId={state.credentialId.value}
      isOpen={state.isOpen.value}
      handleModelClose={handleModelClose}
      teamId={state.teamId.value}
      handleRemoveApp={handleRemoveApp}
      app={state.app.value}
    />
  );
}