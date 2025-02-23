import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/zoho-bigin/components/EventTypeAppCardInterface';

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
        URL: "https://example.com/event-type"
      },
      label: "Event Type"
    },
    app: {
      type: "object",
      value: {
        name: "Zoho Bigin",
        description: "Zoho Bigin integration",
        installed: true,
        type: "zoho_bigin_other_calendar",
        variant: "other_calendar",
        key: "zoho-bigin",
        dirName: "zoho-bigin",
        logo: "icon.svg",
        publisher: "Cal.com",
        url: "https://www.zoho.com/bigin/",
        verified: true,
        rating: 0,
        reviews: 0,
        category: "other",
        slug: "zoho-bigin",
        trending: false,
        email: "help@cal.com",
        categories: ["calendar"],  // Added categories array
        isInstalled: true,        // Added isInstalled property
        enabled: true,            // Added enabled property
        isSetupAlready: true      // Added isSetupAlready property
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