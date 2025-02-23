import React from 'react';
import { useParentState } from '../useIframeState';
import { ToastProvider, ToastViewport } from '../../../../packages/platform/atoms/src/components/ui/toast';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "",
      label: "Class Name",
    },
  });

  return (
    <ToastProvider>
      <ToastViewport
        className={state.className.value}
      />
    </ToastProvider>
  );
}