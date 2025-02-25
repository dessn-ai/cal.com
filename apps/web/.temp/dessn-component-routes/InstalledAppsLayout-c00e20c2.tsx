import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../components/apps/layouts/InstalledAppsLayout';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    title: {
      type: "string",
      value: "Installed Apps",
      label: "Title",
    },
    description: {
      type: "string",
      value: "Manage your installed apps or change settings",
      label: "Description",
    },
  });

  return (
    <ImportedComponent
      title={state.title.value}
      description={state.description.value}
    >
      <div>Child content goes here</div>
    </ImportedComponent>
  );
}