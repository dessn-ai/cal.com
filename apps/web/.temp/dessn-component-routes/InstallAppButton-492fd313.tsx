import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/vital/components/InstallAppButton';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    render: {
      type: "dropdown",
      value: "default",
      options: ["default", "custom"],
      label: "Render Function",
    },
    onChanged: {
      type: "boolean",
      value: false,
      label: "On Changed",
    },
    disableInstall: {
      type: "boolean",
      value: false,
      label: "Disable Install",
    },
  });

  const renderFunction = state.render.value === "default" 
    ? ({ useDefaultComponent = true, isPending = false, ...props }) => (
        <button {...props} disabled={isPending}>
          {isPending ? "Installing..." : "Install App"}
        </button>
      )
    : ({ isPending, ...props }) => (
        <div {...props}>Custom Render: {isPending ? "Installing..." : "Install App"}</div>
      );

  return (
    <ImportedComponent
      render={renderFunction}
      onChanged={state.onChanged.value ? () => console.log("Changed") : undefined}
      disableInstall={state.disableInstall.value}
    />
  );
}