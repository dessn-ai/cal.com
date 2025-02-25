import React from 'react';
import { useParentState } from '../useIframeState';
import * as PopoverPrimitive from '@radix-ui/react-popover';

interface Action {
  id: string;
  label: string;
  icon: string;
  onClick: () => void;
}

const DropdownActions = ({ 
  actions,
  actionTrigger 
}: { 
  actions: Action[];
  actionTrigger: React.ReactNode;
}) => {
  return (
    <PopoverPrimitive.Root>
      <PopoverPrimitive.Trigger asChild>
        {actionTrigger}
      </PopoverPrimitive.Trigger>
      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
          align="end"
          sideOffset={5}
          className="bg-white rounded-md shadow-lg p-2 min-w-[180px]"
        >
          {actions.map((action) => (
            <button
              key={action.id}
              onClick={action.onClick}
              className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100 rounded-md flex items-center gap-2"
            >
              {action.icon === 'edit' && '✏️'}
              {action.icon === 'trash' && '🗑️'}
              {action.label}
            </button>
          ))}
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Portal>
    </PopoverPrimitive.Root>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    actions: {
      type: "string",
      value: JSON.stringify([
        {
          id: "action1",
          label: "Action 1",
          icon: "edit",
          onClick: () => console.log("Action 1 clicked")
        },
        {
          id: "action2",
          label: "Action 2",
          icon: "trash",
          onClick: () => console.log("Action 2 clicked")
        }
      ]),
      label: "Actions"
    },
    actionTrigger: {
      type: "string",
      value: "<button>Custom Trigger</button>",
      label: "Action Trigger"
    }
  });

  const actions = JSON.parse(state.actions.value);
  const actionTrigger = <div dangerouslySetInnerHTML={{ __html: state.actionTrigger.value }} />;

  return (
    <DropdownActions
      actions={actions}
      actionTrigger={actionTrigger}
    />
  );
}