import React from 'react';
import { useParentState } from '../useIframeState';
import { EventAdvancedTab } from '../../../../packages/features/eventtypes/components/tabs/advanced/EventAdvancedTab';
import { FormProvider, useForm } from 'react-hook-form';

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
        length: 30,
        locations: [],
        metadata: {
          apps: {},
          disableStandardEmails: {
            confirmation: {
              host: false,
              attendee: false
            }
          }
        },
        bookingFields: [
          {
            name: "name",
            type: "text",
            required: true,
            variant: "default"
          },
          {
            name: "email",
            type: "email",
            required: true
          },
          {
            name: "location",
            type: "text",
            required: false
          },
          {
            name: "guests",
            type: "text",
            required: false,
            hidden: false
          }
        ],
        users: [{
          id: 1,
          name: "John Doe",
          email: "john@example.com"
        }],
        schedulingType: null,
        requiresConfirmation: false,
        requiresBookerEmailVerification: false,
        hideCalendarNotes: false,
        hideCalendarEventDetails: false,
        successRedirectUrl: "",
        seatsShowAttendees: true,
        seatsShowAvailabilityCount: true,
        lockTimeZoneToggleOnBookingPage: false,
        eventTypeColor: null,
        periodType: "UNLIMITED",
        periodStartDate: null,
        periodEndDate: null,
        periodDays: null,
        periodCountCalendarDays: false,
        requiresConfirmationWillBlockSlot: false,
        useEventTypeDestinationCalendarEmail: false,
        secondaryEmailId: -1
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
    },
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