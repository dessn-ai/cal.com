import React from 'react';
import { useParentState } from '../useIframeState';
import { Popover, PopoverTrigger, PopoverContent } from '../../../../packages/ui/components/popover/Popover';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    open: {
      type: "boolean",
      value: false,
      label: "Open",
    },
    align: {
      type: "dropdown",
      value: "center",
      options: ["start", "center", "end"],
      label: "Align",
    },
    sideOffset: {
      type: "number",
      value: 4,
      label: "Side Offset",
    },
  });

  return (
    <Popover open={state.open.value}>
      <PopoverTrigger>Click me</PopoverTrigger>
      <PopoverContent align={state.align.value as "start" | "center" | "end"} sideOffset={state.sideOffset.value}>
        <p>Popover content</p>
      </PopoverContent>
    </Popover>
  );
}