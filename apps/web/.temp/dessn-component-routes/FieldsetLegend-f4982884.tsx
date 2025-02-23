import React from 'react';
import { useParentState } from '../useIframeState';
import { FieldsetLegend } from '../../../../packages/ui/components/form/inputs/Input';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    children: {
      type: "string",
      value: "Legend Text",
      label: "Legend Content",
    },
    className: {
      type: "string",
      value: "",
      label: "Additional CSS Classes",
    },
  });

  return (
    <FieldsetLegend className={state.className.value}>
      {state.children.value}
    </FieldsetLegend>
  );
}