import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/settings/outOfOffice/CreateNewOutOfOfficeEntryButton';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    size: {
      type: "dropdown",
      value: "base",
      options: ["base", "sm", "lg", "xs"],
      label: "Size",
    },
    "data-testid": {
      type: "string",
      value: "create-new-out-of-office-entry",
      label: "Data Test ID",
    },
  });

  return (
    <ImportedComponent
      size={state.size.value}
      data-testid={state["data-testid"].value}
    />
  );
}