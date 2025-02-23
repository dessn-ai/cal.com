import React from 'react';
import { useParentState } from '../useIframeState';
import * as HoverCard from '@radix-ui/react-hover-card';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    children: {
      type: "string",
      value: "Hover over me",
      label: "Trigger Text",
    },
    className: {
      type: "string",
      value: "cursor-pointer",
      label: "CSS Class",
    },
  });

  return (
    <HoverCard.Root>
      <HoverCard.Trigger asChild className={state.className.value}>
        <span>{state.children.value}</span>
      </HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content>
          <div>Hover card content</div>
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
}