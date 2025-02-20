import React from 'react';
import { useParentState } from '../useIframeState';
import { ToastProvider, ToastViewport, Toast, ToastAction } from '../../../../packages/platform/atoms/src/components/ui/toast';

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
          onOpenChange={() => {}}
          duration={Infinity}
        >
          <div className="flex gap-2">
            <div>Toast Message</div>
            <ToastAction
              altText="Action button"
              className={state.className.value}
              onClick={() => console.log("ToastAction clicked")}
            >
              {state.children.value}
            </ToastAction>
          </div>
        </Toast>
        <ToastViewport />
      </div>
    </ToastProvider>
  );
}