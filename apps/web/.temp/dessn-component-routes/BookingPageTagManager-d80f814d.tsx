import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/BookingPageTagManager';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    eventType: {
      type: "dropdown",
      value: "default",
      options: ["default", "custom"],
      label: "Event Type",
    },
    metadata: {
      type: "string",
      value: '{"key": "value"}',
      label: "Metadata",
    },
    price: {
      type: "number",
      value: 0,
      label: "Price",
    },
    currency: {
      type: "string",
      value: "USD",
      label: "Currency",
    },
  });

  const eventType = {
    metadata: JSON.parse(state.metadata.value),
    price: state.price.value,
    currency: state.currency.value,
  };

  return <ImportedComponent eventType={eventType} />;
}