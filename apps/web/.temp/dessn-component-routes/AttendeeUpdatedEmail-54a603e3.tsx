import React from 'react';
import { useParentState } from '../useIframeState';
import { AttendeeUpdatedEmail } from '../../../../packages/emails/src/templates/AttendeeUpdatedEmail';

// Define all necessary types locally
enum TimeFormat {
  TWELVE_HOUR = "12h",
  TWENTY_FOUR_HOUR = "24h"
}

// Define necessary types locally
interface Person {
  name: string;
  email: string;
  timeZone: string;
  language: {
    translate: (key: string, variables?: Record<string, any>) => string;
    locale: string;
  };
}

interface CalendarEvent {
  type: string;
  title: string;
  startTime: string;
  endTime: string;
  organizer: Person;
  attendees: Person[];
  description?: string;
  additionalNotes?: string;
  team?: { name: string; members: { email: string }[] } | null;
  location?: string;
  recurringEvent?: { count: number } | null;
  uid?: string;
  paymentInfo?: {
    amount: number;
    currency: string;
    paymentOption: string;
  } | null;
  platformClientId?: string;
}

export default function ComponentPreview() {
  // Create a proper translation function that handles interpolation
  const translate = (key: string, variables?: Record<string, any>) => {
    const translations: Record<string, string> = {
      "need_to_make_a_change": "Need to make a change?",
      "reschedule": "Reschedule",
      "cancel": "Cancel",
      "or_lowercase": "or",
      "check_here": "check here",
      "what": "What",
      "when": "When",
      "who": "Who",
      "where": "Where",
      "additional_notes": "Additional Notes",
      "confirmed_event_type_subject": "{eventType} with {name}",
      "emailed_you_and_any_other_attendees": "We've emailed you and any other attendees with this calendar invitation",
      "your_event_has_been_scheduled": "Your event has been scheduled",
      "your_event_has_been_scheduled_recurring": "Your recurring event has been scheduled",
      "january": "January",
      "february": "February",
      "march": "March",
      "april": "April",
      "may": "May",
      "june": "June",
      "july": "July",
      "august": "August",
      "september": "September",
      "october": "October",
      "november": "November",
      "december": "December",
      "monday": "Monday",
      "tuesday": "Tuesday",
      "wednesday": "Wednesday",
      "thursday": "Thursday",
      "friday": "Friday",
      "saturday": "Saturday",
      "sunday": "Sunday",
      // Add more translations as needed
    };

    let translation = translations[key] || key;

    // Handle variable interpolation
    if (variables) {
      Object.entries(variables).forEach(([varKey, value]) => {
        translation = translation.replace(`{${varKey}}`, String(value));
      });
    }

    return translation;
  };

  const baseCalEvent = {
    type: 'default',
    title: 'Meeting',
    startTime: new Date().toISOString(),
    endTime: new Date(Date.now() + 3600000).toISOString(),
    organizer: {
      name: 'John Doe',
      email: 'john@example.com',
      timeZone: 'America/New_York',
      language: { translate, locale: 'en' },
    },
    attendees: [
      {
        name: 'Jane Smith',
        email: 'jane@example.com',
        timeZone: 'America/Los_Angeles',
        language: { translate, locale: 'en' },
      },
    ],
    description: '',
    additionalNotes: '',
    team: null,
    location: 'Online',
    recurringEvent: null,
    uid: '123',
    paymentInfo: null,
  } as CalendarEvent;

  const baseAttendee = {
    name: 'Jane Smith',
    email: 'jane@example.com',
    timeZone: 'America/Los_Angeles',
    language: { translate, locale: 'en' },
  } as Person;

  const [state, setState] = useParentState({
    calEvent: {
      type: 'string',
      value: JSON.stringify(baseCalEvent),
      label: 'Calendar Event',
    },
    attendee: {
      type: 'string',
      value: JSON.stringify(baseAttendee),
      label: 'Attendee',
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
    locale: {
      type: 'string',
      value: 'en',
      label: 'Locale',
    },
    timeFormat: {
      type: 'dropdown',
      value: TimeFormat.TWELVE_HOUR,
      options: [TimeFormat.TWELVE_HOUR, TimeFormat.TWENTY_FOUR_HOUR],
      label: 'Time Format',
    },
    isOrganizer: {
      type: 'boolean',
      value: false,
      label: 'Is Organizer',
    },
  });

  // Parse the JSON and reattach the translate function
  const calEvent = {
    ...JSON.parse(state.calEvent.value),
    organizer: {
      ...JSON.parse(state.calEvent.value).organizer,
      language: { translate, locale: 'en' },
    },
    attendees: JSON.parse(state.calEvent.value).attendees.map((attendee: any) => ({
      ...attendee,
      language: { translate, locale: 'en' },
    })),
  };

  const attendee = {
    ...JSON.parse(state.attendee.value),
    language: { translate, locale: 'en' },
  };

  return (
    <AttendeeUpdatedEmail
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