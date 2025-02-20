import React from 'react';
import { useParentState } from '../useIframeState';
import { ErrorToast } from '../../../../packages/ui/components/toast/showToast';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    message: {
      type: "string",
      value: "An error occurred. Please try again.",
      label: "Error Message",
    },
    toastVisible: {
      type: "boolean",
      value: true,
      label: "Toast Visible",
    },
    toastId: {
      type: "string",
      value: "error-toast-1",
      label: "Toast ID",
    },
  });

  const handleClose = (toastId: string) => {
    console.log(`Toast with ID ${toastId} closed`);
    setState('toastVisible', false);
  };

  return (
    <ErrorToast
      message={state.message.value}
      toastVisible={state.toastVisible.value}
      toastId={state.toastId.value}
      onClose={handleClose}
    />
  );
}