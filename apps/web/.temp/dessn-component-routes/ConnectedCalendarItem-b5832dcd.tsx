import React from 'react';
import { useParentState } from '../useIframeState';
import { ConnectedCalendarItem } from '../../components/getting-started/components/ConnectedCalendarItem';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    name: {
      type: "string",
      value: "Google Calendar",
      label: "Name",
    },
    logo: {
      type: "string",
      value: "https://example.com/google-calendar-logo.png",
      label: "Logo URL",
    },
    externalId: {
      type: "string",
      value: "user@example.com",
      label: "External ID",
    },
    integrationType: {
      type: "string",
      value: "google_calendar",
      label: "Integration Type",
    },
  });

  const calendars = [
    {
      primary: true,
      isSelected: true,
      credentialId: 1,
      name: "Primary Calendar",
      readOnly: false,
      userId: 1,
      integration: "google_calendar",
      externalId: "primary@example.com",
    },
    {
      primary: null,
      isSelected: false,
      credentialId: 2,
      name: "Work Calendar",
      readOnly: false,
      userId: 1,
      integration: "google_calendar",
      externalId: "work@example.com",
    },
  ];

  return (
    <ConnectedCalendarItem
      name={state.name.value}
      logo={state.logo.value}
      externalId={state.externalId.value}
      integrationType={state.integrationType.value}
      calendars={calendars}
    />
  );
}