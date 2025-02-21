import React from 'react';
import { useParentState } from '../useIframeState';
import { InstallAppButtonWithoutPlanCheck } from '../../../../packages/app-store/components';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    type: {
      type: "dropdown",
      value: "google_calendar",
      options: ["google_calendar", "office365_calendar", "zoom_video", "slack_messaging"],
      label: "App Type",
    },
    disableInstall: {
      type: "boolean",
      value: false,
      label: "Disable Install",
    },
  });

  return (
    <InstallAppButtonWithoutPlanCheck
      type={state.type.value as `${string}_calendar` | `${string}_messaging` | `${string}_payment` | `${string}_video` | `${string}_other` | `${string}_automation` | `${string}_analytics` | `${string}_crm` | `${string}_other_calendar`}
      disableInstall={state.disableInstall.value}
      render={({ useDefaultComponent, disabled, onClick, loading }) => (
        <button
          onClick={onClick}
          disabled={disabled || loading}
        >
          {loading ? 'Installing...' : 'Install App'}
        </button>
      )}
    />
  );
}