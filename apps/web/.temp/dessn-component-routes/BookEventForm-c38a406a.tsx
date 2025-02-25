import React from 'react';
import { useParentState } from '../useIframeState';
import { BookEventForm } from '../../../../packages/features/bookings/Booker/components/BookEventForm/BookEventForm';

import { useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    onCancel: {
      type: "boolean",
      value: true,
      label: "Show Cancel Button",
    },
    rescheduleUid: {
      type: "string",
      value: null,
      label: "Reschedule UID",
    },
    isPlatform: {
      type: "boolean",
      value: false,
      label: "Is Platform",
    },
    shouldRenderCaptcha: {
      type: "boolean",
      value: false,
      label: "Should Render Captcha",
    },
  });

  const errorRef = React.useRef(null);
  const bookingForm = useForm();

  const mockEventQuery = {
    isError: false,
    isPending: false,
    data: {
      price: 0,
      currency: "USD",
      metadata: {},
      bookingFields: [],
      locations: [],
    },
  };

  return (
    <BookEventForm
      onCancel={state.onCancel.value ? () => console.log("Cancelled") : undefined}
      eventQuery={mockEventQuery}
      rescheduleUid={state.rescheduleUid.value}
      onSubmit={() => console.log("Submitted")}
      errorRef={errorRef}
      errors={{}}
      loadingStates={{
        creatingBooking: false,
        creatingRecurringBooking: false,
      }}
      renderConfirmNotVerifyEmailButtonCond={false}
      bookingForm={bookingForm}
      extraOptions={{}}
      isVerificationCodeSending={false}
      isPlatform={state.isPlatform.value}
      shouldRenderCaptcha={state.shouldRenderCaptcha.value}
    />
  );
}