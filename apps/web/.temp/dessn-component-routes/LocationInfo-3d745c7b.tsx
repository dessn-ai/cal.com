import React from 'react';
import { useParentState } from '../useIframeState';
import { LocationInfo } from '../../../../packages/emails/src/components/LocationInfo';

// Mock the calendar event type
type CalendarEvent = {
  type: string;
  title: string;
  startTime: string;
  endTime: string;
  organizer: {
    name: string;
    email: string;
    timeZone: string;
    language: {
      translate: (key: string) => string;
      locale: string;
    };
  };
  attendees: any[];
  location: string;
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    calEvent: {
      type: 'string',
      value: JSON.stringify({
        type: 'default',
        title: 'Meeting with John Doe',
        startTime: '2023-06-15T10:00:00',
        endTime: '2023-06-15T11:00:00',
        organizer: {
          name: 'Jane Smith',
          email: 'jane@example.com',
          timeZone: 'America/New_York',
          language: {
            translate: (key: string) => key,
            locale: 'en',
          },
        },
        attendees: [],
        location: 'https://zoom.us/j/123456789',
      }),
      label: 'Calendar Event',
    },
  });

  const mockT = (key: string) => key;

  return (
    <LocationInfo
      calEvent={JSON.parse(state.calEvent.value) as CalendarEvent}
      t={mockT}
    />
  );
}