import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/settings/admin/components/UsersTable';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    setSMSLockState: {
      type: "string",
      value: "Function to set SMS lock state",
      label: "Set SMS Lock State",
    },
  });

  const setSMSLockState = (param: { userId?: number; teamId?: number; lock: boolean }) => {
    console.log("setSMSLockState called with:", param);
  };

  return <ImportedComponent setSMSLockState={setSMSLockState} />;
}