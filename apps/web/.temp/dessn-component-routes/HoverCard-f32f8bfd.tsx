import React from 'react';
import { useParentState } from '../useIframeState';
import { HoverCard, HoverCardTrigger, HoverCardContent, HoverCardPortal } from '../../../../packages/ui/components/hover-card';
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
    <div className="flex items-center justify-center">
      <HoverCard>
        <HoverCardTrigger asChild>
          <button className="rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow-sm hover:bg-gray-50">
            Hover over me
          </button>
        </HoverCardTrigger>
        <HoverCardPortal>
          <HoverCardContent
            align={state.align.value}
            sideOffset={state.sideOffset.value}
            className={classNames(
              "w-80 rounded-md p-4",
              "bg-white shadow-lg",
              "data-[theme=dark]:bg-gray-900"
            )}
            data-theme={state.theme.value}
          >
            <div className="space-y-2">
              <p className="text-sm text-gray-900">This is the hover card content</p>
            </div>
          </HoverCardContent>
        </HoverCardPortal>
      </HoverCard>
    </div>
  );
}