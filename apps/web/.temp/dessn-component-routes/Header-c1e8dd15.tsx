import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/settings/appDir/SettingsHeader';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    title: {
      type: "string",
      value: "Settings",
      label: "Title",
    },
    description: {
      type: "string",
      value: "Manage your account settings and preferences.",
      label: "Description",
    },
    borderInShellHeader: {
      type: "boolean",
      value: false,
      label: "Border in Shell Header",
    },
    backButton: {
      type: "boolean",
      value: false,
      label: "Show Back Button",
    },
  });

  return (
    <ImportedComponent
      title={state.title.value}
      description={state.description.value}
      borderInShellHeader={state.borderInShellHeader.value}
      backButton={state.backButton.value}
    >
      <div>Child content goes here</div>
    </ImportedComponent>
  );
}