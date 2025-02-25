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
        locations: [],
        workflows: [],
        bookingFields: [],
        users: [{ id: 1, name: 'Test User' }],
        seatsPerTimeSlot: null,
        requiresConfirmation: false,
        metadata: {
          apps: {
            stripe: {
              enabled: false,
              paymentOption: null
            }
          },
          disableStandardEmails: {
            confirmation: {
              host: false,
              attendee: false
            }
          }
        },
        hideCalendarNotes: false,
        hideCalendarEventDetails: false,
        seatsShowAttendees: false,
        seatsShowAvailabilityCount: false,
        schedulingType: null,
        bookerUrl: 'test-url',
        successRedirectUrl: '',
        lockTimeZoneToggleOnBookingPage: false,
        requiresBookerEmailVerification: false,
        canSendCalVideoTranscriptionEmails: false,
        forwardParamsSuccessRedirect: false,
        multiplePrivateLinks: [],
        useEventLevelSelectedCalendars: false
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

  // Initialize form methods with complete default values
  const methods = useForm({
    defaultValues: {
      ...state.eventType.value,
      bookingFields: [],
      locations: [],
      workflows: [],
      seatsPerTimeSlot: null,
      requiresConfirmation: false,
      successRedirectUrl: '',
      hideCalendarNotes: false,
      hideCalendarEventDetails: false,
      metadata: {
        apps: {
          stripe: {
            enabled: false,
            paymentOption: null
          }
        },
        disableStandardEmails: {
          confirmation: {
            host: false,
            attendee: false
          }
        }
      }
    },
  });

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