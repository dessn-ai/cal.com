import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/ui/components/editor/plugins/ToolbarPlugin';

import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    getText: {
      type: "string",
      value: "<p>Initial text</p>",
      label: "Get Text",
    },
    setText: {
      type: "string",
      value: "",
      label: "Set Text",
    },
    excludedToolbarItems: {
      type: "string",
      value: "",
      label: "Excluded Toolbar Items",
    },
    variables: {
      type: "string",
      value: "variable1,variable2",
      label: "Variables",
    },
    addVariableButtonTop: {
      type: "boolean",
      value: false,
      label: "Add Variable Button Top",
    },
    height: {
      type: "string",
      value: "200px",
      label: "Height",
    },
    maxHeight: {
      type: "string",
      value: "300px",
      label: "Max Height",
    },
    placeholder: {
      type: "string",
      value: "Enter text here...",
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
    firstRender: {
      type: "boolean",
      value: true,
      label: "First Render",
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

  const initialConfig = {
    namespace: 'MyEditor',
    onError: (error: Error) => console.error(error),
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <div style={{ height: state.height.value, maxHeight: state.maxHeight.value }}>
        <RichTextPlugin
          contentEditable={<ContentEditable style={{ height: '100%', outline: 'none' }} />}
          placeholder={<div>{state.placeholder.value}</div>}
        />
        <HistoryPlugin />
        <ImportedComponent
          getText={() => state.getText.value}
          setText={(text: string) => setState('setText', text)}
          excludedToolbarItems={state.excludedToolbarItems.value ? state.excludedToolbarItems.value.split(',') : undefined}
          variables={state.variables.value ? state.variables.value.split(',') : undefined}
          addVariableButtonTop={state.addVariableButtonTop.value}
          height={state.height.value}
          maxHeight={state.maxHeight.value}
          placeholder={state.placeholder.value}
          disableLists={state.disableLists.value}
          updateTemplate={state.updateTemplate.value}
          firstRender={state.firstRender.value}
          setFirstRender={(value: boolean) => setState('firstRender', value)}
          editable={state.editable.value}
          plainText={state.plainText.value}
        />
      </div>
    </LexicalComposer>
  );
}