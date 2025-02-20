import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/platform/atoms/event-types/wrappers/EventRecurringWebWrapper';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    eventType: {
      type: 'dropdown',
      value: 'oneTime',
      options: ['oneTime', 'recurring'],
      label: 'Event Type',
    },
    customClassNames: {
      type: 'string',
      value: '{}',
      label: 'Custom Class Names',
    },
  });

  const eventType = {
    recurringEvent: null,
    metadata: {},
    id: 1,
    title: 'Sample Event',
    slug: 'sample-event',
    description: 'This is a sample event',
    length: 60,
    hidden: false,
    locations: [{ type: 'inPerson', address: '123 Main St' }],
    eventName: 'Sample Event',
    timeZone: 'UTC',
    periodType: 'UNLIMITED',
    periodStartDate: null,
    periodEndDate: null,
    periodDays: null,
    periodCountCalendarDays: null,
    requiresConfirmation: false,
    disableGuests: false,
    hideCalendarNotes: false,
    minimumBookingNotice: 0,
    beforeEventBuffer: 0,
    afterEventBuffer: 0,
    seatsPerTimeSlot: null,
    seatsShowAttendees: null,
    seatsShowAvailabilityCount: null,
    schedulingType: null,
    schedule: null,
    price: 0,
    currency: 'USD',
    slotInterval: null,
    successRedirectUrl: null,
    users: [],
    hosts: [],
    owner: null,
    workflows: [],
    team: null,
    hashedLink: null,
    bookingFields: [],
    offsetStart: 0,
    position: 0,
  };

  return (
    <ImportedComponent
      eventType={eventType}
      customClassNames={JSON.parse(state.customClassNames.value)}
    />
  );
}