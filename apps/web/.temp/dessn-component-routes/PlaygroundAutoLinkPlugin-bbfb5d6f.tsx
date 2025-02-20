import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/ui/components/editor/plugins/AutoLinkPlugin';

import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { AutoLinkNode } from '@lexical/link';
import { $createParagraphNode, $createTextNode, $getRoot } from 'lexical';

const initialConfig = {
  namespace: 'MyEditor',
  onError: (error: Error) => console.error(error),
  nodes: [AutoLinkNode],
  editorState: () => {
    const root = $getRoot();
    const paragraph = $createParagraphNode();
    const text = $createTextNode("Type a URL or email address here to see it auto-link: https://example.com or user@example.com");
    paragraph.append(text);
    root.append(paragraph);
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