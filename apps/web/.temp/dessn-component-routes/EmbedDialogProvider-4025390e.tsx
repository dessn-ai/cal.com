import React from 'react';
import { useParentState } from '../useIframeState';
import { EmbedDialogProvider } from '../../../../packages/features/embed/lib/hooks/useEmbedDialogCtx';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    children: {
      type: "string",
      value: "Example Child Content",
      label: "Children",
    },
  });

  return (
    <EmbedDialogProvider>
      {state.children.value}
    </EmbedDialogProvider>
  );
}