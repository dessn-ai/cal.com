import React from 'react';
import type { CalendarEvent, Person } from "@calcom/types/Calendar";

interface BaseScheduledEmailProps {
  calEvent: CalendarEvent;
  attendee: Person;
  timeZone?: string;
  locale?: string;
  timeFormat?: number;
  t: (key: string) => string;
}

export const BaseScheduledEmail: React.FC<BaseScheduledEmailProps> = ({
  calEvent,
  attendee,
  timeZone,
  locale,
  t
}) => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <h2>{t("email_subject_attendee")}</h2>
      <div style={{ marginBottom: '24px' }}>
        <p><strong>{t("what")}:</strong> {calEvent.title}</p>
        <p><strong>{t("when")}:</strong> {new Date(calEvent.startTime).toLocaleString(locale, { timeZone })}</p>
        <p><strong>{t("who")}:</strong> {attendee.name}</p>
        {calEvent.location && (
          <p><strong>{t("where")}:</strong> {calEvent.location}</p>
        )}
      </div>
      <div style={{ marginTop: '24px', borderTop: '1px solid #ccc', paddingTop: '24px' }}>
        <p>{t("need_to_reschedule_or_cancel")}</p>
      </div>
    </div>
  );
};