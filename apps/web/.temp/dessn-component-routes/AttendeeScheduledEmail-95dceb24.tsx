import React from 'react';
import { useParentState } from '../useIframeState';
import { AttendeeScheduledEmail } from '../../../../packages/emails/src/templates/AttendeeScheduledEmail';

// Helper function to format dates according to specific patterns
const formatDate = (date: Date, pattern: string) => {
  const d = new Date(date);
  
  // Handle specific format patterns
  switch (pattern) {
    case 'h:mm a':
      return d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
    case 'MMMM dd, yyyy':
      return d.toLocaleDateString('en-US', { month: 'long', day: '2-digit', year: 'numeric' });
    case 'MMM d, yyyy':
      return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    default:
      return d.toLocaleString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      });
  }
};

// Add format function to window
if (typeof window !== 'undefined') {
  (window as any).format = formatDate;
}

enum TimeFormat {
  TWELVE_HOUR = 12,
  TWENTY_FOUR_HOUR = 24
}

// Create a proper translation function
function createTranslationFunction() {
  function translate(key: string, vars?: Record<string, string | number>) {
    if (!vars) return key;
    let result = key;
    Object.entries(vars).forEach(([k, v]) => {
      result = result.replace(`{${k}}`, String(v));
    });
    return result;
  }

  // Add necessary properties to make it work like i18next
  translate.language = { locale: 'en' };
  translate.locale = 'en';
  
  // Add other required methods
  translate.exists = () => true;
  translate.t = (key: string) => key;
  
  return translate;
}

export default function ComponentPreview() {
  const startTime = new Date();
  const endTime = new Date(startTime.getTime() + 60 * 60 * 1000);

  // Create translation function
  const translate = createTranslationFunction();

  const languageObject = {
    translate,
    locale: 'en',
    t: translate,
  };

  const [state, setState] = useParentState({
    calEvent: {
      type: 'string',
      value: JSON.stringify({
        type: 'default',
        title: 'Meeting with John Doe',
        startTime: startTime,
        endTime: endTime,
        organizer: {
          name: 'Jane Smith',
          email: 'jane@example.com',
          timeZone: 'America/New_York',
          language: languageObject,
        },
        attendees: [
          {
            email: 'john@example.com',
            name: 'John Doe',
            timeZone: 'America/Los_Angeles',
            language: languageObject,
          }
        ],
        location: 'Virtual Meeting',
        additionalNotes: '',
        uid: 'unique-123',
        metadata: {},
      }),
      label: 'Calendar Event',
    },
    attendee: {
      type: 'string',
      value: JSON.stringify({
        name: 'John Doe',
        email: 'john@example.com',
        timeZone: 'America/Los_Angeles',
        language: languageObject,
        timeFormat: TimeFormat.TWELVE_HOUR,
      }),
      label: 'Attendee',
    },
  });

  try {
    const baseEvent = JSON.parse(state.calEvent.value);

    const calEvent = {
      ...baseEvent,
      startTime,
      endTime,
      format: formatDate,
      t: translate,
      translate,
      language: languageObject,
      organizer: {
        ...baseEvent.organizer,
        language: languageObject,
      },
      attendees: baseEvent.attendees.map((attendee: any) => ({
        ...attendee,
        language: languageObject,
      })),
      getFormattedDate: () => ({
        startTime: formatDate(startTime, 'MMMM dd, yyyy h:mm a'),
        endTime: formatDate(endTime, 'MMMM dd, yyyy h:mm a'),
      }),
    };

    const attendee = {
      ...JSON.parse(state.attendee.value),
      language: languageObject,
      timeFormat: TimeFormat.TWELVE_HOUR,
    };

    return (
      <div className="email-preview">
        <AttendeeScheduledEmail
          calEvent={calEvent}
          attendee={attendee}
        />
      </div>
    );
  } catch (error) {
    console.error('Error rendering AttendeeScheduledEmail:', error);
    return <div>Error rendering email template</div>;
  }
}