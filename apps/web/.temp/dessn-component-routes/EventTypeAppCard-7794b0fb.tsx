import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/templates/event-type-app-card/components/EventTypeAppCardInterface';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    eventType: {
      type: "object",
      value: {
        id: 1,
        title: "Sample Event",
        description: "This is a sample event",
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
        name: "Sample App",
        slug: "sample-app",
        logo: "https://example.com/logo.png",
        categories: ["calendar"],
        rating: 4.5,
        reviews: 100,
        isGlobal: false,
        trending: false,
        verified: true,
        email: "support@sampleapp.com",
        dirName: "sample-app",
        appData: {},
        description: "This is a sample app description",
        installed: true
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