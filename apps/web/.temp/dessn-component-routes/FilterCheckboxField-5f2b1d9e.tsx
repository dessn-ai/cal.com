import React from 'react';
import { useParentState } from '../useIframeState';
import { FilterCheckboxField } from '../../../../packages/features/filters/components/TeamsFilter';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    label: {
      type: "string",
      value: "Filter Option",
      label: "Label",
    },
    checked: {
      type: "boolean",
      value: false,
      label: "Checked",
    },
    id: {
      type: "string",
      value: "filter-option",
      label: "ID",
    },
  });

  return (
    <FilterCheckboxField
      label={state.label.value}
      checked={state.checked.value}
      id={state.id.value}
      onChange={() => setState("checked", !state.checked.value)}
    />
  );
}