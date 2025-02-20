import React from 'react';
import { useParentState } from '../useIframeState';
import { ToastViewport } from '../../../../packages/platform/atoms/src/components/ui/toast';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "",
      label: "Class Name",
    },
  });

  return (
    <ToastViewport
      className={state.className.value}
    />
  );
}