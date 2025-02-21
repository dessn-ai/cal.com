import React from 'react';
import { useParentState } from '../useIframeState';
import { OrganizerLocationChangeEmail } from '../../../../packages/emails/src/templates/OrganizerLocationChangeEmail';

import { TimeFormat } from '../../../../packages/types/Calendar';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    calEvent: {
      type: "string",
      value: JSON.stringify({
        type: "default",
        title: "Meeting",
        startTime: "2023-06-15T10:00:00",
        endTime: "2023-06-15T11:00:00",
        organizer: {
          name: "John Doe",
          email: "john@example.com",
          timeZone: "America/New_York",
          language: { translate: (key: string) => key, locale: "en" }
        },
        attendees: [
          {
            name: "Jane Smith",
            email: "jane@example.com",
            timeZone: "America/Los_Angeles",
            language: { translate: (key: string) => key, locale: "en" }
          }
        ],
        location: "New Location"
      }),
      label: "Calendar Event"
    },
    attendee: {
      type: "string",
      value: JSON.stringify({
        name: "Jane Smith",
        email: "jane@example.com",
        timeZone: "America/Los_Angeles",
        language: { translate: (key: string) => key, locale: "en" }
      }),
      label: "Attendee"
    },
    newSeat: {
      type: "boolean",
      value: false,
      label: "New Seat"
    },
    attendeeCancelled: {
      type: "boolean",
      value: false,
      label: "Attendee Cancelled"
    },
    timeZone: {
      type: "string",
      value: "America/New_York",
      label: "Time Zone"
    },
    includeAppsStatus: {
      type: "boolean",
      value: false,
      label: "Include Apps Status"
    },
    locale: {
      type: "string",
      value: "en",
      label: "Locale"
    },
    timeFormat: {
      type: "dropdown",
      value: TimeFormat.TWELVE_HOUR,
      options: Object.values(TimeFormat),
      label: "Time Format"
    },
    isOrganizer: {
      type: "boolean",
      value: true,
      label: "Is Organizer"
    }
  });

  return (
    <OrganizerLocationChangeEmail
      calEvent={JSON.parse(state.calEvent.value)}
      attendee={JSON.parse(state.attendee.value)}
      newSeat={state.newSeat.value}
      attendeeCancelled={state.attendeeCancelled.value}
      timeZone={state.timeZone.value}
      includeAppsStatus={state.includeAppsStatus.value}
      locale={state.locale.value}
      timeFormat={state.timeFormat.value as TimeFormat}
      isOrganizer={state.isOrganizer.value}
      t={(key: string) => key}
    />
  );
}