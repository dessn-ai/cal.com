import React from 'react';
import { useParentState } from '../useIframeState';
import { DeleteDialog } from '../../../../packages/features/ee/workflows/components/DeleteDialog';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isOpenDialog: {
      type: "boolean",
      value: true,
      label: "Is Open Dialog",
    },
    workflowId: {
      type: "number",
      value: 1,
      label: "Workflow ID",
    },
  });

  const setIsOpenDialog = (value: boolean) => {
    setState('isOpenDialog', value);
  };

  const additionalFunction = async () => {
    console.log("Additional function called");
    return true;
  };

  return (
    <DeleteDialog
      isOpenDialog={state.isOpenDialog.value}
      setIsOpenDialog={setIsOpenDialog}
      workflowId={state.workflowId.value}
      additionalFunction={additionalFunction}
    />
  );
}