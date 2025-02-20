import React from 'react';
import { useParentState } from '../useIframeState';

// Define TimeFormat enum locally instead of importing
enum TimeFormat {
  TWELVE_HOUR = '12h',
  TWENTY_FOUR_HOUR = '24h'
}

// Mock email component instead of importing the real one
const OrganizerLocationChangeEmail = ({ 
  calEvent, 
  attendee, 
  timeZone, 
  locale, 
  timeFormat 
}: any) => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Location Change Notification</h2>
      <p>Event: {calEvent.title}</p>
      <p>New Location: {calEvent.location}</p>
      <p>Date: {new Date(calEvent.startTime).toLocaleDateString()}</p>
      <p>Time: {new Date(calEvent.startTime).toLocaleTimeString()} - {new Date(calEvent.endTime).toLocaleTimeString()}</p>
      <p>Organizer: {calEvent.organizer.name}</p>
      <p>Attendee: {attendee.name}</p>
      <p>TimeZone: {timeZone}</p>
      <p>Locale: {locale}</p>
      <p>Time Format: {timeFormat}</p>
    </div>
  );
};

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
          language: { locale: "en" }
        },
        attendees: [
          {
            name: "Jane Smith",
            email: "jane@example.com",
            timeZone: "America/Los_Angeles",
            language: { locale: "en" }
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
        language: { locale: "en" }
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