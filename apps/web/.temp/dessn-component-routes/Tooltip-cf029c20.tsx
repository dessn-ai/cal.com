import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/ui/components/tooltip/Tooltip';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    children: {
      type: "string",
      value: "Hover me",
      label: "Children",
    },
    content: {
      type: "string",
      value: "Tooltip content",
      label: "Content",
    },
    delayDuration: {
      type: "number",
      value: 50,
      label: "Delay Duration",
    },
    side: {
      type: "dropdown",
      value: "top",
      options: ["top", "right", "bottom", "left"],
      label: "Side",
    },
    open: {
      type: "boolean",
      value: false,
      label: "Open",
    },
    defaultOpen: {
      type: "boolean",
      value: false,
      label: "Default Open",
    },
  });

  return (
    <ImportedComponent
      content={state.content.value}
      delayDuration={state.delayDuration.value}
      side={state.side.value as "top" | "right" | "bottom" | "left"}
      open={state.open.value}
      defaultOpen={state.defaultOpen.value}
      onOpenChange={(open) => setState("open", open)}>
      {state.children.value}
    </ImportedComponent>
  );
}