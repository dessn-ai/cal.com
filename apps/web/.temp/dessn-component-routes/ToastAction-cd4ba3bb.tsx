import React from 'react';
import { useParentState } from '../useIframeState';
import { Toast, ToastProvider, ToastViewport, ToastAction, ToastTitle, ToastDescription } from '../../../../packages/platform/atoms/src/components/ui/toast';

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
    <ToastProvider swipeDirection="right">
      <div className="relative">
        <Toast
          open={true}
          defaultOpen={true}
          duration={Infinity}
        >
          <div className="grid gap-1">
            <ToastTitle>Toast Title</ToastTitle>
            <ToastDescription>
              This is a toast message description
            </ToastDescription>
          </div>
          <ToastAction
            className={state.className.value}
            onClick={() => console.log("ToastAction clicked")}
            altText="Try again"
          >
            {state.children.value}
          </ToastAction>
        </Toast>
        <ToastViewport />
      </div>
    </ToastProvider>
  );
}