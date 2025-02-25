import React from 'react';
import { useParentState } from '../useIframeState';
import { Toast, ToastAction, ToastProvider } from '../../../../packages/platform/atoms/src/components/ui/toast';

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
    <ToastProvider>
      <Toast>
        <ToastAction
          className={state.className.value}
          onClick={() => console.log("ToastAction clicked")}
          altText="Toast Action"
        >
          {state.children.value}
        </ToastAction>
      </Toast>
    </ToastProvider>
  );
}