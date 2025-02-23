import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/emails/src/components/Row';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    multiple: {
      type: "boolean",
      value: false,
      label: "Multiple",
    },
    align: {
      type: "dropdown",
      value: "left",
      options: ["left", "center", "right"],
      label: "Align",
    },
    border: {
      type: "number",
      value: 0,
      label: "Border",
    },
  });

  return (
    <ImportedComponent
      multiple={state.multiple.value}
      align={state.align.value}
      border={state.border.value}
    >
      <td>Sample content</td>
    </ImportedComponent>
  );
}