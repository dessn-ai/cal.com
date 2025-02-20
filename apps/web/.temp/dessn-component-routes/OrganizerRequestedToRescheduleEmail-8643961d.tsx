import React from 'react';
import { useParentState } from "../useIframeState";
import { OrganizerRequestedToRescheduleEmail } from "../../../../packages/emails/src/templates/OrganizerRequestedToRescheduleEmail";

// Define TimeFormat enum locally instead of importing
enum TimeFormat {
  TWELVE_HOUR = "12h",
  TWENTY_FOUR_HOUR = "24h"
}

export default function ComponentPreview() {
  // Create a reusable translation function
  const createTranslateFunction = () => {
    const translate = (key: string, vars?: Record<string, string>) => {
      return vars ? `${key} ${JSON.stringify(vars)}` : key;
    };
    // Ensure the function has a name and is bound
    Object.defineProperty(translate, 'name', { value: 'translate' });
    return translate;
  };

  // Create a language object factory
  const createLanguageObject = () => ({
    translate: createTranslateFunction(),
    locale: "en"
  });

  const baseCalEvent = {
    type: "Meeting",
    title: "Sample Meeting",
    startTime: new Date().toISOString(),
    endTime: new Date(Date.now() + 3600000).toISOString(),
    organizer: { 
      name: "John Doe", 
      email: "john@example.com", 
      timeZone: "America/New_York",
      language: createLanguageObject()
    },
    attendees: [{ 
      name: "Jane Smith", 
      email: "jane@example.com", 
      timeZone: "America/Los_Angeles",
      language: createLanguageObject()
    }],
  };

  const baseAttendee = { 
    name: "Jane Smith", 
    email: "jane@example.com", 
    timeZone: "America/Los_Angeles",
    language: createLanguageObject()
  };

  const [state, setState] = useParentState({
    calEvent: {
      type: "string",
      value: JSON.stringify(baseCalEvent),
      label: "Calendar Event",
    },
    attendee: {
      type: "string",
      value: JSON.stringify(baseAttendee),
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

  // Parse the stored values and recreate the language objects
  const calEvent = {
    ...JSON.parse(state.calEvent.value),
    organizer: {
      ...JSON.parse(state.calEvent.value).organizer,
      language: createLanguageObject()
    },
    attendees: JSON.parse(state.calEvent.value).attendees.map(attendee => ({
      ...attendee,
      language: createLanguageObject()
    }))
  };

  const attendee = {
    ...JSON.parse(state.attendee.value),
    language: createLanguageObject()
  };

  return (
    <OrganizerRequestedToRescheduleEmail
      calEvent={calEvent}
      attendee={attendee}
      timeZone={state.timeZone.value}
      includeAppsStatus={state.includeAppsStatus.value}
      t={createTranslateFunction()}
      locale={state.locale.value}
      timeFormat={state.timeFormat.value as TimeFormat}
      isOrganizer={state.isOrganizer.value}
    />
  );
}