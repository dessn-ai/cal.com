import React from 'react';
import { useParentState } from '../useIframeState';
import { DialogOverlay } from '../../../../packages/platform/atoms/src/components/ui/dialog';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "",
      label: "Class Name",
    },
  });

  return (
    <DialogOverlay className={state.className.value} />
  );
}