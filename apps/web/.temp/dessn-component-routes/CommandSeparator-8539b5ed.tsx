import React from 'react';
import { useParentState } from '../useIframeState';
import { Command as CommandPrimitive } from 'cmdk';
import cn from '../../../../packages/lib/classNames';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "",
      label: "Class Name",
    },
  });

  return (
    <div style={{ padding: '20px', background: '#f0f0f0' }}>
      <CommandPrimitive>
        <CommandPrimitive.Separator
          className={cn(
            "bg-subtle -mx-1 mb-2 h-px",
            state.className.value
          )}
        />
      </CommandPrimitive>
    </div>
  );
}