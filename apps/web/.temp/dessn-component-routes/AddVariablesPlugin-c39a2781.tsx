import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/ui/components/editor/plugins/AddVariablesPlugin';

import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { PlainTextPlugin } from '@lexical/react/LexicalPlainTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    variables: {
      type: "string",
      value: "name,email,date",
      label: "Variables (comma-separated)",
    },
  });

  const variables = state.variables.value.split(',').map(v => v.trim());

  const initialConfig = {
    namespace: 'AddVariablesPluginEditor',
    onError: (error: Error) => console.error(error),
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <div className="editor-container">
        <PlainTextPlugin
          contentEditable={<ContentEditable className="editor-input" />}
          placeholder={<div className="editor-placeholder">Enter some text...</div>}
        />
        <HistoryPlugin />
        <ImportedComponent variables={variables} />
      </div>
    </LexicalComposer>
  );
}