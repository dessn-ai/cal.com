import React from 'react';
import { useParentState } from '../useIframeState';
import { EventAdvancedTab } from '../../../../packages/features/eventtypes/components/tabs/advanced/EventAdvancedTab';
import { useForm, FormProvider } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    eventType: {
      type: "object",
      value: {
        id: 1,
        title: "Sample Event",
        workflows: [],
        seatsPerTimeSlot: null,
        bookerUrl: "sample-url",
        locations: [],
        bookingFields: [],
        metadata: {
          apps: {},
          disableStandardEmails: { confirmation: { attendee: false, host: false } }
        },
        users: [{ id: 1, name: "John Doe" }],
        requiresConfirmation: false,
        requiresConfirmationWillBlockSlot: false,
        hideCalendarNotes: false,
        hideCalendarEventDetails: false,
        seatsShowAttendees: false,
        seatsShowAvailabilityCount: false,
        lockTimeZoneToggleOnBookingPage: false,
        successRedirectUrl: "",
        forwardParamsSuccessRedirect: false,
        useEventTypeDestinationCalendarEmail: false,
        secondaryEmailId: -1,
        canSendCalVideoTranscriptionEmails: false,
        requiresBookerEmailVerification: false,
        multiplePrivateLinks: [],
        allowReschedulingPastBookings: false,
        schedulingType: null,
        length: 30
      },
      label: "Event Type",
    },
    team: {
      type: "object",
      value: null,
      label: "Team",
    },
    calendarsQuery: {
      type: "object",
      value: {
        data: {
          connectedCalendars: [],
          destinationCalendar: null
        },
        isPending: false,
        error: null,
      },
      label: "Calendars Query",
    },
    user: {
      type: "object",
      value: {
        email: "user@example.com",
        secondaryEmails: [],
        theme: "light",
        defaultBookerLayouts: {},
      },
      label: "User",
    },
    isUserLoading: {
      type: "boolean",
      value: false,
      label: "Is User Loading",
    },
    showBookerLayoutSelector: {
      type: "boolean",
      value: true,
      label: "Show Booker Layout Selector",
    },
  });

  const showToast = (message: string, variant: "success" | "warning" | "error") => {
    console.log(`Toast: ${message} (${variant})`);
  };

  const methods = useForm({
    defaultValues: {
      ...state.eventType.value,
      bookingFields: [],
      metadata: {
        apps: {},
        disableStandardEmails: {
          confirmation: {
            attendee: false,
            host: false
          }
        }
      },
      workflows: [],
      locations: [],
      users: [{ id: 1, name: "John Doe" }],
      seatsPerTimeSlot: null,
      seatsShowAttendees: false,
      seatsShowAvailabilityCount: false,
      seatsPerTimeSlotEnabled: false,
      requiresConfirmation: false,
      requiresConfirmationWillBlockSlot: false,
      hideCalendarNotes: false,
      hideCalendarEventDetails: false,
      lockTimeZoneToggleOnBookingPage: false,
      successRedirectUrl: "",
      forwardParamsSuccessRedirect: false,
      useEventTypeDestinationCalendarEmail: false,
      secondaryEmailId: -1,
      canSendCalVideoTranscriptionEmails: false,
      requiresBookerEmailVerification: false,
      multiplePrivateLinks: [],
      allowReschedulingPastBookings: false,
      eventName: state.eventType.value.title,
      title: state.eventType.value.title
    }
  });

  return (
    <FormProvider {...methods}>
      <EventAdvancedTab
        eventType={state.eventType.value}
        team={state.team.value}
        calendarsQuery={state.calendarsQuery.value}
        user={state.user.value}
        isUserLoading={state.isUserLoading.value}
        showToast={showToast}
        showBookerLayoutSelector={state.showBookerLayoutSelector.value}
      />
    </FormProvider>
  );
}