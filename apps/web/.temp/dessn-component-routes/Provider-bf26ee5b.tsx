import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/support/lib/helpscout/provider';

import { LiveChatLoaderProvider } from "react-live-chat-loader";

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    children: {
      type: "string",
      value: "<div>Sample Child Content</div>",
      label: "Children",
    },
  });

  return (
    <LiveChatLoaderProvider providerKey="sample-key" provider="helpScout">
      <ImportedComponent>
        <div dangerouslySetInnerHTML={{ __html: state.children.value }} />
      </ImportedComponent>
    </LiveChatLoaderProvider>
  );
}