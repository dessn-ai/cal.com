import React from 'react';
import { useParentState } from '../useIframeState';
import { Popover, PopoverContent, PopoverTrigger } from '../../../../packages/ui/components/popover/Popover';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
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
    className: {
      type: "string",
      value: "",
      label: "Additional Class Names",
    },
  });

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button>Click to open popover</button>
      </PopoverTrigger>
      <PopoverContent
        align={state.align.value as "start" | "center" | "end"}
        sideOffset={state.sideOffset.value}
        className={state.className.value}
      >
        This is the content of the popover
      </PopoverContent>
    </Popover>
  );
}