import React from 'react';
import { useParentState } from '../useIframeState';
import { EventAdvancedTab } from '../../../../packages/features/eventtypes/components/tabs/advanced/EventAdvancedTab';
import { FormProvider, useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const methods = useForm({
    defaultValues: {
      seatsPerTimeSlot: null,
      requiresConfirmation: false,
      successRedirectUrl: '',
      bookingFields: [
        {
          name: "name",
          type: "text",
          required: true,
          editable: "system",
        },
        {
          name: "email",
          type: "email",
          required: true,
          editable: "system",
        },
        {
          name: "location",
          type: "text",
          required: false,
          editable: "user",
        },
        {
          name: "guests",
          type: "text",
          required: false,
          editable: "user",
        },
      ],
      users: [{
        id: 1,
        name: "John Doe",
        email: "john@example.com"
      }],
      title: "Sample Event",
      length: 30,
      metadata: {
        apps: {},
        disableStandardEmails: { confirmation: {} }
      },
      locations: [],
      seatsShowAttendees: false,
      seatsShowAvailabilityCount: true,
      requiresConfirmationWillBlockSlot: false,
      useEventLevelSelectedCalendars: false,
      multiplePrivateLinks: [],
      hideCalendarNotes: false,
      hideCalendarEventDetails: false,
      seatsPerTimeSlotEnabled: false,
      lockTimeZoneToggleOnBookingPage: false,
      forwardParamsSuccessRedirect: false,
      canSendCalVideoTranscriptionEmails: false,
      requiresBookerEmailVerification: false,
      allowReschedulingPastBookings: false
    }
  });

  const [state, setState] = useParentState({
    eventType: {
      type: "object",
      value: {
        id: 1,
        title: "Sample Event",
        workflows: [],
        seatsPerTimeSlot: null,
        bookerUrl: "sample-url",
        schedulingType: null,
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