import React from 'react';
import { useParentState } from '../useIframeState';
import { PayIcon } from '../../../../packages/features/bookings/components/event-meta/PayIcon';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    currency: {
      type: "dropdown",
      value: "USD",
      options: ["USD", "EUR", "GBP", "BTC"],
      label: "Currency",
    },
    className: {
      type: "string",
      value: "text-gray-600",
      label: "Class Name",
    },
  });

  return (
    <PayIcon
      currency={state.currency.value}
      className={state.className.value}
    />
  );
}