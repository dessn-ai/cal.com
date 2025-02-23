import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/ui/components/meta/Meta';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    title: {
      type: "string",
      value: "Sample Title",
      label: "Title",
    },
    description: {
      type: "string",
      value: "Sample description for the meta component",
      label: "Description",
    },
    backButton: {
      type: "boolean",
      value: false,
      label: "Show Back Button",
    },
    borderInShellHeader: {
      type: "boolean",
      value: true,
      label: "Border in Shell Header",
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