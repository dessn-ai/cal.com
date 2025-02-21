import React from 'react';
import { useParentState } from '../useIframeState';
import { TableHeader } from '../../../../packages/ui/components/table/TableNew';


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
      <TableHeader className={state.className.value}>
        <tr>
          <th>Header 1</th>
          <th>Header 2</th>
          <th>Header 3</th>
        </tr>
      </TableHeader>
    </table>
  );
}