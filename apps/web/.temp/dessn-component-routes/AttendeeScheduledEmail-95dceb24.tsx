import React from 'react';
import { useParentState } from '../useIframeState';
import { AttendeeScheduledEmail } from '../../../../packages/emails/src/templates/AttendeeScheduledEmail';

// Define TimeFormat enum locally instead of importing from @calcom/types/Calendar
enum TimeFormat {
  TWELVE_HOUR = 12,
  TWENTY_FOUR_HOUR = 24,
}

export default function ComponentPreview() {
  // Create a translation function
  const t = React.useCallback((key: string, vars?: Record<string, unknown>) => {
    if (vars) {
      return key.replace(/\{(\w+)\}/g, (match, key) => String(vars[key] || match));
    }
    return key;
  }, []);

  const now = new Date();
  const startTime = new Date(now.getTime() + 24 * 60 * 60 * 1000); // Tomorrow
  const endTime = new Date(startTime.getTime() + 60 * 60 * 1000); // 1 hour later

  const [state, setState] = useParentState({
    calEvent: {
      type: 'string',
      value: JSON.stringify({
        type: 'default',
        title: 'Meeting with John Doe',
        startTime: startTime.toISOString(),
        endTime: endTime.toISOString(),
        organizer: {
          name: 'Jane Smith',
          email: 'jane@example.com',
          timeZone: 'America/New_York',
          language: { 
            locale: 'en',
          },
        },
        attendees: [],
        description: null,
        location: 'Online',
        uid: '123456',
        bookingUid: 'booking123',
        additionalNotes: '',
        customInputs: {},
        responses: {},
        userFieldsResponses: {},
        cancellationReason: null,
        recurringEvent: null,
        hideDate: false,
        seatsPerTimeSlot: null,
        seatsShowAttendees: false,
        seatsShowAvailabilityCount: false,
        language: {
          locale: 'en',
        },
        // Add formatted dates
        date: startTime.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }),
        time: `${startTime.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })} - ${endTime.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}`,
      }),
      label: 'Calendar Event',
    },
    attendee: {
      type: 'string',
      value: JSON.stringify({
        name: 'John Doe',
        email: 'john@example.com',
        timeZone: 'America/Los_Angeles',
        language: {
          locale: 'en',
        },
        timeFormat: TimeFormat.TWELVE_HOUR
      }),
      label: 'Attendee',
    },
  });

  const calEvent = JSON.parse(state.calEvent.value);
  const attendee = JSON.parse(state.attendee.value);

  // Create the final objects with the translation function
  const finalCalEvent = {
    ...calEvent,
    t,
    language: {
      ...calEvent.language,
      translate: t,
    },
    organizer: {
      ...calEvent.organizer,
      language: {
        ...calEvent.organizer.language,
        translate: t,
      },
    },
    // Keep dates as strings
    startTime: calEvent.startTime,
    endTime: calEvent.endTime,
    // Add formatted time strings
    startTimeString: startTime.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }),
    endTimeString: endTime.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }),
  };

  const finalAttendee = {
    ...attendee,
    t,
    language: {
      ...attendee.language,
      translate: t,
    },
  };

  return (
    <div className="bg-white p-8">
      <AttendeeScheduledEmail
        calEvent={finalCalEvent}
        attendee={finalAttendee}
      />
    </div>
  );
}