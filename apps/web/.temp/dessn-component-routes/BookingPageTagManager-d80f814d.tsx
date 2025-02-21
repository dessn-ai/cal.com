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
  });

  const mockEventType = {
    metadata: {},
    price: 0,
    currency: "USD",
  };

  return (
    <ImportedComponent
      eventType={
        state.eventType.value === "default"
          ? mockEventType
          : {
              ...mockEventType,
              metadata: { customField: "Custom Value" },
              price: 100,
              currency: "EUR",
            }
      }
    />
  );
}