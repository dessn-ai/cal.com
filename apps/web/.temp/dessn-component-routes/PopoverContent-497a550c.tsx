import React from 'react';
import { useParentState } from '../useIframeState';
import * as PopoverPrimitive from '@radix-ui/react-popover';

export default function ComponentPreview() {
  const [open, setOpen] = React.useState(true); // Keep it open by default for preview
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
    <PopoverPrimitive.Root open={open} onOpenChange={setOpen}>
      <PopoverPrimitive.Trigger asChild>
        <button type="button">Click to toggle</button>
      </PopoverPrimitive.Trigger>
      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
          align={state.align.value as "start" | "center" | "end"}
          sideOffset={state.sideOffset.value}
          className={`bg-white z-50 w-72 rounded-md border p-4 outline-none ${state.className.value}`}
        >
          This is the content of the popover
          <PopoverPrimitive.Arrow className="fill-current text-white" />
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Portal>
    </PopoverPrimitive.Root>
  );
}