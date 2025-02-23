import React from 'react';
import { useParentState } from '../useIframeState';
import { TableFooter } from '../../../../packages/ui/components/table/TableNew';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "custom-footer-class",
      label: "Class Name",
    },
    content: {
      type: "string",
      value: "Footer Content",
      label: "Footer Content",
    },
  });

  return (
    <TableFooter className={state.className.value}>
      {state.content.value}
    </TableFooter>
  );
}