import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/emails/src/components/BaseTable';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
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
    className: {
      type: "string",
      value: "",
      label: "Class Name",
    },
  });

  return (
    <ImportedComponent
      align={state.align.value as "left" | "center" | "right"}
      border={state.border.value}
      className={state.className.value}
    >
      <tr>
        <td>Sample content</td>
      </tr>
    </ImportedComponent>
  );
}