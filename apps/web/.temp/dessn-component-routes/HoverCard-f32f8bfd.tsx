import React from 'react';
import { useParentState } from '../useIframeState';
import {
  HoverCard,
  HoverCardContent,
  HoverCardPortal,
  HoverCardTrigger,
} from "../../../../packages/ui/components/hover-card";

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    theme: {
      type: "dropdown",
      value: "light",
      options: ["light", "dark", "auto"],
      label: "Theme",
    },
    align: {
      type: "dropdown",
      value: "center",
      options: ["center", "start", "end"],
      label: "Align",
    },
    sideOffset: {
      type: "number",
      value: 4,
      label: "Side Offset",
    },
  });

  return (
    <HoverCard>
      <HoverCardTrigger>Hover over me</HoverCardTrigger>
      <HoverCardPortal>
        <HoverCardContent
          className="p-4"
          align={state.align.value}
          sideOffset={state.sideOffset.value}
          data-theme={state.theme.value}
        >
          <p>This is the hover card content</p>
        </HoverCardContent>
      </HoverCardPortal>
    </HoverCard>
  );
}