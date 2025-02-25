import React from 'react';
import { useParentState } from '../useIframeState';
import { TableRow } from '../../../../packages/ui/components/table/TableNew';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "custom-class",
      label: "Class Name",
    },
  });

  return (
    <table>
      <tbody>
        <TableRow className={state.className.value}>
          <td>Sample Cell 1</td>
          <td>Sample Cell 2</td>
        </TableRow>
      </tbody>
    </table>
  );
}