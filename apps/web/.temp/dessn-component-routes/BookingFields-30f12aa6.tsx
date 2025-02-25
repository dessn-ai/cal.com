import React from 'react';
import { useParentState } from '../useIframeState';
import { BookingFields } from '../../../../packages/features/bookings/Booker/components/BookEventForm/BookingFields';

import { useForm, FormProvider } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    fields: {
      type: 'string',
      value: JSON.stringify([
        { name: 'name', type: 'text', label: 'Name' },
        { name: 'email', type: 'email', label: 'Email' },
      ]),
      label: 'Booking Fields',
    },
    locations: {
      type: 'string',
      value: JSON.stringify([
        { type: 'inPerson', address: '123 Main St' },
        { type: 'video', link: 'https://zoom.us/j/123456789' },
      ]),
      label: 'Locations',
    },
    rescheduleUid: {
      type: 'string',
      value: '',
      label: 'Reschedule UID',
    },
    isDynamicGroupBooking: {
      type: 'boolean',
      value: false,
      label: 'Is Dynamic Group Booking',
    },
  });

  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <BookingFields
        fields={JSON.parse(state.fields.value)}
        locations={JSON.parse(state.locations.value)}
        rescheduleUid={state.rescheduleUid.value || undefined}
        isDynamicGroupBooking={state.isDynamicGroupBooking.value}
        bookingData={null}
      />
    </FormProvider>
  );
}