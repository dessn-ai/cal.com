import React from 'react';
import { useParentState } from '../useIframeState';
import { DialogHeader } from '../../../../packages/ui/components/dialog/Dialog';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    title: {
      type: "string",
      value: "Sample Title",
      label: "Title",
    },
    subtitle: {
      type: "string",
      value: "Sample Subtitle",
      label: "Subtitle",
    },
  });

  return (
    <DialogHeader
      title={state.title.value}
      subtitle={state.subtitle.value}
    />
  );
}