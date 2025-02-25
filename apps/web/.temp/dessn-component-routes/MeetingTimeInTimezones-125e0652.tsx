import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/ui/components/popover/MeetingTimeInTimezones';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    attendees: {
      type: "string",
      value: JSON.stringify([
        {
          id: 1,
          email: "attendee1@example.com",
          name: "Attendee 1",
          timeZone: "America/New_York",
          locale: "en-US",
          bookingId: 101
        },
        {
          id: 2,
          email: "attendee2@example.com",
          name: "Attendee 2",
          timeZone: "Europe/London",
          locale: "en-GB",
          bookingId: 102
        }
      ]),
      label: "Attendees"
    },
    userTimezone: {
      type: "string",
      value: "UTC",
      label: "User Timezone"
    },
    timeFormat: {
      type: "number",
      value: 12,
      label: "Time Format"
    },
    startTime: {
      type: "string",
      value: "2023-06-15T09:00:00Z",
      label: "Start Time"
    },
    endTime: {
      type: "string",
      value: "2023-06-15T10:00:00Z",
      label: "End Time"
    }
  });

  const attendees = JSON.parse(state.attendees.value);

  return (
    <ImportedComponent
      attendees={attendees}
      userTimezone={state.userTimezone.value}
      timeFormat={state.timeFormat.value}
      startTime={state.startTime.value}
      endTime={state.endTime.value}
    />
  );
}