import React from 'react';
import { useParentState } from '../useIframeState';
import { ToastAction } from '../../../../packages/platform/atoms/src/components/ui/toast';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "custom-class",
      label: "Class Name",
    },
    children: {
      type: "string",
      value: "Action",
      label: "Button Text",
    },
  });

  return (
    <ToastAction
      className={state.className.value}
      onClick={() => console.log("ToastAction clicked")}
    >
      {state.children.value}
    </ToastAction>
  );
}