import React from 'react';
import { useParentState } from '../useIframeState';
import { Button } from '../../../../packages/ui/components/button';

// Mock SheetClose for preview
const PreviewSheetClose = ({ className, children }) => {
  return (
    <Button 
      className={className}
      onClick={() => console.log('Sheet would close here')}
    >
      {children}
    </Button>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "custom-class",
      label: "Class Name",
    },
    children: {
      type: "string",
      value: "Close Sheet",
      label: "Button Text",
    },
  });

  return (
    <PreviewSheetClose className={state.className.value}>
      {state.children.value}
    </PreviewSheetClose>
  );
}