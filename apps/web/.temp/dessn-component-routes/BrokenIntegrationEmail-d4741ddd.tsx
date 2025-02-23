import React from 'react';
import { useParentState } from "../useIframeState";
import { BrokenIntegrationEmail } from "../../../../packages/emails/src/templates/BrokenIntegrationEmail";

// Define TimeFormat enum locally instead of importing from @calcom/types/Calendar
enum TimeFormat {
  TWELVE_HOUR = '12h',
  TWENTY_FOUR_HOUR = '24h'
}

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
          language: { translate: (key: string) => key, locale: 'en' }
        },
        attendees: [
          {
            name: 'John Doe',
            email: 'john@example.com',
            timeZone: 'America/Los_Angeles',
            language: { translate: (key: string) => key, locale: 'en' }
          }
        ],
        integration: {
          name: 'Google Calendar',
          type: 'google_calendar'
        }
      },
      label: 'Calendar Event'
    },
    timeZone: {
      type: 'string',
      value: 'America/New_York',
      label: 'Time Zone'
    },
    timeFormat: {
      type: 'dropdown',
      value: TimeFormat.TWELVE_HOUR,
      options: Object.values(TimeFormat),
      label: 'Time Format'
    }
  });

  return (
    <BrokenIntegrationEmail
      calEvent={state.calEvent.value}
      timeZone={state.timeZone.value}
      timeFormat={state.timeFormat.value}
    />
  );
}