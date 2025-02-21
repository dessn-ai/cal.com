import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/ui/components/editor/plugins/AutoLinkPlugin';

import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { AutoLinkNode, LinkNode } from '@lexical/link';
import { ParagraphNode, TextNode } from 'lexical';

const initialConfig = {
  namespace: 'MyEditor',
  onError: (error: Error) => console.error(error),
  nodes: [AutoLinkNode, LinkNode, ParagraphNode, TextNode],
  theme: {
    text: {
      bold: 'font-bold',
      italic: 'italic',
      underline: 'underline',
    },
    link: 'text-blue-500 underline',
  },
};

const Placeholder = () => {
  return <div className="absolute top-[1.125rem] left-[1.125rem] text-gray-400">Enter some text...</div>;
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
    <div className="relative">
      <LexicalComposer initialConfig={initialConfig}>
        <div className="relative min-h-[100px] w-full rounded-md border border-gray-300 bg-white px-3 py-2">
          <RichTextPlugin
            contentEditable={<ContentEditable className="min-h-[80px] outline-none" />}
            placeholder={<Placeholder />}
            ErrorBoundary={LexicalErrorBoundary}
          />
          <ImportedComponent />
        </div>
      </LexicalComposer>
    </div>
  );
}