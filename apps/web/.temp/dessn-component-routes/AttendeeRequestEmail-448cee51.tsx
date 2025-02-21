import React from 'react';
import { useParentState } from '../useIframeState';
import { AttendeeRequestEmail } from '../../../../packages/emails/src/templates/AttendeeRequestEmail';

// Override the Prisma module directly
const mockPrisma = {
  prisma: {
    booking: {
      findFirst: () => Promise.resolve(null),
      findUnique: () => Promise.resolve(null),
      findMany: () => Promise.resolve([]),
      create: () => Promise.resolve(null),
      update: () => Promise.resolve(null),
      delete: () => Promise.resolve(null),
    },
    user: {
      findFirst: () => Promise.resolve(null),
      findUnique: () => Promise.resolve(null),
      findMany: () => Promise.resolve([]),
      create: () => Promise.resolve(null),
      update: () => Promise.resolve(null),
      delete: () => Promise.resolve(null),
    },
    $transaction: (ops: any) => Promise.all(ops),
  }
};

// Override the module
(window as any).prisma = mockPrisma.prisma;

if (import.meta.hot) {
  import.meta.hot.accept(['@calcom/prisma'], (modules) => {
    const [prismaModule] = modules;
    if (prismaModule) {
      Object.assign(prismaModule, mockPrisma);
    }
  });
}

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    calEvent: {
      type: "string",
      value: JSON.stringify({
        type: "default",
        title: "Meeting with John",
        startTime: new Date().toISOString(),
        endTime: new Date(Date.now() + 3600000).toISOString(),
        organizer: {
          name: "Jane Organizer",
          email: "jane@example.com",
          timeZone: "America/New_York",
          language: {
            translate: (key: string) => key,
            locale: "en"
          }
        },
        attendees: [{
          name: "John Attendee",
          email: "john@example.com",
          timeZone: "America/Los_Angeles",
          language: {
            translate: (key: string) => key,
            locale: "en"
          }
        }],
        recurringEvent: null,
        uid: "test-uid",
        description: null,
        location: "Online",
        bookingId: 123,
        additionalNotes: null,
        customInputs: {},
        status: "ACCEPTED",
        responses: {},
        userFieldsResponses: {},
        seatsPerTimeSlot: null,
        seatsShowAttendees: false,
        seatsShowAvailableSeats: false,
        appsStatus: []
      }),
      label: "Calendar Event"
    },
    attendee: {
      type: "string",
      value: JSON.stringify({
        name: "John Attendee",
        email: "john@example.com",
        timeZone: "America/Los_Angeles",
        language: {
          translate: (key: string) => key,
          locale: "en"
        },
        timeFormat: "12h"
      }),
      label: "Attendee"
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
      value: "12h",
      options: ["12h", "24h"],
      label: "Time Format"
    },
    isOrganizer: {
      type: "boolean",
      value: false,
      label: "Is Organizer"
    }
  });

  // Wrap the component in error boundary
  try {
    return (
      <div className="email-preview">
        <AttendeeRequestEmail
          calEvent={JSON.parse(state.calEvent.value)}
          attendee={JSON.parse(state.attendee.value)}
          timeZone={state.timeZone.value}
          includeAppsStatus={state.includeAppsStatus.value}
          t={(key: string) => key}
          locale={state.locale.value}
          timeFormat={state.timeFormat.value}
          isOrganizer={state.isOrganizer.value}
        />
      </div>
    );
  } catch (error) {
    console.error('Error rendering email template:', error);
    return (
      <div style={{ color: 'red', padding: '20px' }}>
        Error rendering email template. Please check the console for more details.
      </div>
    );
  }
}