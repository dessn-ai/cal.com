import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useParentState } from '../useIframeState';
import { EventInstantTab } from '../../../../packages/features/eventtypes/components/tabs/instant/EventInstantTab';

export default function ComponentPreview() {
  const methods = useForm({
    defaultValues: {
      instant: false,
      requiresConfirmation: true,
      isInstantEvent: false,
      instantMeetingSchedule: null,
      instantMeetingParameters: [],
      instantMeetingExpiryTimeOffsetInSeconds: 300,
      webhooks: [],
    }
  });

  const [state, setState] = useParentState({
    eventType: {
      type: "string",
      value: JSON.stringify({
        id: 1,
        title: "Sample Event",
        slug: "sample-event",
        length: 30,
        hidden: false,
        requiresConfirmation: false,
        isInstantEvent: false,
        instantMeetingSchedule: null,
        instantMeetingParameters: [],
        instantMeetingExpiryTimeOffsetInSeconds: 300,
        description: null,
        position: 0,
        price: 0,
        currency: "usd",
        metadata: {},
        webhooks: [],
        locations: [],
        customInputs: [],
        schedule: null,
        periodType: "UNLIMITED",
        periodStartDate: null,
        periodEndDate: null,
        periodDays: null,
        periodCountCalendarDays: null,
        minimumBookingNotice: 120,
        beforeEventBuffer: 0,
        afterEventBuffer: 0,
        seatsPerTimeSlot: null,
        seatsShowAttendees: null,
        seatsShowAvailableSeatsCount: null,
        schedulingType: null,
        schedule: null,
        timeZone: null,
        availability: [],
        successRedirectUrl: null,
      }),
      label: "Event Type",
    },
    isTeamEvent: {
      type: "boolean",
      value: true, // Set to true to enable instant meeting features
      label: "Is Team Event",
    },
  });

  const eventType = JSON.parse(state.eventType.value);

  return (
    <FormProvider {...methods}>
      <EventInstantTab
        eventType={eventType}
        isTeamEvent={state.isTeamEvent.value}
      />
    </FormProvider>
  );
}