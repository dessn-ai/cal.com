import React from 'react';
import { useParentState } from '../useIframeState';
import { SheetFooter } from '../../../../packages/ui/components/sheet/Sheet';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "custom-sheet-footer",
      label: "Class Name",
    },
  });

  return (
    <SheetFooter className={state.className.value}>
      <div>Sheet Footer Content</div>
    </SheetFooter>
  );
}