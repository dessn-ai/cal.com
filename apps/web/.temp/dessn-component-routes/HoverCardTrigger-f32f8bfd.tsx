import React from 'react';
import { useParentState } from '../useIframeState';
import { HoverCardTrigger } from '../../../../packages/ui/components/hover-card/index';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    children: {
      type: "string",
      value: "Hover over me",
      label: "Trigger Text",
    },
    className: {
      type: "string",
      value: "cursor-pointer",
      label: "CSS Class",
    },
  });

  return (
    <HoverCardTrigger className={state.className.value}>
      {state.children.value}
    </HoverCardTrigger>
  );
}