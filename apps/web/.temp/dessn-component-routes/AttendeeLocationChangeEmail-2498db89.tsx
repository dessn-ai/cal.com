import React from 'react';
import { useParentState } from '../useIframeState';
import { AttendeeLocationChangeEmail } from '../../../../packages/emails/src/templates/AttendeeLocationChangeEmail';
import { TimeFormat, Person, CalendarEvent } from './types';
import { symmetricEncrypt, symmetricDecrypt } from './mockCrypto';

// Add to global scope to prevent potential crypto-related errors
(window as any).symmetricEncrypt = symmetricEncrypt;
(window as any).symmetricDecrypt = symmetricDecrypt;

// Create a more robust translation function
const createTranslationFunction = () => {
  const translations: Record<string, string> = {
    'need_to_make_a_change': 'Need to make a change?',
    'reschedule': 'Reschedule',
    'cancel': 'Cancel',
    'or_lowercase': 'or',
    'check_here': 'check here',
    'manage_this_booking': 'Manage this booking',
    'manage_booking_link': 'Manage Booking',
    'cancel_booking': 'Cancel Booking',
    'reschedule_booking': 'Reschedule Booking',
    'email_subject': 'Location Change: {title}',
    'location_changed': 'Location Changed'
  };

  return function translate(key: string, vars?: Record<string, string | number>) {
    let translation = translations[key] || key;

    if (vars) {
      Object.entries(vars).forEach(([varKey, varValue]) => {
        translation = translation.replace(new RegExp(`{${varKey}}`, 'g'), String(varValue));
      });
    }

    return translation;
  };
};

export default function ComponentPreview() {
  const translate = React.useMemo(() => createTranslationFunction(), []);

  // Create the base objects without stringification
  const baseCalEvent: CalendarEvent = {
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
        timeZone: 'Europe/London',
        language: { translate, locale: 'en' },
      },
    ],
    location: 'New Location',
    uid: 'test-uid-123',
    additionalNotes: 'Test notes',
    cancellationReason: undefined,
    team: {
      name: 'Team',
      members: []
    },
    recurringEvent: null,
    platformClientId: null
  };

  const baseAttendee: Person = {
    name: 'Jane Smith',
    email: 'jane@example.com',
    timeZone: 'Europe/London',
    language: { translate, locale: 'en' },
  };

  const [state, setState] = useParentState({
    calEvent: {
      type: 'string',
      value: JSON.stringify({
        ...baseCalEvent,
        organizer: {
          ...baseCalEvent.organizer,
          language: { locale: 'en' }
        },
        attendees: baseCalEvent.attendees.map(att => ({
          ...att,
          language: { locale: 'en' }
        }))
      }),
      label: 'Calendar Event',
    },
    attendee: {
      type: 'string',
      value: JSON.stringify({
        ...baseAttendee,
        language: { locale: 'en' }
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

  // Parse the stored values and reattach the translation function
  const parsedCalEvent: CalendarEvent = {
    ...JSON.parse(state.calEvent.value),
    organizer: {
      ...JSON.parse(state.calEvent.value).organizer,
      language: { translate, locale: 'en' }
    },
    attendees: JSON.parse(state.calEvent.value).attendees.map((att: any) => ({
      ...att,
      language: { translate, locale: 'en' }
    }))
  };

  const parsedAttendee: Person = {
    ...JSON.parse(state.attendee.value),
    language: { translate, locale: 'en' }
  };

  return (
    <AttendeeLocationChangeEmail
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