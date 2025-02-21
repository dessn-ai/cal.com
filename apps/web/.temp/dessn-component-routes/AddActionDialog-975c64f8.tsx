import React from 'react';
import { useParentState } from '../useIframeState';
import { AddActionDialog } from '../../../../packages/features/ee/workflows/components/AddActionDialog';

import { WorkflowActions } from '@calcom/prisma/enums';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isOpenDialog: {
      type: "boolean",
      value: true,
      label: "Is Dialog Open",
    },
  });

  const addAction = (
    action: WorkflowActions,
    sendTo?: string,
    numberRequired?: boolean,
    senderId?: string,
    senderName?: string
  ) => {
    console.log('Action added:', { action, sendTo, numberRequired, senderId, senderName });
  };

  return (
    <AddActionDialog
      isOpenDialog={state.isOpenDialog.value}
      setIsOpenDialog={(value) => setState('isOpenDialog', value)}
      addAction={addAction}
    />
  );
}