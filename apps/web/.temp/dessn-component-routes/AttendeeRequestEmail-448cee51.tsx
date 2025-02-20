import React from 'react';
import { useParentState } from '../useIframeState';

// Define TimeFormat enum locally to avoid external dependencies
enum TimeFormat {
  TWELVE_HOUR = 12,
  TWENTY_FOUR_HOUR = 24
}

// Mock translation function with variable support
const mockTranslate = (key: string, variables?: Record<string, string>) => {
  const translations: Record<string, string> = {
    "email_subject_attendee": "Meeting Confirmation",
    "what": "What",
    "when": "When",
    "who": "Who",
    "where": "Where",
    "need_to_reschedule_or_cancel": "Need to reschedule or cancel?",
    "booking_submitted": "Booking submitted",
    "booking_submitted_recurring": "Recurring booking submitted",
    "user_needs_to_confirm_or_reject_booking": "{user} needs to confirm or reject booking",
    "user_needs_to_confirm_or_reject_booking_recurring": "{user} needs to confirm or reject recurring booking",
    "booking_submitted_subject": "Booking: {title}"
  };

  let text = translations[key] || key;
  
  if (variables) {
    Object.entries(variables).forEach(([key, value]) => {
      text = text.replace(`{${key}}`, value);
    });
  }
  
  return text;
};

// Format date helper function
const formatDate = (date: Date, timeZone: string, locale: string, timeFormat: TimeFormat) => {
  return date.toLocaleString(locale, {
    timeZone,
    hour12: timeFormat === TimeFormat.TWELVE_HOUR,
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });
};

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
            translate: mockTranslate,
            locale: "en"
          }
        },
        attendees: [{
          name: "John Attendee",
          email: "john@example.com",
          timeZone: "America/Los_Angeles",
          language: {
            translate: mockTranslate,
            locale: "en"
          }
        }],
        recurringEvent: null,
        location: "Online Meeting",
        description: "Test meeting description"
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
          translate: mockTranslate,
          locale: "en"
        }
      }),
      label: "Attendee"
    },
    timeZone: {
      type: "string",
      value: "America/New_York",
      label: "Time Zone"
    },
    locale: {
      type: "string",
      value: "en",
      label: "Locale"
    },
    timeFormat: {
      type: "dropdown",
      value: TimeFormat.TWELVE_HOUR,
      options: [TimeFormat.TWELVE_HOUR, TimeFormat.TWENTY_FOUR_HOUR],
      label: "Time Format"
    }
  });

  const parsedCalEvent = JSON.parse(state.calEvent.value);
  const parsedAttendee = JSON.parse(state.attendee.value);

  const formattedStartTime = formatDate(
    new Date(parsedCalEvent.startTime),
    state.timeZone.value,
    state.locale.value,
    state.timeFormat.value as TimeFormat
  );

  return (
    <div className="preview-email-wrapper" style={{ padding: '20px', backgroundColor: '#f4f4f4', minHeight: '100vh' }}>
      <div style={{ 
        fontFamily: 'Arial, sans-serif',
        maxWidth: '600px',
        margin: '0 auto',
        backgroundColor: 'white',
        padding: '40px',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ 
          color: '#292929',
          fontSize: '24px',
          marginBottom: '24px',
          textAlign: 'center'
        }}>
          {mockTranslate("booking_submitted")}
        </h1>
        
        <div style={{ marginBottom: '32px' }}>
          <p style={{ 
            fontSize: '16px',
            color: '#4B5563',
            marginBottom: '8px'
          }}>
            {mockTranslate("user_needs_to_confirm_or_reject_booking", { user: parsedCalEvent.organizer.name })}
          </p>
        </div>

        <div style={{ 
          backgroundColor: '#F9FAFB',
          padding: '24px',
          borderRadius: '6px',
          marginBottom: '32px'
        }}>
          <p style={{ marginBottom: '16px' }}><strong>{mockTranslate("what")}:</strong> {parsedCalEvent.title}</p>
          <p style={{ marginBottom: '16px' }}><strong>{mockTranslate("when")}:</strong> {formattedStartTime}</p>
          <p style={{ marginBottom: '16px' }}><strong>{mockTranslate("who")}:</strong> {parsedAttendee.name}</p>
          {parsedCalEvent.location && (
            <p style={{ marginBottom: '16px' }}><strong>{mockTranslate("where")}:</strong> {parsedCalEvent.location}</p>
          )}
        </div>

        <div style={{ 
          borderTop: '1px solid #E5E7EB',
          paddingTop: '24px',
          color: '#6B7280',
          fontSize: '14px',
          textAlign: 'center'
        }}>
          <p>{mockTranslate("need_to_reschedule_or_cancel")}</p>
        </div>
      </div>
    </div>
  );
}