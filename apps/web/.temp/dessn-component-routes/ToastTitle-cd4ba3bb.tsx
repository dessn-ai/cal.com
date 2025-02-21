import React from 'react';
import { useParentState } from '../useIframeState';
import { ToastTitle } from '../../../../packages/platform/atoms/src/components/ui/toast';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    title: {
      type: "string",
      value: "Sample Toast Title",
      label: "Title",
    },
    className: {
      type: "string",
      value: "",
      label: "Custom Class",
    },
  });

  return (
    <ToastTitle className={state.className.value}>
      {state.title.value}
    </ToastTitle>
  );
}