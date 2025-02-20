import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/eventtypes/components/EventTypeDescription';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    eventType: {
      type: "object",
      value: {
        length: 30,
        description: "This is a sample event type description.",
        descriptionAsSafeHTML: "<p>This is a sample event type description.</p>",
        recurringEvent: null,
        schedulingType: "ROUND_ROBIN",
        metadata: {
          multipleDuration: [30, 60, 90],
          requiresConfirmationThreshold: true
        },
        requiresConfirmation: true,
        seatsPerTimeSlot: 5
      },
      label: "Event Type"
    },
    className: {
      type: "string",
      value: "custom-class",
      label: "Class Name"
    },
    shortenDescription: {
      type: "boolean",
      value: false,
      label: "Shorten Description"
    },
    isPublic: {
      type: "boolean",
      value: true,
      label: "Is Public"
    }
  });

  return (
    <ImportedComponent
      eventType={state.eventType.value}
      className={state.className.value}
      shortenDescription={state.shortenDescription.value}
      isPublic={state.isPublic.value}
    />
  );
}