import React from 'react';
import { useParentState } from '../useIframeState';
import { TableCell } from '../../../../packages/ui/components/table/TableNew';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    content: {
      type: "string",
      value: "Sample Cell Content",
      label: "Cell Content"
    },
    className: {
      type: "string",
      value: "",
      label: "Additional CSS Classes"
    }
  });

  return (
    <table>
      <tbody>
        <tr>
          <TableCell className={state.className.value}>
            {state.content.value}
          </TableCell>
        </tr>
      </tbody>
    </table>
  );
}