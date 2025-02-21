import React from 'react';
import { useParentState } from '../useIframeState';
import { Dialog, DialogContent, DialogClose } from '../../../../packages/ui/components/dialog/Dialog';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    children: {
      type: "string",
      value: "Close",
      label: "Button Text",
    },
    color: {
      type: "dropdown",
      value: "minimal",
      options: ["minimal", "primary", "secondary", "destructive"],
      label: "Button Color",
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled",
    },
    "data-testid": {
      type: "string",
      value: "dialog-close-button",
      label: "Data Test ID",
    },
  });

  return (
    <Dialog open={true}>
      <DialogContent>
        <DialogClose
          children={state.children.value}
          color={state.color.value as "minimal" | "primary" | "secondary" | "destructive"}
          disabled={state.disabled.value}
          data-testid={state["data-testid"].value}
          onClick={() => console.log("DialogClose clicked")}
        />
      </DialogContent>
    </Dialog>
  );
}