import React from 'react';
import { useParentState } from '../useIframeState';
import { MonthlyDigestEmail } from '../../../../packages/emails/src/templates/MonthlyDigestEmail';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    language: {
      type: "dropdown",
      value: "en",
      options: ["en", "es", "fr", "de"],
      label: "Language",
    },
    Created: {
      type: "number",
      value: 50,
      label: "Created Events",
    },
    Completed: {
      type: "number",
      value: 40,
      label: "Completed Events",
    },
    Rescheduled: {
      type: "number",
      value: 5,
      label: "Rescheduled Events",
    },
    Cancelled: {
      type: "number",
      value: 5,
      label: "Cancelled Events",
    },
    subject: {
      type: "string",
      value: "Your Monthly Digest",
      label: "Email Subject",
    },
    title: {
      type: "string",
      value: "Monthly Digest",
      label: "Email Title",
    },
    hideLogo: {
      type: "boolean",
      value: false,
      label: "Hide Logo",
    },
  });

  const mockTFunction = (key: string, options?: any) => {
    const translations: { [key: string]: string } = {
      "verify_email_subject": "Verify your email",
      "your_monthly_digest": "Your Monthly Digest",
      "hi_user_name": "Hi {name}",
      "summary_of_events_for_your_team_for_the_last_30_days": "Here's a summary of events for your team {teamName} for the last 30 days",
      "events_created": "Events Created",
      "completed": "Completed",
      "rescheduled": "Rescheduled",
      "cancelled": "Cancelled",
      "most_popular_events": "Most Popular Events",
      "bookings": "Bookings",
      "most_booked_members": "Most Booked Members",
      "happy_scheduling": "Happy scheduling",
      "the_calcom_team": "The {companyName} team",
    };

    if (options) {
      let translatedText = translations[key] || key;
      Object.keys(options).forEach((optionKey) => {
        translatedText = translatedText.replace(`{${optionKey}}`, options[optionKey]);
      });
      return translatedText;
    }

    return translations[key] || key;
  };

  const mockData = {
    language: mockTFunction,
    Created: state.Created.value,
    Completed: state.Completed.value,
    Rescheduled: state.Rescheduled.value,
    Cancelled: state.Cancelled.value,
    mostBookedEvents: [
      { eventTypeId: 1, eventTypeName: "Meeting", count: 20 },
      { eventTypeId: 2, eventTypeName: "Interview", count: 15 },
    ],
    membersWithMostBookings: [
      { userId: 1, user: { id: 1, name: "John Doe", email: "john@example.com", avatar: null, username: "johndoe" }, count: 25 },
      { userId: 2, user: { id: 2, name: "Jane Smith", email: "jane@example.com", avatar: null, username: "janesmith" }, count: 20 },
    ],
    admin: { email: "admin@example.com", name: "Admin User" },
    team: { name: "Sample Team", id: 1 },
  };

  return (
    <MonthlyDigestEmail
      {...mockData}
      subject={state.subject.value}
      title={state.title.value}
      hideLogo={state.hideLogo.value}
    />
  );
}