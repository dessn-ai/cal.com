import React from 'react';
import { useParentState } from '../useIframeState';

// Define TimeFormat enum locally instead of importing
enum TimeFormat {
  TWELVE_HOUR = '12h',
  TWENTY_FOUR_HOUR = '24h'
}

// Create a mock email component instead of using the real one
const MockOrganizerAddGuestsEmail = ({
  calEvent,
  attendee,
  timeZone,
  locale,
}) => {
  return (
    <div className="email-preview">
      <h2>Organizer Add Guests Email Preview</h2>
      <div className="email-content">
        <h3>Event Details</h3>
        <p><strong>Title:</strong> {calEvent.title}</p>
        <p><strong>Start Time:</strong> {new Date(calEvent.startTime).toLocaleString()}</p>
        <p><strong>End Time:</strong> {new Date(calEvent.endTime).toLocaleString()}</p>
        <p><strong>Time Zone:</strong> {timeZone}</p>
        
        <h3>Organizer</h3>
        <p><strong>Name:</strong> {calEvent.organizer.name}</p>
        <p><strong>Email:</strong> {calEvent.organizer.email}</p>
        
        <h3>Attendee</h3>
        <p><strong>Name:</strong> {attendee.name}</p>
        <p><strong>Email:</strong> {attendee.email}</p>
        
        <h3>Settings</h3>
        <p><strong>Locale:</strong> {locale}</p>
      </div>
    </div>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    calEvent: {
      type: 'string',
      value: JSON.stringify({
        type: 'default',
        title: 'Meeting',
        startTime: '2023-06-01T10:00:00',
        endTime: '2023-06-01T11:00:00',
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
      value: true,
      label: 'Is Organizer',
    },
  });

  try {
    return (
      <MockOrganizerAddGuestsEmail
        calEvent={JSON.parse(state.calEvent.value)}
        attendee={JSON.parse(state.attendee.value)}
        newSeat={state.newSeat.value}
        attendeeCancelled={state.attendeeCancelled.value}
        timeZone={state.timeZone.value}
        includeAppsStatus={state.includeAppsStatus.value}
        locale={state.locale.value}
        timeFormat={state.timeFormat.value as TimeFormat}
        isOrganizer={state.isOrganizer.value}
      />
    );
  } catch (error) {
    console.error('Error rendering email preview:', error);
    return <div>Error rendering email preview</div>;
  }
}