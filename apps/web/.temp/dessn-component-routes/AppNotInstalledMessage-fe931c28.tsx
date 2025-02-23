import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/_components/AppNotInstalledMessage';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    appName: {
      type: "string",
      value: "Calendar",
      label: "App Name",
    },
  });

  return <ImportedComponent appName={state.appName.value} />;
}