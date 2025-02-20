import React from 'react';
import { useParentState } from '../useIframeState';

// Mock TimeFormat enum locally instead of importing
enum TimeFormat {
  TWELVE_HOUR = '12h',
  TWENTY_FOUR_HOUR = '24h'
}

// Mock BaseScheduledEmail component
const BaseScheduledEmail = ({ subject, title, children }: any) => (
  <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
    <h1>{title}</h1>
    <h2>{subject}</h2>
    {children}
  </div>
);

// Mock OrganizerScheduledEmail component
const OrganizerScheduledEmail = (props: any) => {
  const subject = props.newSeat ? "new_seat_subject" : "confirmed_event_type_subject";
  const title = props.calEvent.recurringEvent?.count
    ? "new_event_scheduled_recurring"
    : props.newSeat
    ? "new_seat_title"
    : "new_event_scheduled";

  return (
    <BaseScheduledEmail
      subject={props.t(subject)}
      title={props.t(title)}
      {...props}
    />
  );
};

// Mock OrganizerRescheduledEmail component
const OrganizerRescheduledEmail = (props: any) => (
  <OrganizerScheduledEmail
    title="event_has_been_rescheduled"
    headerType="calendarCircle"
    subject="event_type_has_been_rescheduled_on_time_date"
    {...props}
  />
);

export default function ComponentPreview() {
  const translate = (key: string, vars?: Record<string, any>) => {
    const translations: Record<string, string> = {
      'email_subject': 'Rescheduled: {title}',
      'event_has_been_rescheduled': 'Event has been rescheduled',
      'event_still_scheduled_through': 'This event is still scheduled through {throughHost}',
      'meeting_details': 'Meeting Details',
      'what': 'What',
      'when': 'When',
      'who': 'Who',
      'where': 'Where',
      'confirmed_event_type_subject': 'Confirmed: {eventType} with {name}',
      'new_event_scheduled': 'New Event Scheduled',
      'new_event_scheduled_recurring': 'New Recurring Event Scheduled',
      'new_seat_subject': 'New Seat Added',
      'new_seat_title': 'New Seat Confirmed',
      'attendee_no_longer_attending_subtitle': '{name} is no longer attending',
      'event_type_has_been_rescheduled_on_time_date': '{eventType} has been rescheduled to {time} on {date}',
    };

    let text = translations[key] || key;
    
    if (vars) {
      Object.entries(vars).forEach(([k, v]) => {
        text = text.replace(new RegExp(`{${k}}`, 'g'), String(v));
      });
    }
    
    return text;
  };

  const [state, setState] = useParentState({
    calEvent: {
      type: 'string',
      value: JSON.stringify({
        type: 'Meeting',
        title: 'Team Sync',
        startTime: '2023-06-15T10:00:00Z',
        endTime: '2023-06-15T11:00:00Z',
        organizer: {
          name: 'John Doe',
          email: 'john@example.com',
          timeZone: 'America/New_York',
          language: { translate, locale: 'en' },
          timeFormat: TimeFormat.TWELVE_HOUR,
        },
        attendees: [
          {
            name: 'Jane Smith',
            email: 'jane@example.com',
            timeZone: 'America/Los_Angeles',
            language: { translate, locale: 'en' },
          },
        ],
        schedulingType: 'default',
      }),
      label: 'Calendar Event',
    },
    attendee: {
      type: 'string',
      value: JSON.stringify({
        name: 'Jane Smith',
        email: 'jane@example.com',
        timeZone: 'America/Los_Angeles',
        language: { translate, locale: 'en' },
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

  const parsedCalEvent = JSON.parse(state.calEvent.value);
  const parsedAttendee = JSON.parse(state.attendee.value);

  return (
    <OrganizerRescheduledEmail
      calEvent={parsedCalEvent}
      attendee={parsedAttendee}
      newSeat={state.newSeat.value}
      attendeeCancelled={state.attendeeCancelled.value}
      timeZone={state.timeZone.value}
      includeAppsStatus={state.includeAppsStatus.value}
      t={translate}
      locale={state.locale.value}
      timeFormat={state.timeFormat.value as TimeFormat}
      isOrganizer={state.isOrganizer.value}
    />
  );
}