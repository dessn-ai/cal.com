import React from 'react';
import { useParentState } from '../useIframeState';
import { ResponseValueCell } from '../../../../packages/features/insights/components/ResponseValueCell';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    optionMap: {
      type: "string",
      value: JSON.stringify({ option1: "Value 1", option2: "Value 2", option3: "Value 3" }),
      label: "Option Map",
    },
    values: {
      type: "string",
      value: JSON.stringify(["option1", "option2", "option3"]),
      label: "Values",
    },
    rowId: {
      type: "number",
      value: 1,
      label: "Row ID",
    },
  });

  const optionMap = JSON.parse(state.optionMap.value);
  const values = JSON.parse(state.values.value);

  return (
    <ResponseValueCell
      optionMap={optionMap}
      values={values}
      rowId={state.rowId.value}
    />
  );
}