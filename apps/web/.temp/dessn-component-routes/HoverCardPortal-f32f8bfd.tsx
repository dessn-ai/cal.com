import React from 'react';
import { useParentState } from '../useIframeState';
import { HoverCardPortal } from '../../../../packages/ui/components/hover-card/index';


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
    <HoverCardPortal
      className={state.className.value}
      align={state.align.value}
      sideOffset={state.sideOffset.value}
    >
      {/* HoverCardPortal doesn't accept children directly, so we're just rendering it */}
      <div>Hover Card Content</div>
    </HoverCardPortal>
  );
}