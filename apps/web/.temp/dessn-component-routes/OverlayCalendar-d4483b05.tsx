import React from 'react';
import { useParentState } from '../useIframeState';
import { OverlayCalendar } from '../../../../packages/features/bookings/Booker/components/OverlayCalendar/OverlayCalendar';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    connectedCalendars: {
      type: "string",
      value: JSON.stringify([{ credentialId: 1, externalId: "calendar1" }]),
      label: "Connected Calendars",
    },
    overlayBusyDates: {
      type: "string",
      value: JSON.stringify([new Date().toISOString()]),
      label: "Overlay Busy Dates",
    },
    isOverlayCalendarEnabled: {
      type: "boolean",
      value: true,
      label: "Is Overlay Calendar Enabled",
    },
    loadingConnectedCalendar: {
      type: "boolean",
      value: false,
      label: "Loading Connected Calendar",
    },
    hasSession: {
      type: "boolean",
      value: true,
      label: "Has Session",
    },
  });

  const onToggleCalendar = (calendar: { credentialId: number; externalId: string }) => {
    console.log("Toggle calendar", calendar);
  };

  const handleClickNoCalendar = () => {
    console.log("No calendar clicked");
  };

  const handleClickContinue = () => {
    console.log("Continue clicked");
  };

  const handleSwitchStateChange = (newState: boolean) => {
    setState("isOverlayCalendarEnabled", newState);
  };

  return (
    <OverlayCalendar
      connectedCalendars={JSON.parse(state.connectedCalendars.value)}
      overlayBusyDates={JSON.parse(state.overlayBusyDates.value)}
      onToggleCalendar={onToggleCalendar}
      isOverlayCalendarEnabled={state.isOverlayCalendarEnabled.value}
      loadingConnectedCalendar={state.loadingConnectedCalendar.value}
      handleClickNoCalendar={handleClickNoCalendar}
      hasSession={state.hasSession.value}
      handleClickContinue={handleClickContinue}
      handleSwitchStateChange={handleSwitchStateChange}
    />
  );
}