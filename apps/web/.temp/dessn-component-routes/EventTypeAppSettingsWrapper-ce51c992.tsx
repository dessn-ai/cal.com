import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../components/apps/installation/EventTypeAppSettingsWrapper';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    slug: {
      type: "string",
      value: "example-slug",
      label: "Slug",
    },
    userName: {
      type: "string",
      value: "John Doe",
      label: "User Name",
    },
    categories: {
      type: "string",
      value: "calendar,video",
      label: "Categories",
    },
    credentialId: {
      type: "number",
      value: 1,
      label: "Credential ID",
    },
    eventType: {
      type: "string",
      value: JSON.stringify({
        id: 1,
        title: "Sample Event",
        description: "This is a sample event",
        length: 30,
        URL: "https://example.com/event",
        teamId: null,
        recurringEvent: null,
        seatsPerTimeSlot: null,
        team: null,
        metadata: {},
        schedulingType: null,
        slug: "sample-event",
        requiresConfirmation: false,
        position: 0,
        destinationCalendar: null,
        selected: true,
        locations: [],
        bookingFields: [],
      }),
      label: "Event Type",
    },
  });

  const eventType = JSON.parse(state.eventType.value);

  return (
    <ImportedComponent
      slug={state.slug.value}
      userName={state.userName.value}
      categories={state.categories.value.split(',')}
      credentialId={state.credentialId.value}
      eventType={eventType}
    />
  );
}