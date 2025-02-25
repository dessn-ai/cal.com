import React from 'react';
import { useParentState } from '../useIframeState';
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { classNames } from "@calcom/lib";

const Popover = PopoverPrimitive.Root;
const PopoverTrigger = PopoverPrimitive.Trigger;
const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={classNames(
        "bg-default text-emphasis z-50 w-72 rounded-md border p-4 outline-none",
        className
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
));

PopoverContent.displayName = PopoverPrimitive.Content.displayName;

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