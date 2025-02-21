import React from 'react';
import { useParentState } from '../useIframeState';
import { InfoLostWarningDialog } from '../../../../packages/app-store/routing-forms/components/InfoLostWarningDialog';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isOpenInfoLostDialog: {
      type: "boolean",
      value: true,
      label: "Is Dialog Open",
    },
    goToRoute: {
      type: "string",
      value: "/dashboard",
      label: "Go To Route",
    },
  });

  const setIsOpenInfoLostDialog = (value: boolean) => {
    setState('isOpenInfoLostDialog', value);
  };

  return (
    <InfoLostWarningDialog
      isOpenInfoLostDialog={state.isOpenInfoLostDialog.value}
      setIsOpenInfoLostDialog={setIsOpenInfoLostDialog}
      goToRoute={state.goToRoute.value}
    />
  );
}