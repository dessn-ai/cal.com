import React from 'react';
import { useParentState } from '../useIframeState';
import { Price } from '../../../../packages/features/bookings/components/event-meta/Price';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    currency: {
      type: "dropdown",
      value: "USD",
      options: ["USD", "EUR", "GBP", "BTC"],
      label: "Currency",
    },
    price: {
      type: "number",
      value: 19.99,
      label: "Price",
    },
    displayAlternateSymbol: {
      type: "boolean",
      value: true,
      label: "Display Alternate Symbol",
    },
  });

  return (
    <Price
      currency={state.currency.value}
      price={state.price.value}
      displayAlternateSymbol={state.displayAlternateSymbol.value}
    />
  );
}