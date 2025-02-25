import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/videos/views/videos-single-view';

import { DehydratedState } from '@tanstack/react-query';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    meetingUrl: {
      type: "string",
      value: "https://example.com/meeting",
      label: "Meeting URL",
    },
    meetingPassword: {
      type: "string",
      value: "password123",
      label: "Meeting Password",
    },
    hasTeamPlan: {
      type: "boolean",
      value: true,
      label: "Has Team Plan",
    },
    calVideoLogo: {
      type: "string",
      value: "https://example.com/logo.png",
      label: "Cal Video Logo",
    },
  });

  const mockBooking = {
    endTime: new Date(Date.now() + 3600000).toISOString(), // 1 hour from now
    startTime: new Date().toISOString(),
    title: "Mock Booking",
    user: {
      timeZone: "UTC",
      name: "John Doe",
      email: "john@example.com",
    },
    attendees: [
      { id: 1, name: "Jane Doe", email: "jane@example.com" },
    ],
    description: "This is a mock booking description.",
  };

  const mockTrpcState: DehydratedState = {
    mutations: [],
    queries: [],
  };

  return (
    <ImportedComponent
      booking={mockBooking}
      hasTeamPlan={state.hasTeamPlan.value}
      calVideoLogo={state.calVideoLogo.value}
      trpcState={mockTrpcState}
      meetingPassword={state.meetingPassword.value}
      meetingUrl={state.meetingUrl.value}
    />
  );
}