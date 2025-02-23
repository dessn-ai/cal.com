import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/platform/atoms/event-types/wrappers/EventRecurringWebWrapper';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    eventType: {
      type: 'dropdown',
      value: 'ONE_ON_ONE',
      options: ['ONE_ON_ONE', 'GROUP', 'COLLECTIVE'],
      label: 'Event Type',
    },
    customClassNames: {
      type: 'string',
      value: '{}',
      label: 'Custom Class Names',
    },
  });

  const eventType = {
    id: 1,
    slug: 'test-event',
    title: 'Test Event',
    length: 60,
    recurringEvent: {
      freq: 1,
      interval: "weekly",
      count: 12,
      until: null
    },
    type: state.eventType.value,
    description: '',
    hidden: false,
    userId: 1,
    users: [],
    teamId: null,
    hashedLink: null,
    locations: [],
    price: 0,
    currency: 'USD',
    schedulingType: null,
    seatsPerTimeSlot: null,
    metadata: {},
    workflows: [],
    periodType: 'UNLIMITED',
    periodStartDate: null,
    periodEndDate: null,
    periodDays: null,
    periodCountCalendarDays: null,
    requiresConfirmation: false,
    minimumBookingNotice: 0
  };

  const customClassNames = JSON.parse(state.customClassNames.value);

  try {
    return (
      <ImportedComponent
        eventType={eventType}
        customClassNames={customClassNames}
      />
    );
  } catch (error) {
    console.error('Error rendering EventRecurringWebWrapper:', error);
    return <div>Error: Failed to render EventRecurringWebWrapper</div>;
  }
}