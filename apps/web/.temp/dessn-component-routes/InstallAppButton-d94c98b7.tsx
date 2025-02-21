import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/office365video/components/InstallAppButton';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    disableInstall: {
      type: "boolean",
      value: false,
      label: "Disable Install",
    },
  });

  const renderProps = {
    onClick: () => console.log("Button clicked"),
    disabled: state.disableInstall.value,
    useDefaultComponent: true,
  };

  return (
    <ImportedComponent
      render={(props) => <button {...props}>Install App</button>}
      onChanged={() => console.log("App installation changed")}
      disableInstall={state.disableInstall.value}
    />
  );
}