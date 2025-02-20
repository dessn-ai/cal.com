import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/bookings/views/bookings-single-view';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    userTimeFormat: {
      type: "number",
      value: 12,
      label: "User Time Format",
    },
    requiresLoginToUpdate: {
      type: "boolean",
      value: false,
      label: "Requires Login to Update",
    },
    rescheduledToUid: {
      type: "string",
      value: null,
      label: "Rescheduled To UID",
    },
    isLoggedInUserHost: {
      type: "boolean",
      value: true,
      label: "Is Logged In User Host",
    },
    internalNotePresets: {
      type: "string",
      value: JSON.stringify([
        { name: "Preset 1", id: 1, cancellationReason: "Reason 1" },
        { name: "Preset 2", id: 2, cancellationReason: "Reason 2" },
      ]),
      label: "Internal Note Presets",
    },
    tz: {
      type: "string",
      value: "America/New_York",
      label: "Timezone",
    },
    orgSlug: {
      type: "string",
      value: null,
      label: "Organization Slug",
    },
    themeBasis: {
      type: "string",
      value: null,
      label: "Theme Basis",
    },
    hideBranding: {
      type: "boolean",
      value: false,
      label: "Hide Branding",
    },
    profile: {
      type: "string",
      value: JSON.stringify({
        name: "John Doe",
        email: "john@example.com",
        theme: "light",
        brandColor: "#000000",
        darkBrandColor: "#ffffff",
        slug: "johndoe",
      }),
      label: "Profile",
    },
    eventType: {
      type: "string",
      value: JSON.stringify({
        periodStartDate: null,
        periodEndDate: null,
        metadata: {},
        recurringEvent: null,
        customInputs: [],
        bookingFields: [],
        isDynamic: false,
        periodCountCalendarDays: false,
        beforeEventBuffer: 0,
        afterEventBuffer: 0,
        periodType: "UNLIMITED",
        periodDays: null,
        slotInterval: null,
        offsetStart: 0,
        locations: [],
        disableGuests: false,
        minimumBookingNotice: 0,
        schedule: null,
        timeZone: null,
        successRedirectUrl: "",
        forwardParamsSuccessRedirect: false,
        teamId: null,
        scheduleId: null,
        availability: [],
        price: 0,
        currency: "USD",
        schedulingType: "COLLECTIVE",
        seatsPerTimeSlot: null,
        seatsShowAttendees: null,
        seatsShowAvailabilityCount: null,
        onlyShowFirstAvailableSlot: false,
        allowReschedulingPastBookings: false,
        id: 1,
        hideCalendarNotes: false,
        hideCalendarEventDetails: false,
        destinationCalendar: null,
        team: null,
        lockTimeZoneToggleOnBookingPage: false,
        requiresConfirmation: false,
        requiresConfirmationForFreeEmail: false,
        requiresBookerEmailVerification: false,
        bookingLimits: null,
        durationLimits: null,
        hidden: false,
        userId: 1,
        parentId: null,
        parent: null,
        owner: null,
        workflows: [],
        users: [],
        hosts: [],
        subsetOfHosts: [],
        assignAllTeamMembers: false,
        assignRRMembersUsingSegment: false,
        rrSegmentQueryValue: null,
        isRRWeightsEnabled: false,
        rescheduleWithSameRoundRobinHost: false,
        useEventTypeDestinationCalendarEmail: false,
        secondaryEmailId: null,
        secondaryEmail: null,
        autoTranslateDescriptionEnabled: false,
        fieldTranslations: [],
        maxLeadThreshold: null,
        useEventLevelSelectedCalendars: false,
        length: 60,
        slug: "default-event",
        title: "Default Event",
        eventName: "Default Event",
        description: "This is a default event",
        descriptionAsSafeHTML: "This is a default event",
        position: 0,
      }),
      label: "Event Type",
    },
    recurringBookings: {
      type: "string",
      value: null,
      label: "Recurring Bookings",
    },
    trpcState: {
      type: "string",
      value: JSON.stringify({}),
      label: "TRPC State",
    },
    dynamicEventName: {
      type: "string",
      value: null,
      label: "Dynamic Event Name",
    },
    bookingInfo: {
      type: "string",
      value: JSON.stringify({
        title: "Default Booking",
        description: "This is a default booking",
        metadata: {},
        id: 1,
        user: {
          name: "John Doe",
          id: 1,
          email: "john@example.com",
          username: "johndoe",
          avatarUrl: null,
          timeZone: "America/New_York",
        },
        status: "ACCEPTED",
        location: "Online",
        startTime: new Date().toISOString(),
        endTime: new Date(Date.now() + 3600000).toISOString(),
        eventType: {
          slug: "default-event",
          timeZone: "America/New_York",
          eventName: "Default Event",
          schedulingType: "COLLECTIVE",
        },
        attendees: [
          {
            name: "Attendee 1",
            email: "attendee1@example.com",
            timeZone: "America/New_York",
            phoneNumber: null,
          },
        ],
        seatsReferences: [],
        uid: "booking-uid",
        userPrimaryEmail: "john@example.com",
        eventTypeId: 1,
        customInputs: {},
        responses: {},
        cancellationReason: null,
        rejectionReason: null,
        rescheduled: false,
        fromReschedule: null,
        recurringEventId: null,
        smsReminderNumber: null,
      }),
      label: "Booking Info",
    },
    paymentStatus: {
      type: "string",
      value: JSON.stringify({
        success: true,
        currency: "USD",
        paymentOption: null,
        amount: 0,
        refunded: false,
      }),
      label: "Payment Status",
    },
  });

  return (
    <ImportedComponent
      userTimeFormat={state.userTimeFormat.value}
      requiresLoginToUpdate={state.requiresLoginToUpdate.value}
      rescheduledToUid={state.rescheduledToUid.value}
      isLoggedInUserHost={state.isLoggedInUserHost.value}
      internalNotePresets={JSON.parse(state.internalNotePresets.value)}
      tz={state.tz.value}
      orgSlug={state.orgSlug.value}
      themeBasis={state.themeBasis.value}
      hideBranding={state.hideBranding.value}
      profile={JSON.parse(state.profile.value)}
      eventType={JSON.parse(state.eventType.value)}
      recurringBookings={state.recurringBookings.value}
      trpcState={JSON.parse(state.trpcState.value)}
      dynamicEventName={state.dynamicEventName.value}
      bookingInfo={JSON.parse(state.bookingInfo.value)}
      paymentStatus={JSON.parse(state.paymentStatus.value)}
    />
  );
}