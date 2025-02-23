import React, { useState, useRef } from 'react';
import { useParentState } from '../useIframeState';
import { Booker } from '../../../../packages/features/bookings/Booker/Booker';
import { useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const [selectedTimeslot, setSelectedTimeslot] = useState<string | null>(null);
  const [isEmailVerificationModalVisible, setEmailVerificationModalVisible] = useState(false);
  const [isOverlayCalendarEnabled, setIsOverlayCalendarEnabled] = useState(false);
  const bookerFormErrorRef = useRef<HTMLDivElement>(null);
  const bookingForm = useForm();

  const handleBookEvent = async (timeSlot?: string) => {
    console.log('Booking event for timeslot:', timeSlot);
    return Promise.resolve();
  };

  const handleVerifyEmail = async () => {
    console.log('Verifying email');
    return Promise.resolve();
  };

  const [state, setState] = useParentState({
    eventSlug: {
      type: "string",
      value: "default-event",
      label: "Event Slug",
    },
    username: {
      type: "string",
      value: "johndoe",
      label: "Username",
    },
    hideBranding: {
      type: "boolean",
      value: false,
      label: "Hide Branding",
    },
    entity: {
      type: "dropdown",
      value: "team",
      options: ["team", "org"],
      label: "Entity Type",
    },
    isInstantMeeting: {
      type: "boolean",
      value: false,
      label: "Is Instant Meeting",
    },
    month: {
      type: "string",
      value: new Date().toISOString().slice(0, 7),
      label: "Month",
    },
    selectedDate: {
      type: "string",
      value: new Date().toISOString(),
      label: "Selected Date",
    },
    allowsDynamicBooking: {
      type: "boolean",
      value: true,
      label: "Allows Dynamic Booking",
    },
    isTeamEvent: {
      type: "boolean",
      value: false,
      label: "Is Team Event",
    },
    duration: {
      type: "number",
      value: 30,
      label: "Duration",
    },
    hashedLink: {
      type: "string",
      value: "",
      label: "Hashed Link",
    },
    userLocale: {
      type: "string",
      value: "en",
      label: "User Locale",
    },
  });

  const mockUser = {
    name: "Test User",
    username: state.username.value,
    email: "test@example.com",
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    defaultScheduleId: 1,
    avatar: "https://placekitten.com/200/200",
  };

  const mockTeam = {
    name: "Test Team",
    slug: "test-team",
    logo: "https://placekitten.com/100/100",
    bio: "Test team bio",
  };

  const bookerProps = {
    eventSlug: state.eventSlug.value,
    username: state.username.value,
    hideBranding: state.hideBranding.value,
    entity: {
      fromRedirectOfNonOrgLink: false,
      considerUnpublished: false,
      isUnpublished: false,
      orgSlug: state.entity.value === "org" ? "myorg" : null,
      teamSlug: state.entity.value === "team" ? "myteam" : null,
      name: "My Entity",
    },
    isInstantMeeting: state.isInstantMeeting.value,
    month: state.month.value,
    selectedDate: new Date(state.selectedDate.value),
    allowsDynamicBooking: state.allowsDynamicBooking.value,
    isTeamEvent: state.isTeamEvent.value,
    duration: state.duration.value,
    hashedLink: state.hashedLink.value,
    userLocale: state.userLocale.value,
    bookerLayout: {
      shouldShowFormInDialog: false,
      hasDarkBackground: false,
      extraDays: 7,
      columnViewExtraDays: { current: 7 },
      isMobile: false,
      layout: 'month_view',
      hideEventTypeDetails: false,
      isEmbed: false,
      bookerLayouts: {
        enabledLayouts: ['month_view', 'week_view', 'column_view'],
      }
    },
    slots: {
      selectedTimeslot,
      setSelectedTimeslot,
    },
    bookerForm: {
      bookerFormErrorRef,
      key: 'default-form',
      formEmail: '',
      bookingForm,
      errors: {},
    },
    bookings: {
      handleBookEvent,
      errors: {},
      loadingStates: {
        creatingBooking: false,
        creatingRecurringBooking: false,
        removingBooking: false,
        loadingBookings: false,
      },
      expiryTime: null,
      instantVideoMeetingUrl: null,
    },
    verifyEmail: {
      isEmailVerificationModalVisible,
      setEmailVerificationModalVisible,
      handleVerifyEmail,
      renderConfirmNotVerifyEmailButtonCond: true,
      isVerificationCodeSending: false,
    },
    calendars: {
      overlayBusyDates: [],
      isOverlayCalendarEnabled,
      connectedCalendars: [],
      loadingConnectedCalendar: false,
      onToggleCalendar: (calendar: any) => {
        console.log('Toggle calendar:', calendar);
      },
    },
    event: {
      isSuccess: true,
      isPending: false,
      data: {
        id: 1,
        title: "Test Event",
        length: 30,
        description: "Test event description",
        schedulingType: "ROUND_ROBIN",
        periodType: "UNLIMITED",
        slug: state.eventSlug.value,
        seatsPerTimeSlot: null,
        seatsShowAvailabilityCount: null,
        bookingFields: [],
        locations: [{ type: "integrations:daily" }],
        recurringEvent: null,
        price: 0,
        currency: "USD",
        metadata: {},
        team: mockTeam,
        users: [mockUser],
        owner: mockUser,
        assignedTo: [mockUser],
        hosts: [{ isFixed: true, user: mockUser }],
        entity: {
          name: "Test Entity",
          slug: "test-entity",
          logo: "https://placekitten.com/100/100",
          orgSlug: state.entity.value === "org" ? "myorg" : null,
          teamSlug: state.entity.value === "team" ? "myteam" : null,
        },
        requiresConfirmation: false,
        hideCalendarNotes: false,
        minimumBookingNotice: 0,
        beforeEventBuffer: 0,
        afterEventBuffer: 0,
        successRedirectUrl: null,
        paymentInfo: {
          price: 0,
          currency: "USD",
          paymentOption: "ON_BOOKING",
        },
        parentId: null,
        workflows: [],
        apps: {
          stripe: {
            enabled: false,
            price: 0,
            currency: "USD",
          },
        },
      }
    },
    schedule: {
      isLoading: false,
      isPending: false,
      isSuccess: true,
      data: {
        slots: {
          [new Date().toISOString().split('T')[0]]: [
            {
              time: new Date().toISOString(),
              attendees: 0,
              bookingUid: null,
            }
          ]
        },
        timeFormat: 24,
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      }
    }
  };

  return <Booker {...bookerProps} />;
}