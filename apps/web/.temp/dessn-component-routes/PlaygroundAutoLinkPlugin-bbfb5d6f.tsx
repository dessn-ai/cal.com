import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/ui/components/editor/plugins/AutoLinkPlugin';

import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';

const initialConfig = {
  namespace: 'MyEditor',
  onError: (error: Error) => console.error(error),
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    editorContent: {
      type: "string",
      value: "Type a URL or email address here to see it auto-link: https://example.com or user@example.com",
      label: "Editor Content",
    },
  });

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <RichTextPlugin
        contentEditable={<ContentEditable />}
        placeholder={<div>Enter some text...</div>}
        ErrorBoundary={LexicalErrorBoundary}
      />
      <ImportedComponent />
    </LexicalComposer>
  );
}