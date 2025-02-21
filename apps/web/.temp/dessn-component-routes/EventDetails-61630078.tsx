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
    locations: {
      type: "string",
      value: JSON.stringify([{ type: "inPerson", address: "123 Main St" }]),
      label: "Locations",
    },
    requiresConfirmation: {
      type: "boolean",
      value: true,
      label: "Requires Confirmation",
    },
    recurringEvent: {
      type: "string",
      value: JSON.stringify({ freq: 1, interval: "weekly", count: 4 }),
      label: "Recurring Event",
    },
    length: {
      type: "number",
      value: 60,
      label: "Length (minutes)",
    },
    metadata: {
      type: "string",
      value: JSON.stringify({}),
      label: "Metadata",
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
    locations: JSON.parse(state.locations.value),
    requiresConfirmation: state.requiresConfirmation.value,
    recurringEvent: JSON.parse(state.recurringEvent.value),
    length: state.length.value,
    metadata: JSON.parse(state.metadata.value),
    isDynamic: state.isDynamic.value,
  };

  return (
    <EventDetails
      event={event}
      blocks={[
        EventDetailBlocks.DURATION,
        EventDetailBlocks.LOCATION,
        EventDetailBlocks.REQUIRES_CONFIRMATION,
        EventDetailBlocks.OCCURENCES,
        EventDetailBlocks.PRICE,
      ]}
    />
  );
}