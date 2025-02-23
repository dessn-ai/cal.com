import React from 'react';
import { useParentState } from '../useIframeState';
import { InstallAppButton } from '../../../../packages/app-store/components';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    type: {
      type: "dropdown",
      value: "google_calendar",
      options: ["google_calendar", "office365_calendar", "zoom_video", "slack_messaging"],
      label: "App Type",
    },
    teamsPlanRequired: {
      type: "boolean",
      value: false,
      label: "Teams Plan Required",
    },
    disableInstall: {
      type: "boolean",
      value: false,
      label: "Disable Install",
    },
    wrapperClassName: {
      type: "string",
      value: "my-4",
      label: "Wrapper Class Name",
    },
  });

  return (
    <InstallAppButton
      type={state.type.value as any}
      teamsPlanRequired={state.teamsPlanRequired.value ? { upgradeUrl: "/upgrade" } : undefined}
      disableInstall={state.disableInstall.value}
      wrapperClassName={state.wrapperClassName.value}
      render={({ useDefaultComponent, ...props }) => {
        if (useDefaultComponent) {
          return <button {...props}>Install App</button>;
        }
        return <button {...props}>Custom Install Button</button>;
      }}
    />
  );
}