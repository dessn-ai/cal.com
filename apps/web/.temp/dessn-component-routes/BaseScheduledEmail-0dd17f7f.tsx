import React from 'react';
import { useParentState } from '../useIframeState';
import { BaseScheduledEmail } from '../../../../packages/emails/src/templates/BaseScheduledEmail';

// Define TimeFormat enum locally instead of importing
enum TimeFormat {
  TWELVE_HOUR = "12h",
  TWENTY_FOUR_HOUR = "24h"
}

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    calEvent: {
      type: "string",
      value: JSON.stringify({
        type: "Meeting",
        title: "Sample Meeting",
        startTime: new Date().toISOString(),
        endTime: new Date(Date.now() + 3600000).toISOString(),
        organizer: { name: "John Doe", email: "john@example.com", timeZone: "America/New_York", language: { translate: (key: string) => key, locale: "en" } },
        attendees: [{ name: "Jane Smith", email: "jane@example.com", timeZone: "America/Los_Angeles", language: { translate: (key: string) => key, locale: "en" } }],
      }),
      label: "Calendar Event",
    },
    attendee: {
      type: "string",
      value: JSON.stringify({ name: "Jane Smith", email: "jane@example.com", timeZone: "America/Los_Angeles", language: { translate: (key: string) => key, locale: "en" } }),
      label: "Attendee",
    },
    timeZone: {
      type: "string",
      value: "America/New_York",
      label: "Time Zone",
    },
    includeAppsStatus: {
      type: "boolean",
      value: false,
      label: "Include Apps Status",
    },
    locale: {
      type: "string",
      value: "en",
      label: "Locale",
    },
    timeFormat: {
      type: "dropdown",
      value: TimeFormat.TWELVE_HOUR,
      options: [TimeFormat.TWELVE_HOUR, TimeFormat.TWENTY_FOUR_HOUR],
      label: "Time Format",
    },
    isOrganizer: {
      type: "boolean",
      value: false,
      label: "Is Organizer",
    },
  });

  const calEvent = JSON.parse(state.calEvent.value);
  const attendee = JSON.parse(state.attendee.value);

  // Define translation function directly
  const translate = function(key: string) {
    return key;
  };

  return (
    <BaseScheduledEmail
      calEvent={calEvent}
      attendee={attendee}
      timeZone={state.timeZone.value}
      includeAppsStatus={state.includeAppsStatus.value}
      t={translate}
      locale={state.locale.value}
      timeFormat={state.timeFormat.value as TimeFormat}
      isOrganizer={state.isOrganizer.value}
    />
  );
}