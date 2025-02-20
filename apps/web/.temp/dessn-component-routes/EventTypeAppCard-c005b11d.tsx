import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/twipla/components/EventTypeAppCardInterface';

import { AppContextProvider } from '@calcom/app-store/EventTypeAppContext';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    eventType: {
      type: "object",
      value: {
        id: 1,
        title: "Sample Event Type",
        description: "This is a sample event type",
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
        name: "Twipla",
        description: "Twipla integration",
        installed: true,
        variant: "other",
        categories: ["other"],
        logo: "",
        publisher: "Cal.com",
        url: "https://cal.com/apps/twipla",
        verified: true,
        rating: 0,
        reviews: 0,
        slug: "twipla",
        type: "twipla_other",
        title: "Twipla",
        imageSrc: "",
        dirName: "twipla"
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
    <AppContextProvider>
      <ImportedComponent 
        eventType={state.eventType.value}
        app={state.app.value}
        disabled={state.disabled.value}
      />
    </AppContextProvider>
  );
}