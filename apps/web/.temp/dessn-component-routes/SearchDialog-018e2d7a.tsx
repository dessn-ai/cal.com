import React from 'react';
import { useParentState } from '../useIframeState';
import { SearchDialog } from '../../../../packages/app-store/giphy/components/SearchDialog';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isOpenDialog: {
      type: "boolean",
      value: true,
      label: "Is Dialog Open",
    },
  });

  const setIsOpenDialog = (value: boolean) => {
    setState("isOpenDialog", value);
  };

  const onSave = (url: string) => {
    console.log("Saved URL:", url);
  };

  return (
    <SearchDialog
      isOpenDialog={state.isOpenDialog.value}
      setIsOpenDialog={setIsOpenDialog}
      onSave={onSave}
    />
  );
}