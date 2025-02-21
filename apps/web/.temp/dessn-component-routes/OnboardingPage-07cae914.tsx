import React from 'react';
import { useParentState } from '../useIframeState';
import { TroubleshooterStoreProvider } from './store';

// Create a simplified version of the component
const SimplifiedComponent = ({
  appMetadata,
  step,
  userName,
  showEventTypesStep,
  isConferencing,
  installableOnTeams,
  isOrg,
  personalAccount
}) => {
  return (
    <div className="onboarding-preview">
      <div className="preview-content">
        <h2>Installation Preview</h2>
        <div className="preview-section">
          <h3>App Information</h3>
          <p>Name: {appMetadata.name}</p>
          <p>Type: {appMetadata.type}</p>
          <p>Current Step: {step}</p>
        </div>
        <div className="preview-section">
          <h3>User Information</h3>
          <p>Name: {userName}</p>
          <p>Account: {personalAccount.name}</p>
        </div>
        <div className="preview-section">
          <h3>Settings</h3>
          <p>Show Event Types: {showEventTypesStep ? 'Yes' : 'No'}</p>
          <p>Conferencing: {isConferencing ? 'Yes' : 'No'}</p>
          <p>Team Installation: {installableOnTeams ? 'Available' : 'Not Available'}</p>
          <p>Organization: {isOrg ? 'Yes' : 'No'}</p>
        </div>
      </div>
    </div>
  );
};

const PreviewComponent = () => {
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
    <TroubleshooterStoreProvider>
      <React.Suspense fallback={<div>Loading...</div>}>
        <SimplifiedComponent
          appMetadata={JSON.parse(state.appMetadata.value)}
          step={state.step.value}
          userName={state.userName.value}
          showEventTypesStep={state.showEventTypesStep.value}
          isConferencing={state.isConferencing.value}
          installableOnTeams={state.installableOnTeams.value}
          isOrg={state.isOrg.value}
          personalAccount={personalAccount}
        />
      </React.Suspense>
    </TroubleshooterStoreProvider>
  );
};

export default PreviewComponent;