import React from 'react';
import { useParentState } from '../useIframeState';
import { TableCaption } from '../../../../packages/ui/components/table/TableNew';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    content: {
      type: "string",
      value: "This is a table caption",
      label: "Caption Content",
    },
    className: {
      type: "string",
      value: "",
      label: "Additional CSS Classes",
    },
  });

  return (
    <TableCaption
      className={state.className.value}
    >
      {state.content.value}
    </TableCaption>
  );
}