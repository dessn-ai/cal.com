import React from 'react';
import { useParentState } from '../useIframeState';
import { BulkEditDefaultForEventsModal } from '../../../../packages/features/eventtypes/components/BulkEditDefaultForEventsModal';

import { useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    open: {
      type: "boolean",
      value: true,
      label: "Open",
    },
    isPending: {
      type: "boolean",
      value: false,
      label: "Is Pending",
    },
    description: {
      type: "string",
      value: "This is a sample description for bulk editing events.",
      label: "Description",
    },
    isEventTypesFetching: {
      type: "boolean",
      value: false,
      label: "Is Event Types Fetching",
    },
  });

  const eventTypes = [
    { id: 1, title: "Event Type 1" },
    { id: 2, title: "Event Type 2" },
    { id: 3, title: "Event Type 3" },
  ];

  const setOpen = (open: boolean) => {
    setState("open", open);
  };

  const bulkUpdateFunction = (params: { eventTypeIds: number[]; callback: () => void }) => {
    console.log("Bulk update function called with params:", params);
    params.callback();
  };

  const handleBulkEditDialogToggle = () => {
    setOpen(!state.open.value);
  };

  return (
    <BulkEditDefaultForEventsModal
      open={state.open.value}
      setOpen={setOpen}
      bulkUpdateFunction={bulkUpdateFunction}
      isPending={state.isPending.value}
      description={state.description.value}
      isEventTypesFetching={state.isEventTypesFetching.value}
      eventTypes={eventTypes}
      handleBulkEditDialogToggle={handleBulkEditDialogToggle}
    />
  );
}