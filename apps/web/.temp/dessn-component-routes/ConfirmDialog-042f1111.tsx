import React from 'react';
import { useParentState } from '../useIframeState';
import { ConfirmDialog } from '../../../../packages/app-store/wipemycalother/components/confirmDialog';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isOpenDialog: {
      type: "boolean",
      value: true,
      label: "Is Dialog Open",
    },
  });

  const setIsOpenDialog = (value: boolean) => {
    setState('isOpenDialog', value);
  };

  return (
    <ConfirmDialog
      isOpenDialog={state.isOpenDialog.value}
      setIsOpenDialog={setIsOpenDialog}
    />
  );
}