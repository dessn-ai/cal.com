import React from 'react';
import { useParentState } from '../useIframeState';
import { FormProvider, useForm } from 'react-hook-form';

// Import the mock directly
const SchedulingType = {
  ROUND_ROBIN: "ROUND_ROBIN",
  COLLECTIVE: "COLLECTIVE",
  MANAGED: "MANAGED"
} as const;

// Mock the ImportedComponent to avoid Prisma dependency
const MockEventTypeConferencingAppSettings = ({ eventType, slug }: any) => {
  return (
    <div>
      <h3>Event Type Conferencing App Settings</h3>
      <p>Event Type: {eventType.title}</p>
      <p>Slug: {slug}</p>
      <p>Scheduling Type: {eventType.schedulingType}</p>
    </div>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    eventTypeId: {
      type: "number",
      value: 1,
      label: "Event Type ID",
    },
    eventTypeTitle: {
      type: "string",
      value: "Sample Event",
      label: "Event Type Title",
    },
    eventTypeDescription: {
      type: "string",
      value: "This is a sample event description",
      label: "Event Type Description",
    },
    eventTypeTeamId: {
      type: "number",
      value: null,
      label: "Event Type Team ID",
    },
    eventTypeLength: {
      type: "number",
      value: 60,
      label: "Event Type Length (minutes)",
    },
    eventTypeSlug: {
      type: "string",
      value: "sample-event",
      label: "Event Type Slug",
    },
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
    URL: `https://example.com/${state.eventTypeSlug.value}`,
    schedulingType: SchedulingType.MANAGED,
    metadata: {},
    slug: state.eventTypeSlug.value,
    requiresConfirmation: false,
    position: 0,
    destinationCalendar: null,
    locations: [],
  };

  const formMethods = useForm<any>({
    defaultValues: {
      locations: [],
    },
  });

  return (
    <FormProvider {...formMethods}>
      <MockEventTypeConferencingAppSettings 
        eventType={eventType} 
        slug={state.eventTypeSlug.value}
      />
    </FormProvider>
  );
}