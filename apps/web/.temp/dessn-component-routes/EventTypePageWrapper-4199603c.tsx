import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/event-types/views/event-types-single-view';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    type: {
      type: "number",
      value: 1,
      label: "Event Type ID",
    },
    eventType: {
      type: "dropdown",
      value: "default",
      options: ["default", "custom"],
      label: "Event Type",
    },
    trpcState: {
      type: "string",
      value: "{}",
      label: "TRPC State",
    },
  });

  const mockEventType = {
    schedule: null,
    instantMeetingSchedule: null,
    scheduleName: null,
    recurringEvent: null,
    bookingLimits: null,
    durationLimits: null,
    eventTypeColor: null,
    locations: [],
    metadata: {},
    customInputs: [],
    users: [],
    bookerUrl: "",
    children: [],
    title: "Mock Event",
    slug: "mock-event",
    description: null,
    hidden: false,
    id: 1,
    length: 30,
    timeZone: null,
    destinationCalendar: null,
    team: null,
    hashedLink: [],
    userId: null,
    webhooks: [],
    workflows: [],
    hosts: [],
    teamId: null,
    parent: null,
    offsetStart: 0,
    useEventLevelSelectedCalendars: false,
    eventName: null,
    bookingFields: [],
    periodType: "UNLIMITED",
    periodStartDate: null,
    periodEndDate: null,
    periodDays: null,
    periodCountCalendarDays: null,
    lockTimeZoneToggleOnBookingPage: false,
    requiresConfirmation: false,
    requiresConfirmationWillBlockSlot: false,
    requiresConfirmationForFreeEmail: false,
    requiresBookerEmailVerification: false,
    canSendCalVideoTranscriptionEmails: false,
    autoTranslateDescriptionEnabled: false,
    disableGuests: false,
    hideCalendarNotes: false,
    hideCalendarEventDetails: false,
    minimumBookingNotice: 0,
    beforeEventBuffer: 0,
    afterEventBuffer: 0,
    seatsPerTimeSlot: null,
    onlyShowFirstAvailableSlot: false,
    seatsShowAttendees: null,
    seatsShowAvailabilityCount: null,
    schedulingType: null,
    price: 0,
    currency: "USD",
    slotInterval: null,
    successRedirectUrl: null,
    forwardParamsSuccessRedirect: null,
    isInstantEvent: false,
    instantMeetingExpiryTimeOffsetInSeconds: 0,
    instantMeetingParameters: [],
    assignAllTeamMembers: false,
    assignRRMembersUsingSegment: false,
    rrSegmentQueryValue: null,
    useEventTypeDestinationCalendarEmail: false,
    isRRWeightsEnabled: false,
    maxLeadThreshold: null,
    allowReschedulingPastBookings: false,
    rescheduleWithSameRoundRobinHost: false,
    secondaryEmailId: null,
    owner: null,
    aiPhoneCallConfig: null,
    fieldTranslations: [],
  };

  return (
    <ImportedComponent
      type={state.type.value}
      eventType={state.eventType.value === "default" ? mockEventType : undefined}
      trpcState={JSON.parse(state.trpcState.value)}
    />
  );
}