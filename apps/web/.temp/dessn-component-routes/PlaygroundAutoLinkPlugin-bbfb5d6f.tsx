import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/ui/components/editor/plugins/AutoLinkPlugin';

import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { AutoLinkNode } from '@lexical/link';

const initialConfig = {
  namespace: 'MyEditor',
  onError: (error: Error) => console.error(error),
  nodes: [AutoLinkNode],
  theme: {
    // Add some basic theme styling to make the editor visible
    paragraph: 'editor-paragraph',
    text: {
      bold: 'editor-text-bold',
      italic: 'editor-text-italic',
      underline: 'editor-text-underline',
    },
  },
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
    <div className="editor-container">
      <LexicalComposer initialConfig={initialConfig}>
        <RichTextPlugin
          contentEditable={<ContentEditable className="editor-input" />}
          placeholder={<div className="editor-placeholder">Enter some text...</div>}
          ErrorBoundary={LexicalErrorBoundary}
        />
        <ImportedComponent />
      </LexicalComposer>
    </div>
  );
}