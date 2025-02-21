import React from 'react';
import { useParentState } from '../useIframeState';
import { FormActionsProvider } from '../../../../packages/app-store/routing-forms/components/FormActions';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    appUrl: {
      type: "string",
      value: "/app/routing-forms",
      label: "App URL",
    },
    newFormDialogState: {
      type: "dropdown",
      value: "null",
      options: ["null", "new", "duplicate"],
      label: "New Form Dialog State",
    },
  });

  const newFormDialogState = state.newFormDialogState.value === "null" ? null : {
    action: state.newFormDialogState.value,
    target: null,
  };

  const setNewFormDialogState = (newState) => {
    setState("newFormDialogState", newState ? newState.action : "null");
  };

  return (
    <FormActionsProvider
      appUrl={state.appUrl.value}
      newFormDialogState={newFormDialogState}
      setNewFormDialogState={setNewFormDialogState}
    >
      {/* Child components would go here */}
    </FormActionsProvider>
  );
}