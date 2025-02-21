import React from 'react';
import { useParentState } from '../useIframeState';
import { SheetBody } from '../../../../packages/ui/components/sheet/Sheet';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "custom-class",
      label: "Class Name",
    },
    children: {
      type: "string",
      value: "This is the content of the SheetBody",
      label: "Children",
    },
  });

  return (
    <SheetBody className={state.className.value}>
      {state.children.value}
    </SheetBody>
  );
}