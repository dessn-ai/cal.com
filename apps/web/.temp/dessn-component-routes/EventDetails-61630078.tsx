import React from 'react';
import { useParentState } from '../useIframeState';
import { EventDetails } from '../../../../packages/features/bookings/components/event-meta/Details';

import { EventDetailBlocks } from '../../../../packages/features/bookings/types';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    currency: {
      type: "string",
      value: "USD",
      label: "Currency",
    },
    price: {
      type: "number",
      value: 100,
      label: "Price",
    },
    requiresConfirmation: {
      type: "boolean",
      value: true,
      label: "Requires Confirmation",
    },
    length: {
      type: "number",
      value: 60,
      label: "Length (minutes)",
    },
    isDynamic: {
      type: "boolean",
      value: false,
      label: "Is Dynamic",
    },
  });

  const event = {
    currency: state.currency.value,
    price: state.price.value,
    locations: [{ type: "inPerson", address: "123 Main St" }],
    requiresConfirmation: state.requiresConfirmation.value,
    recurringEvent: null,
    length: state.length.value,
    metadata: {},
    isDynamic: state.isDynamic.value,
  };

  return (
    <EventDetails
      event={event}
      blocks={[
        EventDetailBlocks.DURATION,
        EventDetailBlocks.LOCATION,
        EventDetailBlocks.REQUIRES_CONFIRMATION,
        EventDetailBlocks.PRICE,
      ]}
    />
  );
}