import React from 'react';
import { useParentState } from '../useIframeState';
import { Command as CommandPrimitive } from 'cmdk';

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={`flex h-full w-full flex-col overflow-hidden rounded-md ${className}`}
    {...props}
  />
));

Command.displayName = CommandPrimitive.displayName;

const CommandInput = CommandPrimitive.Input;
const CommandList = CommandPrimitive.List;
const CommandEmpty = CommandPrimitive.Empty;
const CommandGroup = CommandPrimitive.Group;
const CommandItem = CommandPrimitive.Item;
const CommandSeparator = CommandPrimitive.Separator;

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "custom-command-class",
      label: "Class Name",
    },
  });

  return (
    <Command className={state.className.value}>
      <div className="flex items-center border-b px-3 py-2">
        <CommandInput placeholder="Type a command or search..." className="w-full bg-transparent outline-none" />
      </div>
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>Calendar</CommandItem>
          <CommandItem>Search Emoji</CommandItem>
          <CommandItem>Calculator</CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>Profile</CommandItem>
          <CommandItem>Billing</CommandItem>
          <CommandItem>Settings</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}