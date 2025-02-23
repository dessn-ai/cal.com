import React from 'react';
import { useParentState } from '../useIframeState';
import { Dialog, DialogContent } from '../../../../packages/ui/components/dialog/Dialog';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    title: {
      type: "string",
      value: "Dialog Title",
      label: "Title",
    },
    description: {
      type: "string",
      value: "This is a description for the dialog.",
      label: "Description",
    },
    type: {
      type: "dropdown",
      value: "creation",
      options: ["creation", "confirmation"],
      label: "Dialog Type",
    },
    size: {
      type: "dropdown",
      value: "default",
      options: ["xl", "lg", "md", "default"],
      label: "Size",
    },
    enableOverflow: {
      type: "boolean",
      value: false,
      label: "Enable Overflow",
    },
    preventCloseOnOutsideClick: {
      type: "boolean",
      value: false,
      label: "Prevent Close on Outside Click",
    },
  });

  return (
    <Dialog open={true}>
      <DialogContent
        title={state.title.value}
        description={state.description.value}
        type={state.type.value as "creation" | "confirmation"}
        size={state.size.value as "xl" | "lg" | "md" | "default"}
        enableOverflow={state.enableOverflow.value}
        preventCloseOnOutsideClick={state.preventCloseOnOutsideClick.value}
      >
        <div>Dialog Content Goes Here</div>
      </DialogContent>
    </Dialog>
  );
}