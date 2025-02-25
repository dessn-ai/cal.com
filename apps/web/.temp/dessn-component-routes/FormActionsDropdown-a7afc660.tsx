import React from 'react';
import { useParentState } from '../useIframeState';
import { FormActionsDropdown } from '../../../../packages/app-store/routing-forms/components/FormActions';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled",
    },
  });

  return (
    <FormActionsDropdown disabled={state.disabled.value}>
      <div>Dropdown Content</div>
    </FormActionsDropdown>
  );
}