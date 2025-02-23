import React from 'react';
import { useParentState } from '../useIframeState';
import { ToastDescription } from '../../../../packages/platform/atoms/src/components/ui/toast';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    content: {
      type: "string",
      value: "This is a toast description",
      label: "Description Content",
    },
    className: {
      type: "string",
      value: "",
      label: "Additional CSS Classes",
    },
  });

  return (
    <ToastDescription
      className={state.className.value}
    >
      {state.content.value}
    </ToastDescription>
  );
}