import React from 'react';
import { useParentState } from '../useIframeState';
import { AnimatedPopover } from '../../../../packages/ui/components/popover/AnimatedPopover';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    text: {
      type: "string",
      value: "Options",
      label: "Text",
    },
    count: {
      type: "number",
      value: 3,
      label: "Count",
    },
    defaultOpen: {
      type: "boolean",
      value: false,
      label: "Default Open",
    },
    prefix: {
      type: "string",
      value: "@",
      label: "Prefix",
    },
  });

  return (
    <AnimatedPopover
      text={state.text.value}
      count={state.count.value}
      defaultOpen={state.defaultOpen.value}
      prefix={state.prefix.value}
    >
      <div className="p-2">
        <p>Popover Content</p>
      </div>
    </AnimatedPopover>
  );
}