import React from 'react';
import { useParentState } from '../useIframeState';
import { ManageLink } from '../../../../packages/emails/src/components/ManageLink';

// Define necessary types inline
export enum TimeFormat {
  TWELVE_HOUR = '12h',
  TWENTY_FOUR_HOUR = '24h',
}

interface Language {
  translate: (key: string) => string;
  locale: string;
}

interface Person {
  name: string;
  email: string;
  timeZone: string;
  language: Language;
  timeFormat?: TimeFormat;
}

interface CalendarEvent {
  type: string;
  title: string;
  startTime: string;
  endTime: string;
  organizer: Person;
  attendees: Person[];
  uid: string;
  recurringEvent: null | any;
  team?: {
    members: { email: string }[];
  };
  platformClientId?: string;
}

export default function ComponentPreview() {
  // Create a translation function
  const translate = (key: string) => key;

  const [state, setState] = useParentState({
    calEvent: {
      type: 'string',
      value: JSON.stringify({
        type: 'default',
        title: 'Meeting with John',
        startTime: '2023-06-15T10:00:00',
        endTime: '2023-06-15T11:00:00',
        organizer: {
          name: 'Jane Doe',
          email: 'jane@example.com',
          timeZone: 'America/New_York',
          language: {
            translate,
            locale: 'en',
          },
        },
        attendees: [
          {
            name: 'John Smith',
            email: 'john@example.com',
            timeZone: 'America/Los_Angeles',
            language: {
              translate,
              locale: 'en',
            },
          },
        ],
        uid: '123456',
        recurringEvent: null,
        team: {
          members: [
            { email: 'john@example.com' }
          ]
        },
        platformClientId: 'test-platform'
      }),
      label: 'Calendar Event',
    },
    attendee: {
      type: 'string',
      value: JSON.stringify({
        name: 'John Smith',
        email: 'john@example.com',
        timeZone: 'America/Los_Angeles',
        language: {
          translate,
          locale: 'en',
        },
        timeFormat: TimeFormat.TWELVE_HOUR,
      }),
      label: 'Attendee',
    },
  });

  const calEvent: CalendarEvent = JSON.parse(state.calEvent.value);
  const attendee: Person = JSON.parse(state.attendee.value);

  return <ManageLink calEvent={calEvent} attendee={attendee} />;
}