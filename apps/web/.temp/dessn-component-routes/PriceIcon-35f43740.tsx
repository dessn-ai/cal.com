import React from 'react';
import { useParentState } from '../useIframeState';
import { PriceIcon } from '../../../../packages/features/bookings/components/event-meta/PriceIcon';


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
      value: "h-5 w-5",
      label: "Class Name",
    },
  });

  return (
    <PriceIcon
      currency={state.currency.value}
      className={state.className.value}
    />
  );
}