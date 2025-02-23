import React from 'react';
import { useParentState } from '../useIframeState';
import { HoverCardContent } from '../../../../packages/ui/components/hover-card/index';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    align: {
      type: "dropdown",
      value: "center",
      options: ["start", "center", "end"],
      label: "Align"
    },
    sideOffset: {
      type: "number",
      value: 4,
      label: "Side Offset"
    },
    className: {
      type: "string",
      value: "",
      label: "Additional CSS Class"
    }
  });

  return (
    <HoverCardContent
      align={state.align.value as "start" | "center" | "end"}
      sideOffset={state.sideOffset.value}
      className={state.className.value}
    >
      This is the content of the HoverCard
    </HoverCardContent>
  );
}