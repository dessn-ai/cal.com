import React from 'react';
import { useParentState } from '../useIframeState';
import { SuccessToast } from '../../../../packages/ui/components/toast/showToast';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    message: {
      type: "string",
      value: "This is a success message!",
      label: "Message",
    },
    toastVisible: {
      type: "boolean",
      value: true,
      label: "Toast Visible",
    },
    toastId: {
      type: "string",
      value: "unique-toast-id",
      label: "Toast ID",
    },
  });

  const handleClose = (toastId: string) => {
    console.log(`Toast with ID ${toastId} closed`);
    setState('toastVisible', false);
  };

  return (
    <SuccessToast
      message={state.message.value}
      toastVisible={state.toastVisible.value}
      toastId={state.toastId.value}
      onClose={handleClose}
    />
  );
}