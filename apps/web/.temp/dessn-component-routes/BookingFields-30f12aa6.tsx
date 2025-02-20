import React from 'react';
import { useParentState } from '../useIframeState';
import { BookingFields } from '../../../../packages/features/bookings/Booker/components/BookEventForm/BookingFields';

import { useForm, FormProvider } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    fields: {
      type: "string",
      value: JSON.stringify([
        {
          name: "name",
          type: "text",
          label: "Name",
          required: true,
        },
        {
          name: "email",
          type: "email",
          label: "Email",
          required: true,
        },
        {
          name: "location",
          type: "radioInput",
          label: "Location",
          required: true,
          options: [
            { value: "inPerson", label: "In-person" },
            { value: "phone", label: "Phone" },
          ],
          optionsInputs: {
            phone: { type: "phone", placeholder: "Enter phone number" },
          },
        },
      ]),
      label: "Booking Fields",
    },
    locations: {
      type: "string",
      value: JSON.stringify([
        { type: "inPerson", address: "123 Main St" },
        { type: "phone" },
      ]),
      label: "Locations",
    },
    rescheduleUid: {
      type: "string",
      value: "",
      label: "Reschedule UID",
    },
    isDynamicGroupBooking: {
      type: "boolean",
      value: false,
      label: "Is Dynamic Group Booking",
    },
  });

  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <BookingFields
        fields={JSON.parse(state.fields.value)}
        locations={JSON.parse(state.locations.value)}
        rescheduleUid={state.rescheduleUid.value}
        isDynamicGroupBooking={state.isDynamicGroupBooking.value}
        bookingData={null}
      />
    </FormProvider>
  );
}