import React from 'react';
import { useParentState } from '../useIframeState';
import { HoverCard } from '../../../../packages/ui/components/hover-card/index';


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
      <HoverCard.Trigger>Hover over me</HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content
          className="p-4"
          align={state.align.value}
          sideOffset={state.sideOffset.value}
          data-theme={state.theme.value}
        >
          <p>This is the hover card content</p>
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard>
  );
}