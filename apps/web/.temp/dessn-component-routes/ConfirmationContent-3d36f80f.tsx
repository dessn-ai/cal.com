import React from 'react';
import { useParentState } from '../useIframeState';
import { ConfirmationContent } from '../../../../packages/ui/components/dialog/ConfirmationDialogContent';
import * as Dialog from '@radix-ui/react-dialog';

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
    loadingText: {
      type: "string",
      value: "Loading...",
      label: "Loading Text",
    },
    isPending: {
      type: "boolean",
      value: false,
      label: "Is Pending",
    },
  });

  return (
    <Dialog.Root open={true}>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content>
          <ConfirmationContent
            title={state.title.value}
            variety={state.variety.value as "danger" | "warning" | "success"}
            confirmBtnText={state.confirmBtnText.value}
            cancelBtnText={state.cancelBtnText.value}
            loadingText={state.loadingText.value}
            isPending={state.isPending.value}
            onConfirm={() => console.log("Confirmed")}
          >
            This is the content of the confirmation dialog. Are you sure you want to proceed?
          </ConfirmationContent>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}