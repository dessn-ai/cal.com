import React from 'react';
import { useParentState } from '../useIframeState';
import { DialogDescription } from '../../../../packages/platform/atoms/src/components/ui/dialog';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "custom-class",
      label: "Class Name",
    },
    children: {
      type: "string",
      value: "This is a dialog description.",
      label: "Description Text",
    },
  });

  return (
    <DialogDescription
      className={state.className.value}
    >
      {state.children.value}
    </DialogDescription>
  );
}