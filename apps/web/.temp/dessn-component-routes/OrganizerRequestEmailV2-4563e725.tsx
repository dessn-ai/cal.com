import React from 'react';
import { useParentState } from '../useIframeState';
import { OrganizerRequestEmailV2 } from '../../../../packages/emails/src/templates/OrganizerRequestEmailV2';

const createTranslateFunction = () => (key: string) => key;

export default function ComponentPreview() {
  const [state] = useParentState({
    calEvent: {
      type: 'object',
      value: {
        type: 'default',
        title: 'Meeting with John Doe',
        startTime: new Date().toISOString(),
        endTime: new Date(Date.now() + 3600000).toISOString(),
        organizer: {
          name: 'Jane Smith',
          email: 'jane@example.com',
          timeZone: 'America/New_York',
          timeFormat: '12h',
          language: {
            locale: 'en'
          },
          id: 123
        },
        attendees: [
          {
            name: 'John Doe',
            email: 'john@example.com',
            timeZone: 'America/Los_Angeles',
            language: {
              locale: 'en'
            }
          }
        ],
        uid: '123456',
        oneTimePassword: 'abc123',
        recurringEvent: null
      },
      label: 'Calendar Event'
    },
    attendee: {
      type: 'object',
      value: {
        name: 'John Doe',
        email: 'john@example.com',
        timeZone: 'America/Los_Angeles',
        language: {
          locale: 'en'
        }
      },
      label: 'Attendee'
    },
    newSeat: {
      type: 'boolean',
      value: false,
      label: 'New Seat'
    },
    attendeeCancelled: {
      type: 'boolean',
      value: false,
      label: 'Attendee Cancelled'
    },
    timeZone: {
      type: 'string',
      value: 'America/New_York',
      label: 'Time Zone'
    },
    includeAppsStatus: {
      type: 'boolean',
      value: false,
      label: 'Include Apps Status'
    },
    timeFormat: {
      type: 'dropdown',
      value: '12h',
      options: ['12h', '24h'],
      label: 'Time Format'
    },
    isOrganizer: {
      type: 'boolean',
      value: true,
      label: 'Is Organizer'
    }
  });

  const translate = React.useMemo(() => createTranslateFunction(), []);

  const calEventWithTranslate = React.useMemo(() => ({
    ...state.calEvent.value,
    organizer: {
      ...state.calEvent.value.organizer,
      language: {
        ...state.calEvent.value.organizer.language,
        translate
      }
    },
    attendees: state.calEvent.value.attendees.map(attendee => ({
      ...attendee,
      language: {
        ...attendee.language,
        translate
      }
    }))
  }), [state.calEvent.value, translate]);

  const attendeeWithTranslate = React.useMemo(() => ({
    ...state.attendee.value,
    language: {
      ...state.attendee.value.language,
      translate
    }
  }), [state.attendee.value, translate]);

  return (
    <OrganizerRequestEmailV2
      calEvent={calEventWithTranslate}
      attendee={attendeeWithTranslate}
      newSeat={state.newSeat.value}
      attendeeCancelled={state.attendeeCancelled.value}
      timeZone={state.timeZone.value}
      includeAppsStatus={state.includeAppsStatus.value}
      timeFormat={state.timeFormat.value}
      isOrganizer={state.isOrganizer.value}
    />
  );
}