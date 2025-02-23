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
  const createTranslationFunction = () => {
    const translationFunction = (key: string, vars?: Record<string, string | number>) => {
      try {
        if (!vars) return key;
        let translated = key;
        Object.entries(vars).forEach(([k, v]) => {
          translated = translated.replace(new RegExp(`{{${k}}}`, 'g'), String(v));
        });
        return translated;
      } catch (error) {
        console.error('Translation error:', error);
        return key;
      }
    };
    
    // Add necessary properties to make it work like i18next
    translationFunction.language = 'en';
    return translationFunction;
  };

  const t = createTranslationFunction();

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
          language: { locale: 'en' },
        },
        attendees: [
          {
            name: 'Jane Smith',
            email: 'jane@example.com',
            timeZone: 'America/Los_Angeles',
            language: { locale: 'en' },
          },
        ],
        recurringEvent: null, // Set to null instead of removing
        language: { locale: 'en' },
      }),
      label: 'Calendar Event',
    },
    attendee: {
      type: 'string',
      value: JSON.stringify({
        name: 'Jane Smith',
        email: 'jane@example.com',
        timeZone: 'America/Los_Angeles',
        language: { locale: 'en' },
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

  try {
    const parsedCalEvent = JSON.parse(state.calEvent.value);
    const parsedAttendee = JSON.parse(state.attendee.value);

    // Create a shared translation context
    const translationContext = {
      translate: t,
      locale: 'en',
      language: 'en',
    };

    // Ensure translation function is available in the parsed event
    const calEventWithTranslation = {
      ...parsedCalEvent,
      language: translationContext,
      organizer: {
        ...parsedCalEvent.organizer,
        language: translationContext,
      },
      attendees: parsedCalEvent.attendees.map((attendee: any) => ({
        ...attendee,
        language: translationContext,
      })),
    };

    const attendeeWithTranslation = {
      ...parsedAttendee,
      language: translationContext,
    };

    return (
      <AttendeeDeclinedEmail
        calEvent={calEventWithTranslation}
        attendee={attendeeWithTranslation}
        timeZone={state.timeZone.value}
        includeAppsStatus={state.includeAppsStatus.value}
        t={t}
        locale={state.locale.value}
        timeFormat={state.timeFormat.value as TimeFormat}
        isOrganizer={state.isOrganizer.value}
      />
    );
  } catch (error) {
    console.error('Error rendering AttendeeDeclinedEmail:', error);
    return <div>Error rendering email preview</div>;
  }
}