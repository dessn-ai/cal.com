import React from 'react';
import { useParentState } from '../useIframeState';
import { VerticalDivider } from '../../../../packages/ui/components/divider/Divider';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "default-class",
      label: "Class Name",
    },
  });

  return (
    <VerticalDivider
      className={state.className.value}
    />
  );
}