import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/videos/views/videos-single-view';
import { DehydratedState, QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default function ComponentPreview() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
      },
    },
  });

  const [state, setState] = useParentState({
    booking: {
      type: 'object',
      value: {
        user: {
          organization: null,
          name: 'John Doe',
          id: 1,
          email: 'john@example.com',
          username: 'johndoe',
          timeZone: 'America/New_York',
        },
        description: 'Meeting description',
        title: 'Team Meeting',
        metadata: {},
        id: 123,
        startTime: new Date().toISOString(),
        endTime: new Date(Date.now() + 3600000).toISOString(),
        references: [
          {
            type: 'zoom',
            id: 456,
            uid: 'abc123',
            meetingPassword: 'password123',
            meetingUrl: 'https://zoom.us/j/123456789',
          },
        ],
        attendees: [
          {
            name: 'Jane Smith',
            id: 2,
            email: 'jane@example.com',
            locale: 'en',
            timeZone: 'Europe/London',
            bookingId: 123,
            noShow: false,
            phoneNumber: '+1234567890',
          },
        ],
        uid: 'def456',
        userPrimaryEmail: 'john@example.com',
        customInputs: {},
        isRecorded: false,
      },
      label: 'Booking',
    },
    hasTeamPlan: {
      type: 'boolean',
      value: true,
      label: 'Has Team Plan',
    },
    calVideoLogo: {
      type: 'string',
      value: 'https://example.com/logo.png',
      label: 'Cal Video Logo',
    },
    trpcState: {
      type: 'object',
      value: {} as DehydratedState,
      label: 'TRPC State',
    },
    meetingPassword: {
      type: 'string',
      value: 'meetingpass123',
      label: 'Meeting Password',
    },
    meetingUrl: {
      type: 'string',
      value: 'https://meet.example.com/abc123',
      label: 'Meeting URL',
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ImportedComponent
        booking={state.booking.value}
        hasTeamPlan={state.hasTeamPlan.value}
        calVideoLogo={state.calVideoLogo.value}
        trpcState={state.trpcState.value}
        meetingPassword={state.meetingPassword.value}
        meetingUrl={state.meetingUrl.value}
      />
    </QueryClientProvider>
  );
}