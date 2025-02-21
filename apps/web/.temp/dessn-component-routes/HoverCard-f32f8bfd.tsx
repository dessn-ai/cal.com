import React from 'react';
import { useParentState } from '../useIframeState';
import { HoverCard, HoverCardContent, HoverCardTrigger, HoverCardPortal } from '../../../../packages/ui/components/hover-card';
import { classNames } from "@calcom/lib";

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
    <div className="flex items-center justify-center h-32">
      <HoverCard>
        <HoverCardTrigger asChild>
          <button className="px-4 py-2 rounded-md border border-gray-300">
            Hover over me
          </button>
        </HoverCardTrigger>
        <HoverCardPortal>
          <HoverCardContent
            align={state.align.value}
            sideOffset={state.sideOffset.value}
          >
            <div className="space-y-2">
              <p>This is the hover card content</p>
            </div>
          </HoverCardContent>
        </HoverCardPortal>
      </HoverCard>
    </div>
  );
}