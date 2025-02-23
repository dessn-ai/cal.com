import React from 'react';
import { useParentState } from '../useIframeState';
import { AttendeeRescheduledEmail } from '../../../../packages/emails/src/templates/AttendeeRescheduledEmail';

// Define TimeFormat enum locally instead of importing
enum TimeFormat {
  TWELVE_HOUR = '12h',
  TWENTY_FOUR_HOUR = '24h'
}

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    calEvent: {
      type: 'string',
      value: JSON.stringify({
        type: 'meeting',
        title: 'Team Meeting',
        startTime: '2023-06-15T10:00:00Z',
        endTime: '2023-06-15T11:00:00Z',
        organizer: {
          name: 'John Doe',
          email: 'john@example.com',
          timeZone: 'America/New_York',
          language: { translate: (key: string) => key, locale: 'en' },
        },
        attendees: [
          {
            name: 'Jane Smith',
            email: 'jane@example.com',
            timeZone: 'Europe/London',
            language: { translate: (key: string) => key, locale: 'en' },
          },
        ],
        uid: 'test-uid',
      }),
      label: 'Calendar Event',
    },
    attendee: {
      type: 'string',
      value: JSON.stringify({
        name: 'Jane Smith',
        email: 'jane@example.com',
        timeZone: 'Europe/London',
        language: { translate: (key: string) => key, locale: 'en' },
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

  // Create a true function using Function constructor
  const tFunction = new Function('key', 'vars', `
    if (!key) return '';
    let text = key;
    if (vars) {
      Object.entries(vars).forEach(([k, v]) => {
        text = text.replace(new RegExp('{' + k + '}', 'g'), String(v));
      });
    }
    return text;
  `);

  // Create the base translation function
  const baseT = function(key: string, vars?: Record<string, any>) {
    return tFunction.call(this, key, vars);
  };

  // Create a proper bound function
  const t = baseT.bind(null) as any;

  // Add all necessary i18next properties
  Object.defineProperties(t, {
    // Basic properties
    language: { value: state.locale.value },
    locale: { value: state.locale.value },
    
    // Methods
    exists: { value: () => true },
    t: { value: t },
    
    // i18n object
    i18n: {
      value: {
        language: state.locale.value,
        exists: () => true,
        t: t,
        changeLanguage: () => Promise.resolve(state.locale.value),
        loadNamespaces: () => Promise.resolve(),
        loadLanguages: () => Promise.resolve(),
        dir: () => 'ltr',
        options: { 
          defaultNS: 'translation',
          fallbackLng: 'en'
        }
      }
    },

    // Additional methods that might be needed
    changeLanguage: { value: () => Promise.resolve(state.locale.value) },
    loadNamespaces: { value: () => Promise.resolve() },
    loadLanguages: { value: () => Promise.resolve() },
    dir: { value: () => 'ltr' }
  });

  try {
    return (
      <AttendeeRescheduledEmail
        calEvent={parsedCalEvent}
        attendee={parsedAttendee}
        timeZone={state.timeZone.value}
        includeAppsStatus={state.includeAppsStatus.value}
        t={t}
        locale={state.locale.value}
        timeFormat={state.timeFormat.value as TimeFormat}
        isOrganizer={state.isOrganizer.value}
      />
    );
  } catch (error) {
    console.error('Error rendering email preview:', error);
    return (
      <div>
        <h1>Preview not available</h1>
        <p>There was an error rendering the email preview.</p>
        <pre>{String(error)}</pre>
      </div>
    );
  }
}