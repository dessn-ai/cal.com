import React from 'react';
import { useParentState } from '../useIframeState';
import { OverlayCalendarSettingsModal } from '../../../../packages/features/bookings/Booker/components/OverlayCalendar/OverlayCalendarSettingsModal';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    open: {
      type: "boolean",
      value: true,
      label: "Open",
    },
    isLoading: {
      type: "boolean",
      value: false,
      label: "Is Loading",
    },
  });

  const mockConnectedCalendars = [
    {
      credentialId: 1,
      integration: {
        logo: "/api/app-store/googlecalendar/icon.svg",
        name: "Google Calendar",
        title: "Google Calendar",
        slug: "google-calendar",
      },
      primary: {
        email: "user@example.com",
      },
      calendars: [
        { externalId: "calendar1", name: "Personal Calendar" },
        { externalId: "calendar2", name: "Work Calendar" },
      ],
    },
  ];

  const onClose = (state: boolean) => {
    setState("open", state);
  };

  const onClickNoCalendar = () => {
    console.log("No calendar clicked");
  };

  const onToggleConnectedCalendar = (externalCalendarId: string, credentialId: number) => {
    console.log(`Toggled calendar: ${externalCalendarId}, credential: ${credentialId}`);
  };

  const checkIsCalendarToggled = (externalCalendarId: string, credentialId: number) => {
    return Math.random() < 0.5; // Random toggle state for demonstration
  };

  return (
    <OverlayCalendarSettingsModal
      open={state.open.value}
      onClose={onClose}
      onClickNoCalendar={onClickNoCalendar}
      isLoading={state.isLoading.value}
      connectedCalendars={mockConnectedCalendars}
      onToggleConnectedCalendar={onToggleConnectedCalendar}
      checkIsCalendarToggled={checkIsCalendarToggled}
    />
  );
}