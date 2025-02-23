import React from 'react';
import { useParentState } from '../useIframeState';
import { BaseScheduledEmail } from '../../../../packages/emails/src/templates/BaseScheduledEmail';

// Define TimeFormat enum locally since we don't have access to @calcom/types/Calendar
enum TimeFormat {
  TWELVE_HOUR = "12h",
  TWENTY_FOUR_HOUR = "24h"
}

export default function ComponentPreview() {
  // Create a translation function that will be used throughout the component
  const translate = React.useCallback((key: string, vars?: Record<string, string | number>) => {
    if (typeof key !== 'string') {
      return key;
    }
    
    let translatedText = key;
    
    if (vars) {
      Object.entries(vars).forEach(([varKey, varValue]) => {
        translatedText = translatedText.replace(new RegExp(`{{${varKey}}}`, 'g'), String(varValue));
      });
    }
    
    return translatedText;
  }, []);

  const mockTranslate = (key: string) => key;

  const [state, setState] = useParentState({
    calEvent: {
      type: "string",
      value: JSON.stringify({
        type: "Meeting",
        title: "Sample Meeting",
        startTime: new Date().toISOString(),
        endTime: new Date(Date.now() + 3600000).toISOString(),
        organizer: { 
          name: "John Doe", 
          email: "john@example.com", 
          timeZone: "America/New_York", 
          language: { 
            translate: mockTranslate,
            locale: "en" 
          } 
        },
        attendees: [{ 
          name: "Jane Smith", 
          email: "jane@example.com", 
          timeZone: "America/Los_Angeles", 
          language: { 
            translate: mockTranslate,
            locale: "en" 
          } 
        }],
        language: {
          translate: mockTranslate,
          locale: "en"
        },
        uid: "test-uid",
        additionalNotes: "",
        location: "Online",
        cancellationReason: undefined,
        responses: {},
        seatsPerTimeSlot: undefined,
        seatsShowAttendees: false,
        seatsShowAvailableSeats: false
      }),
      label: "Calendar Event",
    },
    attendee: {
      type: "string",
      value: JSON.stringify({ 
        name: "Jane Smith", 
        email: "jane@example.com", 
        timeZone: "America/Los_Angeles", 
        language: { 
          translate: mockTranslate,
          locale: "en" 
        } 
      }),
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

  const parsedCalEvent = React.useMemo(() => {
    const event = JSON.parse(state.calEvent.value);
    // Replace the serialized translate function with the actual function
    event.language.translate = translate;
    event.organizer.language.translate = translate;
    event.attendees.forEach((attendee: any) => {
      attendee.language.translate = translate;
    });
    return event;
  }, [state.calEvent.value, translate]);

  const parsedAttendee = React.useMemo(() => {
    const attendee = JSON.parse(state.attendee.value);
    attendee.language.translate = translate;
    return attendee;
  }, [state.attendee.value, translate]);

  return (
    <BaseScheduledEmail
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