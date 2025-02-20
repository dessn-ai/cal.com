import React from 'react';
import { useParentState } from '../useIframeState';
import { AvailableTimeSlots } from '../../../../packages/features/bookings/Booker/components/AvailableTimeSlots';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    extraDays: {
      type: "number",
      value: 3,
      label: "Extra Days",
    },
    limitHeight: {
      type: "boolean",
      value: true,
      label: "Limit Height",
    },
    isLoading: {
      type: "boolean",
      value: false,
      label: "Is Loading",
    },
    seatsPerTimeSlot: {
      type: "number",
      value: 5,
      label: "Seats Per Time Slot",
    },
    showAvailableSeatsCount: {
      type: "boolean",
      value: true,
      label: "Show Available Seats Count",
    },
    skipConfirmStep: {
      type: "boolean",
      value: false,
      label: "Skip Confirm Step",
    },
  });

  const mockEvent = {
    data: {
      length: 60,
      bookingFields: [],
      price: 0,
      currency: "USD",
      metadata: {},
    },
  };

  const mockLoadingStates = {
    creatingBooking: false,
    creatingRecurringBooking: false,
    creatingInstantBooking: false,
  };

  return (
    <AvailableTimeSlots
      extraDays={state.extraDays.value}
      limitHeight={state.limitHeight.value}
      isLoading={state.isLoading.value}
      seatsPerTimeSlot={state.seatsPerTimeSlot.value}
      showAvailableSeatsCount={state.showAvailableSeatsCount.value}
      event={mockEvent}
      loadingStates={mockLoadingStates}
      isVerificationCodeSending={false}
      renderConfirmNotVerifyEmailButtonCond={false}
      onSubmit={() => {}}
      skipConfirmStep={state.skipConfirmStep.value}
    />
  );
}