import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/_components/AppCard';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    app: {
      type: "object",
      value: {
        name: "Sample App",
        slug: "sample-app",
        logo: "https://example.com/logo.png",
        description: "This is a sample app description",
        categories: ["calendar"],
        isInstalled: true,
        enabled: true,
        isSetupAlready: true,
      },
      label: "App",
    },
    description: {
      type: "string",
      value: "Custom description for the app",
      label: "Description",
    },
    switchChecked: {
      type: "boolean",
      value: true,
      label: "Switch Checked",
    },
    returnTo: {
      type: "string",
      value: "/return-path",
      label: "Return To",
    },
    teamId: {
      type: "number",
      value: 1,
      label: "Team ID",
    },
    disableSwitch: {
      type: "boolean",
      value: false,
      label: "Disable Switch",
    },
    switchTooltip: {
      type: "string",
      value: "Toggle app",
      label: "Switch Tooltip",
    },
    hideSettingsIcon: {
      type: "boolean",
      value: false,
      label: "Hide Settings Icon",
    },
    hideAppCardOptions: {
      type: "boolean",
      value: false,
      label: "Hide App Card Options",
    },
  });

  const handleSwitchOnClick = (enabled: boolean) => {
    console.log("Switch toggled:", enabled);
  };

  return (
    <ImportedComponent
      app={state.app.value}
      description={state.description.value}
      switchChecked={state.switchChecked.value}
      switchOnClick={handleSwitchOnClick}
      returnTo={state.returnTo.value}
      teamId={state.teamId.value}
      disableSwitch={state.disableSwitch.value}
      switchTooltip={state.switchTooltip.value}
      hideSettingsIcon={state.hideSettingsIcon.value}
      hideAppCardOptions={state.hideAppCardOptions.value}
    >
      <div>Child content goes here</div>
    </ImportedComponent>
  );
}