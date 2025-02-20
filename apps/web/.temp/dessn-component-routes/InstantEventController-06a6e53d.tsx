import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/eventtypes/components/tabs/instant/InstantEventController';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    eventType: {
      type: "object",
      value: {
        isInstantEvent: false,
        id: 1,
      },
      label: "Event Type",
    },
    paymentEnabled: {
      type: "boolean",
      value: false,
      label: "Payment Enabled",
    },
    isTeamEvent: {
      type: "boolean",
      value: true,
      label: "Is Team Event",
    },
  });

  return (
    <ImportedComponent
      eventType={state.eventType.value}
      paymentEnabled={state.paymentEnabled.value}
      isTeamEvent={state.isTeamEvent.value}
    />
  );
}