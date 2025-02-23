import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';

// Mock a simple bookings page component
const MockBookingsPage = ({ params, searchParams }) => {
  return (
    <div className="flex flex-col">
      <h1>Bookings Page</h1>
      <div>Status: {params.status}</div>
      <div className="mt-4">
        <div className="rounded-md border p-4">
          <h2>Bookings List</h2>
          <p>Showing {params.status} bookings</p>
        </div>
      </div>
    </div>
  );
};

export default function ComponentPreview() {
  const [state] = useParentState({
    status: {
      type: "dropdown",
      value: "upcoming",
      options: ["upcoming", "past", "cancelled", "unconfirmed"],
      label: "Status",
    },
  });

  const mockParams = {
    params: {
      status: state.status.value,
    },
    searchParams: {},
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="p-4">
        <MockBookingsPage {...mockParams} />
      </div>
    </Suspense>
  );
}