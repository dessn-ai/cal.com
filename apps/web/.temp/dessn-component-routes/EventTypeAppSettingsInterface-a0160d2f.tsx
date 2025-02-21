import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/qr_code/components/EventTypeAppSettingsInterface';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    eventTypeId: {
      type: "number",
      value: 1,
      label: "Event Type ID"
    },
    eventTypeTitle: {
      type: "string",
      value: "Sample Event",
      label: "Event Type Title"
    },
    eventTypeDescription: {
      type: "string",
      value: "This is a sample event description",
      label: "Event Type Description"
    },
    eventTypeTeamId: {
      type: "number",
      value: 1,
      label: "Event Type Team ID"
    },
    eventTypeLength: {
      type: "number",
      value: 60,
      label: "Event Type Length (minutes)"
    },
    eventTypeURL: {
      type: "string",
      value: "https://example.com/event",
      label: "Event Type URL"
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled"
    },
    slug: {
      type: "string",
      value: "sample-event",
      label: "Slug"
    }
  });

  const eventType = {
    id: state.eventTypeId.value,
    title: state.eventTypeTitle.value,
    description: state.eventTypeDescription.value,
    teamId: state.eventTypeTeamId.value,
    length: state.eventTypeLength.value,
    recurringEvent: null,
    seatsPerTimeSlot: null,
    team: null,
    URL: state.eventTypeURL.value
  };

  const getAppData = () => ({});
  const setAppData = () => {};

  return (
    <ImportedComponent
      eventType={eventType}
      getAppData={getAppData}
      setAppData={setAppData}
      disabled={state.disabled.value}
      slug={state.slug.value}
    />
  );
}