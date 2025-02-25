import React, { useRef } from 'react';
import { useParentState } from '../useIframeState';
import { Booker } from '../../../../packages/features/bookings/Booker/Booker';
import { AtomsWrapper } from '../../../../packages/platform/atoms/src/components/atoms-wrapper';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';

// HOC to inject form context
const withFormContext = (WrappedComponent) => {
  return (props) => {
    const formContext = useFormContext();
    return <WrappedComponent {...props} form={formContext} />;
  };
};

const BookerWithForm = withFormContext(Booker);

export default function ComponentPreview() {
  const bookerFormErrorRef = useRef<HTMLDivElement>(null);
  
  const formMethods = useForm({
    mode: "onSubmit",
    defaultValues: {
      name: '',
      email: '',
      notes: '',
      guests: [],
      responses: {},
      rescheduleReason: '',
      location: '',
      bookingFields: {},
      customInputs: {},
    },
  });

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
      layoutToUse: "month_view",
      isEmbed: false,
    },
    slots: {
      selectedTimeslot: null,
      scheduleUid: null,
      seatsPerTimeSlot: null,
      bookingUid: null,
      recurring: null,
      recurringCount: null,
      rescheduleUid: null,
    },
    bookerForm: {
      bookerFormErrorRef: bookerFormErrorRef,
      responseError: null,
      bookingFormData: null,
      errors: {},
      setErrors: () => {},
      clearErrors: () => {},
      setResponseError: () => {},
      setBookingFormData: () => {},
    },
    bookings: {
      handleBookEvent: async () => {
        console.log("Booking event handled");
        return { success: true };
      },
      handleBookingSuccess: () => {
        console.log("Booking success handled");
      },
      handleBookingError: () => {
        console.log("Booking error handled");
      },
      loading: false,
      timeFormat: 12,
      recurringBookings: {
        recurringCount: 0,
        recurringInterval: 0,
        recurringFrequency: null,
      },
    },
  };

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={formMethods.handleSubmit(() => {})}>
        <AtomsWrapper>
          <BookerWithForm {...bookerProps} />
        </AtomsWrapper>
      </form>
    </FormProvider>
  );
}