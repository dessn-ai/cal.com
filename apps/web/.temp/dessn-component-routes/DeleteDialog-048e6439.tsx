import React from 'react';
import { useParentState } from '../useIframeState';
import { DeleteDialog } from '../../../../packages/features/eventtypes/components/dialogs/DeleteDialog';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isManagedEvent: {
      type: "string",
      value: "Team",
      label: "Is Managed Event",
    },
    eventTypeId: {
      type: "number",
      value: 1,
      label: "Event Type ID",
    },
    open: {
      type: "boolean",
      value: true,
      label: "Open",
    },
    isDeleting: {
      type: "boolean",
      value: false,
      label: "Is Deleting",
    },
  });

  const handleDelete = (id: number) => {
    console.log(`Deleting event type with id: ${id}`);
  };

  const handleOpenChange = (newOpen: boolean) => {
    setState('open', newOpen);
  };

  return (
    <DeleteDialog
      isManagedEvent={state.isManagedEvent.value}
      eventTypeId={state.eventTypeId.value}
      open={state.open.value}
      onOpenChange={handleOpenChange}
      onDelete={handleDelete}
      isDeleting={state.isDeleting.value}
    />
  );
}