import React from 'react';
import { useParentState } from '../useIframeState';
import * as Dialog from '@radix-ui/react-dialog';
import { Button } from '../../../../packages/ui/components/button';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    buttonText: {
      type: "string",
      value: "Open Dialog",
      label: "Button Text",
    },
    buttonColor: {
      type: "dropdown",
      value: "primary",
      options: ["primary", "secondary", "minimal", "destructive"],
      label: "Button Color",
    },
  });

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button color={state.buttonColor.value as any}>
          {state.buttonText.value}
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6 shadow-lg">
          <div>
            <h2 className="text-xl font-bold">Dialog Content</h2>
            <p className="mt-2">This is an example dialog content.</p>
          </div>
          <Dialog.Close asChild>
            <Button className="mt-4" color="primary">Close</Button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}