import React from 'react';
import { useParentState } from '../useIframeState';
import { WarningToast } from '../../../../packages/ui/components/toast/showToast';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    message: {
      type: "string",
      value: "This is a warning message",
      label: "Message",
    },
    toastVisible: {
      type: "boolean",
      value: true,
      label: "Toast Visible",
    },
    toastId: {
      type: "string",
      value: "warning-toast-1",
      label: "Toast ID",
    },
  });

  const handleClose = (toastId: string) => {
    console.log(`Toast with ID ${toastId} closed`);
    setState('toastVisible', false);
  };

  return (
    <WarningToast
      message={state.message.value}
      toastVisible={state.toastVisible.value}
      toastId={state.toastId.value}
      onClose={handleClose}
    />
  );
}