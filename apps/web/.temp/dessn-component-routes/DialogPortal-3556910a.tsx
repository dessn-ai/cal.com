import React from 'react';
import { useParentState } from '../useIframeState';
import * as Dialog from '@radix-ui/react-dialog';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    children: {
      type: "string",
      value: "Dialog Content",
      label: "Children",
    },
    className: {
      type: "string",
      value: "",
      label: "Class Name",
    },
  });

  return (
    <Dialog.Root open={true}>
      <Dialog.Portal>
        <Dialog.Content>
          {state.children.value}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}