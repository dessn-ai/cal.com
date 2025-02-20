import React from 'react';
import { useParentState } from '../useIframeState';
import { OrganizerRequestEmailV2 } from '../../../../packages/emails/src/templates/OrganizerRequestEmailV2';

import { TimeFormat } from '../../../../packages/emails/src/templates/OrganizerRequestEmailV2';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
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
          language: {
            translate: (key: string) => key,
            locale: 'en',
          },
        },
        attendees: [
          {
            name: 'John Doe',
            email: 'john@example.com',
            timeZone: 'America/Los_Angeles',
            language: {
              translate: (key: string) => key,
              locale: 'en',
            },
          },
        ],
        uid: '123456',
        oneTimePassword: 'abc123',
      },
      label: 'Calendar Event',
    },
    attendee: {
      type: 'object',
      value: {
        name: 'John Doe',
        email: 'john@example.com',
        timeZone: 'America/Los_Angeles',
        language: {
          translate: (key: string) => key,
          locale: 'en',
        },
      },
      label: 'Attendee',
    },
    newSeat: {
      type: 'boolean',
      value: false,
      label: 'New Seat',
    },
    attendeeCancelled: {
      type: 'boolean',
      value: false,
      label: 'Attendee Cancelled',
    },
    timeZone: {
      type: 'string',
      value: 'America/New_York',
      label: 'Time Zone',
    },
    includeAppsStatus: {
      type: 'boolean',
      value: false,
      label: 'Include Apps Status',
    },
    timeFormat: {
      type: 'dropdown',
      value: TimeFormat.TWELVE_HOUR,
      options: [TimeFormat.TWELVE_HOUR, TimeFormat.TWENTY_FOUR_HOUR],
      label: 'Time Format',
    },
    isOrganizer: {
      type: 'boolean',
      value: true,
      label: 'Is Organizer',
    },
  });

  return (
    <OrganizerRequestEmailV2
      calEvent={state.calEvent.value}
      attendee={state.attendee.value}
      newSeat={state.newSeat.value}
      attendeeCancelled={state.attendeeCancelled.value}
      timeZone={state.timeZone.value}
      includeAppsStatus={state.includeAppsStatus.value}
      timeFormat={state.timeFormat.value}
      isOrganizer={state.isOrganizer.value}
    />
  );
}