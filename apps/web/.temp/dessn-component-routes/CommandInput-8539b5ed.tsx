import React from 'react';
import { useParentState } from '../useIframeState';
import { CommandInput } from '../../../../packages/ui/components/command/index';
import { Command as CommandPrimitive } from 'cmdk';

// Create a simplified mock of the Command component
const SimplifiedCommand = ({ children }) => {
  return (
    <div className="bg-popover text-default flex h-full w-full flex-col overflow-hidden rounded-md">
      {children}
    </div>
  );
};

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

  // Wrap in try-catch to handle any potential cmdk initialization errors
  try {
    return (
      <SimplifiedCommand>
        <div className="flex items-center border-b px-3 py-2">
          <input
            className={`placeholder:text-muted hover:border-emphasis dark:focus:border-emphasis border-default bg-default placeholder:text-muted text-emphasis disabled:hover:border-default disabled:bg-subtle focus:ring-brand-default focus:border-subtle block flex h-[28px] w-full rounded-md rounded-md border bg-transparent px-3 py-1.5 text-sm text-sm leading-4 outline-none focus:outline-none focus:ring-2 disabled:cursor-not-allowed disabled:cursor-not-allowed disabled:opacity-50 ${state.className.value}`}
            placeholder={state.placeholder.value}
            disabled={state.disabled.value}
            type="text"
          />
        </div>
      </SimplifiedCommand>
    );
  } catch (error) {
    console.error('Command component error:', error);
    // Fallback render
    return (
      <div className="flex items-center border-b px-3 py-2">
        <input
          className={`placeholder:text-muted hover:border-emphasis dark:focus:border-emphasis border-default bg-default placeholder:text-muted text-emphasis disabled:hover:border-default disabled:bg-subtle focus:ring-brand-default focus:border-subtle block flex h-[28px] w-full rounded-md rounded-md border bg-transparent px-3 py-1.5 text-sm text-sm leading-4 outline-none focus:outline-none focus:ring-2 disabled:cursor-not-allowed disabled:cursor-not-allowed disabled:opacity-50 ${state.className.value}`}
          placeholder={state.placeholder.value}
          disabled={state.disabled.value}
          type="text"
        />
      </div>
    );
  }
}