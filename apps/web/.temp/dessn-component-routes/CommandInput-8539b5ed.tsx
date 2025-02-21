import React from 'react';
import { useParentState } from '../useIframeState';
import { Command as CommandPrimitive } from 'cmdk';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "",
      label: "Class Name",
    },
    placeholder: {
      type: "string",
      value: "Type a command or search...",
      label: "Placeholder",
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled",
    },
  });

  return (
    <div className="relative">
      <CommandPrimitive>
        <div className="flex items-center border-b px-3 py-2">
          <CommandPrimitive.Input
            className={`placeholder:text-muted hover:border-emphasis dark:focus:border-emphasis border-default bg-default placeholder:text-muted text-emphasis disabled:hover:border-default disabled:bg-subtle focus:ring-brand-default focus:border-subtle block flex h-[28px] w-full rounded-md border bg-transparent px-3 py-1.5 text-sm leading-4 outline-none focus:outline-none focus:ring-2 disabled:cursor-not-allowed disabled:opacity-50 ${state.className.value}`}
            placeholder={state.placeholder.value}
            disabled={state.disabled.value}
          />
        </div>
      </CommandPrimitive>
    </div>
  );
}