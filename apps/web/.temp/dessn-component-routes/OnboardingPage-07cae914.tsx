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
        variant: "other",
        slug: "sample-app"
      }),
      label: "App Metadata"
    },
    step: {
      type: "dropdown",
      value: "accounts_step",
      options: ["accounts_step", "event_types_step", "configure_step"],
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

  const props = {
    appMetadata: JSON.parse(state.appMetadata.value),
    step: state.step.value,
    teams: [],
    personalAccount: {
      id: 1,
      avatarUrl: "",
      name: "Personal Account",
      alreadyInstalled: false
    },
    eventTypeGroups: [],
    userName: state.userName.value,
    credentialId: 1,
    showEventTypesStep: state.showEventTypesStep.value,
    isConferencing: state.isConferencing.value,
    installableOnTeams: state.installableOnTeams.value,
    isOrg: state.isOrg.value
  };

  return <ImportedComponent {...props} />;
}