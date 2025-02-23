import React from 'react';
import { useParentState } from '../useIframeState';
import { BookingStatusBadge } from '../../../../packages/features/insights/components/BookingStatusBadge';

import { BookingStatus } from "@calcom/prisma/enums";

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    bookingStatus: {
      type: "dropdown",
      value: "ACCEPTED",
      options: Object.values(BookingStatus),
      label: "Booking Status",
    },
  });

  return (
    <BookingStatusBadge 
      bookingStatus={state.bookingStatus.value as BookingStatus}
    />
  );
}