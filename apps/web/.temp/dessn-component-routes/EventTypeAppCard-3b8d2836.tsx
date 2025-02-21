import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/basecamp3/components/EventTypeAppCardInterface';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    eventType: {
      type: "object",
      value: {
        id: 1,
        title: "Sample Event",
        description: "This is a sample event description",
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
        name: "Basecamp 3",
        slug: "basecamp3",
        logo: "https://example.com/basecamp3-logo.png",
        categories: ["calendar"],
        category: "calendar",
        description: "Basecamp 3 Integration",
        isInstalled: true,
        enabled: true,
        variant: "other",
        type: "basecamp3_other_calendar",
        title: "Basecamp 3",
        imageSrc: "https://example.com/basecamp3-logo.png",
        dirName: "basecamp3",
        price: 0,
        email: "support@basecamp.com",
        isGlobal: false,
        trending: false,
        rating: 0,
        reviews: 0,
        verified: true,
        badge: "",
        isSetupAlready: true,
        credentialOwner: {
          name: "John Doe",
          avatar: "https://example.com/avatar.png",
          credentialId: 1
        },
        userCredentialIds: [1, 2, 3],
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