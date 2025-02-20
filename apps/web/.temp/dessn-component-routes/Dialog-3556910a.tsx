import React from 'react';
import { useParentState } from '../useIframeState';
import { Dialog } from '../../../../packages/platform/atoms/src/components/ui/dialog';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "custom-dialog",
      label: "Class Name",
    },
    isOpen: {
      type: "boolean",
      value: true,
      label: "Is Open",
    },
  });

  return (
    <Dialog open={state.isOpen.value}>
      <Dialog.Content className={state.className.value}>
        <Dialog.Header>
          <Dialog.Title>Example Dialog</Dialog.Title>
          <Dialog.Description>This is a sample dialog content.</Dialog.Description>
        </Dialog.Header>
        <div>
          <p>Here's some additional content for the dialog.</p>
        </div>
        <Dialog.Footer>
          <button onClick={() => setState('isOpen', false)}>Close Dialog</button>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog>
  );
}