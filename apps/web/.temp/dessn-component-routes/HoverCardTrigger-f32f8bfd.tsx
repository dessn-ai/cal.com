import React from 'react';
import { useParentState } from '../useIframeState';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '../../../../packages/ui/components/hover-card/index';

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
    <HoverCard>
      <HoverCardTrigger className={state.className.value}>
        {state.children.value}
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="p-4">
          Hover card content
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}