import React from 'react';
import { useParentState } from '../useIframeState';
import { SatSymbol } from '../../../../packages/ui/components/icon/SatSymbol';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "w-6 h-6 text-black",
      label: "Class Name",
    },
  });

  return (
    <SatSymbol className={state.className.value} />
  );
}