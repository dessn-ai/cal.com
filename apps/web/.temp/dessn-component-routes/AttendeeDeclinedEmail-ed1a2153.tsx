import React from 'react';
import { useParentState } from '../useIframeState';
import { AttendeeDeclinedEmail } from '../../../../packages/emails/src/templates/AttendeeDeclinedEmail';

// Define TimeFormat enum locally instead of importing
enum TimeFormat {
  TWELVE_HOUR = '12h',
  TWENTY_FOUR_HOUR = '24h'
}

export default function ComponentPreview() {
  // Create a more robust translation function
  const translate = (key: string, vars?: Record<string, unknown>) => {
    // Handle recurring strings specifically
    if (key.includes('recurring')) {
      return 'Recurring meeting';
    }
    // Handle email-specific strings
    if (key.includes('email')) {
      return 'Email notification';
    }
    // Default translations
    const translations: Record<string, string> = {
      'meeting_declined': 'Meeting Declined',
      'meeting_details': 'Meeting Details',
      'recurring_event': 'Recurring Event',
      'weekly': 'Weekly',
      'monthly': 'Monthly',
      'daily': 'Daily',
      'yes': 'Yes',
      'no': 'No'
    };
    return translations[key] || key;
  };

  const [state, setState] = useParentState({
    calEvent: {
      type: 'string',
      value: JSON.stringify({
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
        // Simplified recurring event structure
        recurringEvent: null,
        language: { translate, locale: 'en' },
        uid: '123',
        location: 'Virtual',
        description: 'Team meeting',
        status: 'DECLINED'
      }),
      label: 'Calendar Event',
    },
    attendee: {
      type: 'string',
      value: JSON.stringify({
        name: 'Jane Smith',
        email: 'jane@example.com',
        timeZone: 'America/Los_Angeles',
        language: { translate, locale: 'en' },
      }),
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
      options: Object.values(TimeFormat),
      label: 'Time Format',
    },
    isOrganizer: {
      type: 'boolean',
      value: false,
      label: 'Is Organizer',
    },
  });

  const parsedCalEvent = JSON.parse(state.calEvent.value);
  const parsedAttendee = JSON.parse(state.attendee.value);

  return (
    <AttendeeDeclinedEmail
      calEvent={parsedCalEvent}
      attendee={parsedAttendee}
      timeZone={state.timeZone.value}
      includeAppsStatus={state.includeAppsStatus.value}
      t={translate}
      locale={state.locale.value}
      timeFormat={state.timeFormat.value as TimeFormat}
      isOrganizer={state.isOrganizer.value}
    />
  );
}