import React from 'react';
import { useParentState } from '../useIframeState';
import * as Popover from '@radix-ui/react-popover';

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
    <Popover.Root open={state.open.value}>
      <Popover.Trigger>Click me</Popover.Trigger>
      <Popover.Portal>
        <Popover.Content 
          align={state.align.value as "start" | "center" | "end"} 
          sideOffset={state.sideOffset.value}
        >
          <p>Popover content</p>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}