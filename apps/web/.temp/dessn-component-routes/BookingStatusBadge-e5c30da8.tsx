import React from 'react';
import { useParentState } from '../useIframeState';
import { BookingStatusBadge } from '../../../../packages/features/insights/components/BookingStatusBadge';
import { BookingStatus } from "@calcom/prisma/enums";

// Mock InsightsProvider since we can't access the real one
const MockInsightsContext = React.createContext({});

const MockInsightsProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <MockInsightsContext.Provider value={{}}>
      {children}
    </MockInsightsContext.Provider>
  );
};

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
    <MockInsightsProvider>
      <BookingStatusBadge 
        bookingStatus={state.bookingStatus.value as BookingStatus}
      />
    </MockInsightsProvider>
  );
}