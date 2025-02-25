import React from 'react';
import { useParentState } from '../useIframeState';
import { ConfirmationDialogContent } from '../../../../packages/ui/components/dialog/ConfirmationDialogContent';
import { Dialog } from '../../../../packages/ui/components/dialog/Dialog';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    title: {
      type: "string",
      value: "Confirm Action",
      label: "Title",
    },
    variety: {
      type: "dropdown",
      value: "danger",
      options: ["danger", "warning", "success"],
      label: "Variety",
    },
    confirmBtnText: {
      type: "string",
      value: "Confirm",
      label: "Confirm Button Text",
    },
    cancelBtnText: {
      type: "string",
      value: "Cancel",
      label: "Cancel Button Text",
    },
    isPending: {
      type: "boolean",
      value: false,
      label: "Is Pending",
    },
    loadingText: {
      type: "string",
      value: "Loading...",
      label: "Loading Text",
    },
  });

  return (
    <Dialog defaultOpen>
      <ConfirmationDialogContent
        title={state.title.value}
        variety={state.variety.value as "danger" | "warning" | "success"}
        confirmBtnText={state.confirmBtnText.value}
        cancelBtnText={state.cancelBtnText.value}
        isPending={state.isPending.value}
        loadingText={state.loadingText.value}
        onConfirm={() => console.log("Confirmed")}
      >
        This is the content of the confirmation dialog. You can customize this text in the actual implementation.
      </ConfirmationDialogContent>
    </Dialog>
  );
}