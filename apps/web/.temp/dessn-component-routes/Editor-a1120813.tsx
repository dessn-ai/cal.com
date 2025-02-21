import React from 'react';
import { useParentState } from '../useIframeState';
import { Editor } from '../../../../packages/ui/components/editor/Editor';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    text: {
      type: "string",
      value: "Initial text",
      label: "Text",
    },
    excludedToolbarItems: {
      type: "string",
      value: "bold,italic",
      label: "Excluded Toolbar Items",
    },
    variables: {
      type: "string",
      value: "name,email,date",
      label: "Variables",
    },
    addVariableButtonTop: {
      type: "boolean",
      value: false,
      label: "Add Variable Button Top",
    },
    height: {
      type: "string",
      value: "300px",
      label: "Height",
    },
    maxHeight: {
      type: "string",
      value: "500px",
      label: "Max Height",
    },
    placeholder: {
      type: "string",
      value: "Start typing...",
      label: "Placeholder",
    },
    disableLists: {
      type: "boolean",
      value: false,
      label: "Disable Lists",
    },
    updateTemplate: {
      type: "boolean",
      value: false,
      label: "Update Template",
    },
    editable: {
      type: "boolean",
      value: true,
      label: "Editable",
    },
    plainText: {
      type: "boolean",
      value: false,
      label: "Plain Text",
    },
  });

  const getText = () => state.text.value;
  const setText = (text: string) => setState('text', text);

  return (
    <Editor
      getText={getText}
      setText={setText}
      excludedToolbarItems={state.excludedToolbarItems.value.split(',')}
      variables={state.variables.value.split(',')}
      addVariableButtonTop={state.addVariableButtonTop.value}
      height={state.height.value}
      maxHeight={state.maxHeight.value}
      placeholder={state.placeholder.value}
      disableLists={state.disableLists.value}
      updateTemplate={state.updateTemplate.value}
      editable={state.editable.value}
      plainText={state.plainText.value}
    />
  );
}