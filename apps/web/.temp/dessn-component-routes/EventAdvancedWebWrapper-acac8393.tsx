import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/platform/atoms/event-types/wrappers/EventAdvancedWebWrapper';
import { useForm, FormProvider } from 'react-hook-form';
import { trpc } from '@calcom/trpc/react';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    eventType: {
      type: 'object',
      value: {
        id: 1,
        title: 'Test Event',
        length: 30,
        workflows: [],
        seatsPerTimeSlot: null,
        users: [{ id: 1, name: 'Test User' }],
        schedulingType: null,
        bookerUrl: 'test-event',
        metadata: {
          apps: {
            stripe: {
              enabled: false,
              paymentOption: null
            }
          }
        }
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
      },
      label: 'User',
    },
    isUserLoading: {
      type: 'boolean',
      value: false,
      label: 'Is User Loading',
    },
  });

  const showToast = (message: string, variant: 'success' | 'warning' | 'error') => {
    console.log(`Toast: ${message} (${variant})`);
  };

  // Initialize form methods
  const methods = useForm({
    defaultValues: {
      ...state.eventType.value,
      bookingFields: [],
      locations: [],
      seatsPerTimeSlotEnabled: false,
      requiresConfirmation: false,
      hideCalendarNotes: false,
      hideCalendarEventDetails: false,
      successRedirectUrl: '',
      forwardParamsSuccessRedirect: false,
      multiplePrivateLinks: [],
      seatsShowAttendees: false,
      seatsShowAvailabilityCount: false,
      lockTimeZoneToggleOnBookingPage: false,
      allowReschedulingPastBookings: false,
      eventTypeColor: null,
      rescheduleWithSameRoundRobinHost: false,
      metadata: {
        disableStandardEmails: {
          confirmation: {
            attendee: false,
            host: false
          },
          all: {
            attendee: false,
            host: false
          }
        }
      }
    },
  });

  // Mock trpc.viewer.connectedCalendars.useQuery
  const mockUseQuery = () => ({
    data: {
      connectedCalendars: [],
      destinationCalendar: null
    },
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