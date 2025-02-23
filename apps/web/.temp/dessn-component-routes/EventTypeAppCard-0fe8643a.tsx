import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/posthog/components/EventTypeAppCardInterface';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    eventType: {
      type: "object",
      value: {
        id: 1,
        title: "Sample Event Type",
        description: "This is a sample event type description",
        teamId: null,
        length: 30,
        recurringEvent: null,
        seatsPerTimeSlot: null,
        team: null,
        schedulingType: "COLLECTIVE",
        URL: "https://example.com/event"
      },
      label: "Event Type"
    },
    app: {
      type: "object",
      value: {
        name: "Posthog",
        description: "Posthog integration",
        installed: true,
        variant: "other",
        categories: ["analytics"],
        logo: "https://example.com/posthog-logo.png",
        publisher: "Cal.com",
        url: "https://posthog.com",
        verified: true,
        rating: 4.5,
        reviews: 100,
        category: "analytics",
        slug: "posthog",
        type: "posthog_other_calendar",
        title: "Posthog",
        imageSrc: "https://example.com/posthog-logo.png",
        credentialOwner: {
          name: "John Doe",
          avatar: "https://example.com/avatar.png"
        },
        credentialIds: [1, 2, 3]
      },
      label: "App"
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled"
    }
  });

  return (
    <ImportedComponent
      eventType={state.eventType.value}
      app={state.app.value}
      disabled={state.disabled.value}
    />
  );
}