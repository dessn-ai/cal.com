import React from 'react';
import { useParentState } from '../useIframeState';
import { WipeMyCalActionButton } from '../../../../packages/app-store/wipemycalother/components/wipeMyCalActionButton';

import { trpc } from "@calcom/trpc/react";

// Mock trpc.viewer.integrations.useQuery
const mockUseQuery = () => ({
  isSuccess: true,
  isPending: false,
  data: {
    items: [
      {
        type: "wipemycal_other",
        userCredentialIds: [1]
      }
    ]
  }
});

// Replace the actual trpc hook with our mock
trpc.viewer.integrations.useQuery = mockUseQuery;

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    bookingsEmpty: {
      type: "boolean",
      value: false,
      label: "Bookings Empty"
    },
    bookingStatus: {
      type: "dropdown",
      value: "upcoming",
      options: ["upcoming", "recurring", "past", "cancelled", "unconfirmed"],
      label: "Booking Status"
    }
  });

  return (
    <WipeMyCalActionButton
      bookingsEmpty={state.bookingsEmpty.value}
      bookingStatus={state.bookingStatus.value as "upcoming" | "recurring" | "past" | "cancelled" | "unconfirmed"}
    />
  );
}