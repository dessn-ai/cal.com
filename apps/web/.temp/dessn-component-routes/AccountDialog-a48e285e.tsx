import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/office365video/components/AccountDialog';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    open: {
      type: "boolean",
      value: true,
      label: "Open",
    },
    name: {
      type: "string",
      value: "Account check",
      label: "Dialog Name",
    },
    clearQueryParamsOnClose: {
      type: "string",
      value: "",
      label: "Clear Query Params on Close",
    },
  });

  const handleSubmit = () => {
    console.log("Submit clicked");
  };

  return (
    <ImportedComponent
      open={state.open.value}
      onOpenChange={(isOpen) => setState('open', isOpen)}
      name={state.name.value}
      clearQueryParamsOnClose={state.clearQueryParamsOnClose.value ? [state.clearQueryParamsOnClose.value] : undefined}
      handleSubmit={handleSubmit}
    />
  );
}