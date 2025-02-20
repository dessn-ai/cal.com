import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/bookings/UnconfirmedBookingBadge';

import { trpc } from '@calcom/trpc/react';

// Mock trpc.viewer.bookingUnconfirmedCount.useQuery
const mockUseQuery = () => ({
  data: 5,
});

// Mock trpc
const mockTrpc = {
  viewer: {
    bookingUnconfirmedCount: {
      useQuery: mockUseQuery,
    },
  },
};

// Mock useLocale
const mockUseLocale = () => ({
  t: (key: string) => key,
});

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    unconfirmedBookingCount: {
      type: "number",
      value: 5,
      label: "Unconfirmed Booking Count",
    },
  });

  // Override trpc with mock
  (trpc as any) = mockTrpc;

  // Mock useLocale
  (ImportedComponent as any).useLocale = mockUseLocale;

  return <ImportedComponent />;
}