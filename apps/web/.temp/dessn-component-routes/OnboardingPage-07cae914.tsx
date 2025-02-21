import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/apps/installation/[[...step]]/step-view';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    appMetadata: {
      type: "string",
      value: JSON.stringify({
        name: "Sample App",
        type: "calendar_other",
        categories: ["calendar"],
        slug: "sample-app",
        variant: "other_calendar"
      }),
      label: "App Metadata"
    },
    step: {
      type: "string",
      value: "accounts_step",
      label: "Current Step"
    },
    userName: {
      type: "string",
      value: "John Doe",
      label: "User Name"
    },
    showEventTypesStep: {
      type: "boolean",
      value: true,
      label: "Show Event Types Step"
    },
    isConferencing: {
      type: "boolean",
      value: false,
      label: "Is Conferencing"
    },
    installableOnTeams: {
      type: "boolean",
      value: true,
      label: "Installable on Teams"
    },
    isOrg: {
      type: "boolean",
      value: false,
      label: "Is Organization"
    }
  });

  const personalAccount = {
    id: 1,
    avatarUrl: "https://example.com/avatar.jpg",
    name: "John Doe",
    alreadyInstalled: false
  };

  return (
    <ImportedComponent
      appMetadata={JSON.parse(state.appMetadata.value)}
      step={state.step.value}
      userName={state.userName.value}
      showEventTypesStep={state.showEventTypesStep.value}
      isConferencing={state.isConferencing.value}
      installableOnTeams={state.installableOnTeams.value}
      isOrg={state.isOrg.value}
      personalAccount={personalAccount}
    />
  );
}