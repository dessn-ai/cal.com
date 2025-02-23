import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/ui/components/meta/Meta';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    title: {
      type: "string",
      value: "Preview Title",
      label: "Title",
    },
    description: {
      type: "string",
      value: "This is a preview description",
      label: "Description",
    },
    backButton: {
      type: "boolean",
      value: false,
      label: "Back Button",
    },
    borderInShellHeader: {
      type: "boolean",
      value: true,
      label: "Border In Shell Header",
    },
  });

  return (
    <ImportedComponent
      title={state.title.value}
      description={state.description.value}
      backButton={state.backButton.value}
      borderInShellHeader={state.borderInShellHeader.value}
    />
  );
}