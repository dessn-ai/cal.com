import React from 'react';
import { useParentState } from '../useIframeState';
import { TableHead } from '../../../../packages/ui/components/table/TableNew';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "custom-class",
      label: "Class Name",
    },
    children: {
      type: "string",
      value: "Table Header",
      label: "Content",
    },
  });

  return (
    <table>
      <thead>
        <tr>
          <TableHead className={state.className.value}>
            {state.children.value}
          </TableHead>
        </tr>
      </thead>
    </table>
  );
}