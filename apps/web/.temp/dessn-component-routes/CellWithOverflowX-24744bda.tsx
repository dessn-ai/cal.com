import React from 'react';
import { useParentState } from '../useIframeState';
import { CellWithOverflowX } from '../../../../packages/features/insights/components/CellWithOverflowX';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    children: {
      type: "string",
      value: "Sample content",
      label: "Children",
    },
    className: {
      type: "string",
      value: "",
      label: "Class Name",
    },
  });

  return (
    <CellWithOverflowX
      children={state.children.value}
      className={state.className.value}
    />
  );
}