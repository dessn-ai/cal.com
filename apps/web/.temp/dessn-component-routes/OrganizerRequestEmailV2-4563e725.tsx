import React from 'react';
import { useParentState } from '../useIframeState';
import { OrganizerRequestEmailV2 } from '../../../../packages/emails/src/templates/OrganizerRequestEmailV2';

// Define TimeFormat enum locally
enum TimeFormat {
  TWELVE_HOUR = '12h',
  TWENTY_FOUR_HOUR = '24h'
}

// Mock translations object
const mockTranslations = {
  "someone_requested_an_event": "Someone requested an event",
  "confirm": "Confirm",
  "reject": "Reject",
  "event_awaiting_approval": "Event Awaiting Approval",
  "event_awaiting_approval_recurring": "Recurring Event Awaiting Approval",
  "event_awaiting_approval_subject": "Event Awaiting Approval"
};

// Create a serializable language object
const createLanguageObject = () => ({
  locale: 'en',
  // Instead of a function, use an object with translations
  translate: mockTranslations,
});

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    calEvent: {
      type: 'object',
      value: {
        type: 'default',
        title: 'Meeting with John Doe',
        startTime: new Date().toISOString(),
        endTime: new Date(Date.now() + 3600000).toISOString(),
        organizer: {
          name: 'Jane Smith',
          email: 'jane@example.com',
          timeZone: 'America/New_York',
          language: createLanguageObject(),
          id: '123', // Added required id field
        },
        attendees: [
          {
            name: 'John Doe',
            email: 'john@example.com',
            timeZone: 'America/Los_Angeles',
            language: createLanguageObject(),
          },
        ],
        uid: '123456',
        oneTimePassword: 'abc123',
      },
      label: 'Calendar Event',
    },
    attendee: {
      type: 'object',
      value: {
        name: 'John Doe',
        email: 'john@example.com',
        timeZone: 'America/Los_Angeles',
        language: createLanguageObject(),
      },
      label: 'Attendee',
    },
    newSeat: {
      type: 'boolean',
      value: false,
      label: 'New Seat',
    },
    attendeeCancelled: {
      type: 'boolean',
      value: false,
      label: 'Attendee Cancelled',
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
    timeFormat: {
      type: 'dropdown',
      value: TimeFormat.TWELVE_HOUR,
      options: [TimeFormat.TWELVE_HOUR, TimeFormat.TWENTY_FOUR_HOUR],
      label: 'Time Format',
    },
    isOrganizer: {
      type: 'boolean',
      value: true,
      label: 'Is Organizer',
    },
  });

  // Override the translate function after state is managed
  const calEventWithTranslate = {
    ...state.calEvent.value,
    organizer: {
      ...state.calEvent.value.organizer,
      language: {
        ...state.calEvent.value.organizer.language,
        translate: (key: string) => mockTranslations[key as keyof typeof mockTranslations] || key,
      },
    },
    attendees: state.calEvent.value.attendees.map(attendee => ({
      ...attendee,
      language: {
        ...attendee.language,
        translate: (key: string) => mockTranslations[key as keyof typeof mockTranslations] || key,
      },
    })),
  };

  const attendeeWithTranslate = {
    ...state.attendee.value,
    language: {
      ...state.attendee.value.language,
      translate: (key: string) => mockTranslations[key as keyof typeof mockTranslations] || key,
    },
  };

  return (
    <OrganizerRequestEmailV2
      calEvent={calEventWithTranslate}
      attendee={attendeeWithTranslate}
      newSeat={state.newSeat.value}
      attendeeCancelled={state.attendeeCancelled.value}
      timeZone={state.timeZone.value}
      includeAppsStatus={state.includeAppsStatus.value}
      timeFormat={state.timeFormat.value}
      isOrganizer={state.isOrganizer.value}
    />
  );
}