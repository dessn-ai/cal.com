import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/platform/atoms/event-types/wrappers/EventAdvancedWebWrapper';
import { FormProvider, useForm } from 'react-hook-form';
import { trpc } from '@calcom/trpc/react';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    eventType: {
      type: 'object',
      value: {
        id: 1,
        title: 'Test Event',
        length: 30,
        description: '',
        requiresConfirmation: false,
        currency: 'USD',
        periodType: 'UNLIMITED',
        periodStartDate: null,
        periodEndDate: null,
        periodDays: null,
        periodCountCalendarDays: false,
        requiresBookerEmailVerification: false,
        price: 0,
        successRedirectUrl: '',
        bookingLimits: null,
        durationLimits: null,
        hidden: false,
        hideCalendarNotes: false,
        minimumBookingNotice: 120,
        beforeEventBuffer: 0,
        afterEventBuffer: 0,
        seatsPerTimeSlot: null,
        seatsShowAttendees: null,
        seatsShowAvailableSeatsCount: null,
        schedulingType: null,
        workflows: [],
        metadata: {},
        slotInterval: null,
        customInputs: [],
        locations: [],
        destinationCalendar: null,
        recurringEvent: null,
        hashedLink: null,
        bookingFields: [],
        timeZone: null,
        availability: [],
        users: [],
        hosts: [],
        schedule: null,
        webhooks: [],
        children: [],
        parentId: null,
        owner: null,
        hosts: [],
        assignedTo: [],
        bookingFieldsWithSystemFields: [],
        offsetStart: 0,
        offsetEnd: 0,
        requiresBookerEmailVerification: false,
        useEventTypeDestinationCalendarEmail: false,
        bookingLimits: {
          PER_DAY: null,
          PER_WEEK: null,
          PER_MONTH: null,
          PER_YEAR: null,
        },
        durationLimits: {
          PER_DAY: null,
          PER_WEEK: null,
          PER_MONTH: null,
          PER_YEAR: null,
        },
        apiVersion: 2,
        position: 0,
        isInstantEvent: false,
        userId: 1,
        users: [],
        bookingFields: [],
        teamId: null,
        hashedLink: null,
        bookingFeatures: {
          seats: false,
          recurring: false,
          disableGuests: false,
          requiresConfirmation: false,
          requiresBookerEmailVerification: false,
        },
      },
      label: 'Event Type',
    },
    team: {
      type: 'object',
      value: null,
      label: 'Team',
    },
    user: {
      type: 'object',
      value: {
        email: 'user@example.com',
        secondaryEmails: [],
        theme: null,
        defaultBookerLayouts: null,
        id: 1,
        name: 'Test User',
        timeZone: 'UTC',
        weekStart: 'Monday',
        startTime: 0,
        endTime: 1440,
        bufferTime: 0,
        hideBranding: false,
        credentials: [],
        schedules: [],
        selectedCalendars: [],
        completedOnboarding: true,
        locale: 'en',
      },
      label: 'User',
    },
    isUserLoading: {
      type: 'boolean',
      value: false,
      label: 'Is User Loading',
    },
  });

  const methods = useForm({
    defaultValues: {
      ...state.eventType.value,
    },
  });

  const showToast = (message: string, variant: 'success' | 'warning' | 'error') => {
    console.log(`Toast: ${message} (${variant})`);
  };

  // Mock trpc.viewer.connectedCalendars.useQuery
  const mockUseQuery = () => ({
    data: [],
    isPending: false,
    error: null,
  });

  // Mock trpc object
  const mockTrpc = {
    viewer: {
      connectedCalendars: {
        useQuery: mockUseQuery,
      },
    },
  };

  return (
    <FormProvider {...methods}>
      <ImportedComponent
        eventType={state.eventType.value}
        team={state.team.value}
        user={state.user.value}
        isUserLoading={state.isUserLoading.value}
        showToast={showToast}
      />
    </FormProvider>
  );
}