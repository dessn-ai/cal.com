import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/bookings/views/bookings-listing-view';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    status: {
      type: "dropdown",
      value: "upcoming",
      options: ["upcoming", "unconfirmed", "recurring", "past", "cancelled"],
      label: "Status",
    },
  });

  return (
    <ImportedComponent status={state.status.value as any} />
  );
}