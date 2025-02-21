import React from 'react';
import { useParentState } from '../useIframeState';
import { 
  HoverCard,
  HoverCardContent, 
  HoverCardPortal,
  HoverCardTrigger 
} from '../../../../packages/ui/components/hover-card/index';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "custom-class",
      label: "Class Name",
    },
    align: {
      type: "dropdown",
      value: "center",
      options: ["start", "center", "end"],
      label: "Alignment",
    },
    sideOffset: {
      type: "number",
      value: 4,
      label: "Side Offset",
    },
  });

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <button>Hover me</button>
      </HoverCardTrigger>

      <HoverCardPortal>
        <HoverCardContent
          className={state.className.value}
          align={state.align.value}
          sideOffset={state.sideOffset.value}
        >
          <div>Hover Card Content</div>
        </HoverCardContent>
      </HoverCardPortal>
    </HoverCard>
  );
}