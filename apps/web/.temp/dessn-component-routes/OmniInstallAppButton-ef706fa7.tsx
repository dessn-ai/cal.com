import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/_components/OmniInstallAppButton';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    appId: {
      type: "string",
      value: "example-app-id",
      label: "App ID",
    },
    className: {
      type: "string",
      value: "custom-class",
      label: "Class Name",
    },
    returnTo: {
      type: "string",
      value: "/dashboard",
      label: "Return To",
    },
    teamId: {
      type: "number",
      value: 1,
      label: "Team ID",
    },
  });

  return (
    <ImportedComponent
      appId={state.appId.value}
      className={state.className.value}
      returnTo={state.returnTo.value}
      teamId={state.teamId.value}
    />
  );
}