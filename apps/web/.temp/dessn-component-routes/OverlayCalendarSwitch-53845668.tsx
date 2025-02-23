import React from 'react';
import { useParentState } from '../useIframeState';
import { OverlayCalendarSwitch } from '../../../../packages/features/bookings/Booker/components/OverlayCalendar/OverlayCalendarSwitch';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    enabled: {
      type: "boolean",
      value: false,
      label: "Enabled",
    },
    hasSession: {
      type: "boolean",
      value: true,
      label: "Has Session",
    },
  });

  const handleStateChange = (newState: boolean) => {
    setState('enabled', newState);
  };

  return (
    <OverlayCalendarSwitch
      enabled={state.enabled.value}
      hasSession={state.hasSession.value}
      onStateChange={handleStateChange}
    />
  );
}