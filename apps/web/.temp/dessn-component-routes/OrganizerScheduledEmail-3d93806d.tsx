import React from 'react';
import { OrganizerScheduledEmail } from '../../../../packages/emails/src/templates/OrganizerScheduledEmail';
import { SchedulingType } from "@calcom/prisma/enums";

// Mock TimeFormat enum since we can't import it
enum TimeFormat {
  TWELVE_HOUR = "12h",
  TWENTY_FOUR_HOUR = "24h"
}

// Create a simple wrapper component that doesn't use state management
export default function ComponentPreview() {
  const calEvent = {
    type: "default",
    title: "Meeting with John Doe",
    startTime: new Date().toISOString(),
    endTime: new Date(Date.now() + 3600000).toISOString(),
    organizer: {
      name: "Jane Organizer",
      email: "jane@example.com",
      timeZone: "America/New_York",
      language: {
        locale: "en"
      },
      timeFormat: TimeFormat.TWELVE_HOUR
    },
    attendees: [{
      email: "john@example.com",
      name: "John Attendee",
      timeZone: "Europe/London",
      language: {
        locale: "en"
      }
    }],
    uid: "mock-uid-123",
    description: "A sample meeting description",
    location: "Virtual",
    additionalNotes: "No additional notes",
    customInputs: {},
    responses: {},
    userFieldsResponses: {},
    schedulingType: SchedulingType.ROUND_ROBIN,
    duration: 60,
    recurringEvent: null,
    team: null,
    seatsPerTimeSlot: null,
    seatsShowAttendees: false,
    seatsShowAvailableSeats: false,
    appsStatus: [],
    language: {
      locale: "en"
    },
    bookingFields: [],
    metadata: {},
    hasHashedBookingLink: false,
    hideCalendarNotes: false,
    cancellationReason: undefined
  };

  const attendee = {
    name: "John Attendee",
    email: "john@example.com",
    timeZone: "Europe/London",
    language: {
      locale: "en"
    }
  };

  // Create a translation wrapper component
  const TranslatedEmail = () => {
    const t = (key: string) => key;
    
    const translatedCalEvent = {
      ...calEvent,
      t,
      language: {
        ...calEvent.language,
        translate: t
      },
      organizer: {
        ...calEvent.organizer,
        language: {
          ...calEvent.organizer.language,
          translate: t
        }
      },
      attendees: calEvent.attendees.map(att => ({
        ...att,
        language: {
          ...att.language,
          translate: t
        }
      }))
    };

    const translatedAttendee = {
      ...attendee,
      t,
      language: {
        ...attendee.language,
        translate: t
      }
    };

    return (
      <OrganizerScheduledEmail
        calEvent={translatedCalEvent}
        attendee={translatedAttendee}
        newSeat={false}
        attendeeCancelled={false}
      />
    );
  };

  return (
    <div>
      <TranslatedEmail />
    </div>
  );
}