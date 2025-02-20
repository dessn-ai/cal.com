import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/zohocrm/components/EventTypeAppCardInterface';


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
        name: "Zoho CRM",
        description: "Zoho CRM integration",
        installed: true,
        type: "zoho_crm",
        variant: "other",
        key: "zoho-crm",
        dirName: "zohocrm",
        logo: "icon.svg",
        publisher: "Cal.com",
        url: "https://cal.com/apps/zoho-crm",
        verified: true,
        rating: 4.7,
        reviews: 23,
        category: "crm",
        slug: "zoho-crm",
        trending: true,
        email: "help@cal.com"
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