import React from 'react';
import { useParentState } from '../useIframeState';

enum TimeFormat {
  TWELVE_HOUR = '12h',
  TWENTY_FOUR_HOUR = '24h',
}

// Mock email preview component
const MockEmailPreview = ({
  calEvent,
  attendee,
  timeZone,
  locale,
  timeFormat,
}: {
  calEvent: any;
  attendee: any;
  timeZone: string;
  locale: string;
  timeFormat: TimeFormat;
}) => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h2 style={{ color: '#292929' }}>Meeting Request</h2>
      <div style={{ marginBottom: '20px' }}>
        <h3>{calEvent.title}</h3>
        <p>Start: {new Date(calEvent.startTime).toLocaleString()}</p>
        <p>End: {new Date(calEvent.endTime).toLocaleString()}</p>
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <h4>Organizer</h4>
        <p>{calEvent.organizer.name} ({calEvent.organizer.email})</p>
        <p>Timezone: {calEvent.organizer.timeZone}</p>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h4>Attendee</h4>
        <p>{attendee.name} ({attendee.email})</p>
        <p>Timezone: {attendee.timeZone}</p>
      </div>

      <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#f5f5f5' }}>
        <p>Preview Settings:</p>
        <ul>
          <li>Time Format: {timeFormat}</li>
          <li>Locale: {locale}</li>
          <li>Display Timezone: {timeZone}</li>
        </ul>
      </div>
    </div>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    calEvent: {
      type: "string",
      value: JSON.stringify({
        type: "default",
        title: "Meeting with John",
        startTime: new Date().toISOString(),
        endTime: new Date(Date.now() + 3600000).toISOString(),
        organizer: {
          name: "Jane Organizer",
          email: "jane@example.com",
          timeZone: "America/New_York",
          language: {
            translate: (key: string) => key,
            locale: "en"
          }
        },
        attendees: [{
          name: "John Attendee",
          email: "john@example.com",
          timeZone: "America/Los_Angeles",
          language: {
            translate: (key: string) => key,
            locale: "en"
          }
        }],
        recurringEvent: null
      }),
      label: "Calendar Event"
    },
    attendee: {
      type: "string",
      value: JSON.stringify({
        name: "John Attendee",
        email: "john@example.com",
        timeZone: "America/Los_Angeles",
        language: {
          translate: (key: string) => key,
          locale: "en"
        }
      }),
      label: "Attendee"
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
      options: [TimeFormat.TWELVE_HOUR, TimeFormat.TWENTY_FOUR_HOUR],
      label: "Time Format"
    },
    isOrganizer: {
      type: "boolean",
      value: false,
      label: "Is Organizer"
    }
  });

  return (
    <MockEmailPreview
      calEvent={JSON.parse(state.calEvent.value)}
      attendee={JSON.parse(state.attendee.value)}
      timeZone={state.timeZone.value}
      locale={state.locale.value}
      timeFormat={state.timeFormat.value as TimeFormat}
    />
  );
}