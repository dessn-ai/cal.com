import React from 'react';
import { useParentState } from '../useIframeState';
import { BaseScheduledEmail } from '../../../../packages/emails/src/templates/BaseScheduledEmail';
import { TimeFormat } from '@calcom/lib/timeFormat';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    calEvent: {
      type: "string",
      value: JSON.stringify({
        type: "Meeting",
        title: "Sample Meeting",
        startTime: new Date().toISOString(),
        endTime: new Date(Date.now() + 3600000).toISOString(),
        organizer: { name: "John Doe", email: "john@example.com", timeZone: "America/New_York", language: { locale: "en" } },
        attendees: [{ name: "Jane Smith", email: "jane@example.com", timeZone: "America/Los_Angeles", language: { locale: "en" } }],
        uid: "test-uid-123",
        additionalNotes: "Additional notes here",
        cancellationReason: null,
        responses: {},
        location: "Online",
        recurringEvent: null,
        requiresConfirmation: false,
        seatsPerTimeSlot: null,
        seatsShowAttendees: false,
        seatsShowAvailabilityCount: false
      }),
      label: "Calendar Event",
    },
    attendee: {
      type: "string",
      value: JSON.stringify({ 
        name: "Jane Smith", 
        email: "jane@example.com", 
        timeZone: "America/Los_Angeles", 
        language: { locale: "en" }
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

  // Define the translation function
  const translate = React.useCallback((key: string, vars?: Record<string, any>) => {
    if (!key) return '';
    let text = key;
    if (vars) {
      Object.entries(vars).forEach(([k, v]) => {
        text = text.replace(new RegExp(`{{${k}}}`, 'g'), String(v));
      });
    }
    return text;
  }, []);

  const parsedCalEvent = React.useMemo(() => {
    const event = JSON.parse(state.calEvent.value);
    return {
      ...event,
      language: {
        locale: state.locale.value,
        translate: translate
      }
    };
  }, [state.calEvent.value, state.locale.value, translate]);

  const parsedAttendee = React.useMemo(() => {
    const attendee = JSON.parse(state.attendee.value);
    return {
      ...attendee,
      language: {
        ...attendee.language,
        translate: translate
      }
    };
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