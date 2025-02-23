import React from 'react';
import { useParentState } from '../useIframeState';
import { OrganizerLocationChangeEmail } from '../../../../packages/emails/src/templates/OrganizerLocationChangeEmail';

// Define TimeFormat enum locally instead of importing
enum TimeFormat {
  TWELVE_HOUR = '12h',
  TWENTY_FOUR_HOUR = '24h'
}

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    calEvent: {
      type: "string",
      value: JSON.stringify({
        type: "default",
        title: "Meeting",
        startTime: "2023-06-15T10:00:00",
        endTime: "2023-06-15T11:00:00",
        organizer: {
          name: "John Doe",
          email: "john@example.com",
          timeZone: "America/New_York",
          language: { 
            translate: (key: string) => key,
            locale: "en" 
          }
        },
        attendees: [
          {
            name: "Jane Smith",
            email: "jane@example.com",
            timeZone: "America/Los_Angeles",
            language: { 
              translate: (key: string) => key,
              locale: "en" 
            }
          }
        ],
        location: "New Location",
        uid: "test-uid",
        additionalNotes: "",
        recurringEvent: null,
        responses: {},
        seatsPerTimeSlot: null,
        seatsShowAttendees: false,
        bookingUid: "test-booking-uid",
        language: {
          translate: (key: string) => key,
          locale: "en"
        }
      }),
      label: "Calendar Event"
    },
    attendee: {
      type: "string",
      value: JSON.stringify({
        name: "Jane Smith",
        email: "jane@example.com",
        timeZone: "America/Los_Angeles",
        language: { 
          translate: (key: string) => key,
          locale: "en" 
        }
      }),
      label: "Attendee"
    },
    newSeat: {
      type: "boolean",
      value: false,
      label: "New Seat"
    },
    attendeeCancelled: {
      type: "boolean",
      value: false,
      label: "Attendee Cancelled"
    },
    timeZone: {
      type: "string",
      value: "America/New_York",
      label: "Time Zone"
    },
    includeAppsStatus: {
      type: "boolean",
      value: false,
      label: "Include Apps Status"
    },
    locale: {
      type: "string",
      value: "en",
      label: "Locale"
    },
    timeFormat: {
      type: "dropdown",
      value: TimeFormat.TWELVE_HOUR,
      options: Object.values(TimeFormat),
      label: "Time Format"
    },
    isOrganizer: {
      type: "boolean",
      value: true,
      label: "Is Organizer"
    }
  });

  // Simple translation function
  const translate = React.useCallback((key: string) => key, []);

  const calEventData = React.useMemo(() => {
    const parsed = JSON.parse(state.calEvent.value);
    return {
      ...parsed,
      language: {
        translate,
        locale: "en"
      },
      organizer: {
        ...parsed.organizer,
        language: {
          translate,
          locale: "en"
        }
      },
      attendees: parsed.attendees.map((attendee: any) => ({
        ...attendee,
        language: {
          translate,
          locale: "en"
        }
      }))
    };
  }, [state.calEvent.value, translate]);

  const attendeeData = React.useMemo(() => {
    const parsed = JSON.parse(state.attendee.value);
    return {
      ...parsed,
      language: {
        translate,
        locale: "en"
      }
    };
  }, [state.attendee.value, translate]);

  try {
    return (
      <OrganizerLocationChangeEmail
        calEvent={calEventData}
        attendee={attendeeData}
        newSeat={state.newSeat.value}
        attendeeCancelled={state.attendeeCancelled.value}
        timeZone={state.timeZone.value}
        includeAppsStatus={state.includeAppsStatus.value}
        locale={state.locale.value}
        timeFormat={state.timeFormat.value as TimeFormat}
        isOrganizer={state.isOrganizer.value}
        t={translate}
      />
    );
  } catch (error) {
    console.error('Error rendering email template:', error);
    return <div>Error rendering email template: {String(error)}</div>;
  }
}