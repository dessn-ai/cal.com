import React from 'react';
import { useParentState } from '../useIframeState';
import { TableBody } from '../../../../packages/ui/components/table/TableNew';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "custom-class",
      label: "Class Name",
    },
  });

  return (
    <TableBody className={state.className.value}>
      <tr>
        <td>Sample Row 1, Cell 1</td>
        <td>Sample Row 1, Cell 2</td>
      </tr>
      <tr>
        <td>Sample Row 2, Cell 1</td>
        <td>Sample Row 2, Cell 2</td>
      </tr>
    </TableBody>
  );
}