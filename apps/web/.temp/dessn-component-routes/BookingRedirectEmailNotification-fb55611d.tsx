import React from 'react';
import { useParentState } from '../useIframeState';
import { BookingRedirectEmailNotification } from '../../../../packages/emails/src/templates/BookingRedirectEmailNotification';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    language: {
      type: "dropdown",
      value: "en",
      options: ["en", "es", "fr", "de"],
      label: "Language",
    },
    fromEmail: {
      type: "string",
      value: "sender@example.com",
      label: "From Email",
    },
    eventOwner: {
      type: "string",
      value: "John Doe",
      label: "Event Owner",
    },
    toEmail: {
      type: "string",
      value: "recipient@example.com",
      label: "To Email",
    },
    toName: {
      type: "string",
      value: "Jane Smith",
      label: "To Name",
    },
    oldDates: {
      type: "string",
      value: "June 1, 2023 10:00 AM - 11:00 AM",
      label: "Old Dates",
    },
    dates: {
      type: "string",
      value: "June 15, 2023 2:00 PM - 3:00 PM",
      label: "New Dates",
    },
    action: {
      type: "dropdown",
      value: "add",
      options: ["add", "update", "cancel"],
      label: "Action",
    },
    subject: {
      type: "string",
      value: "Booking Redirect Notification",
      label: "Subject",
    },
    title: {
      type: "string",
      value: "Booking Redirect",
      label: "Title",
    },
    hideLogo: {
      type: "boolean",
      value: false,
      label: "Hide Logo",
    },
  });

  const mockLanguage = (key: string, options?: any) => {
    const translations: { [key: string]: string } = {
      booking_redirect_email_subject: "New Booking Redirect",
      booking_redirect_updated_email_subject: "Updated Booking Redirect",
      booking_redirect_cancelled_email_subject: "Cancelled Booking Redirect",
      booking_redirect_email_title: "New Booking Redirect",
      booking_redirect_updated_email_title: "Updated Booking Redirect",
      booking_redirect_cancelled_email_title: "Cancelled Booking Redirect",
      booking_redirect_email_description: `${options?.eventOwner} has redirected a booking for ${options?.dates}`,
      booking_redirect_updated_email_description: `${options?.eventOwner} has updated a redirected booking from ${options?.oldDates} to ${options?.dates}`,
      booking_redirect_cancelled_email_description: `${options?.eventOwner} has cancelled a redirected booking for ${options?.dates}`,
    };
    return translations[key] || key;
  };

  return (
    <BookingRedirectEmailNotification
      language={mockLanguage}
      fromEmail={state.fromEmail.value}
      eventOwner={state.eventOwner.value}
      toEmail={state.toEmail.value}
      toName={state.toName.value}
      oldDates={state.oldDates.value}
      dates={state.dates.value}
      action={state.action.value as "add" | "update" | "cancel"}
      subject={state.subject.value}
      title={state.title.value}
      hideLogo={state.hideLogo.value}
    />
  );
}