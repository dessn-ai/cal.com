import React from 'react';
import { useParentState } from '../useIframeState';
import { EventCalendarSwitch } from '../../../../packages/features/calendars/CalendarSwitch';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    title: {
      type: "string",
      value: "My Calendar",
      label: "Title",
    },
    externalId: {
      type: "string",
      value: "calendar123",
      label: "External ID",
    },
    type: {
      type: "string",
      value: "google",
      label: "Type",
    },
    isChecked: {
      type: "boolean",
      value: true,
      label: "Is Checked",
    },
    name: {
      type: "string",
      value: "Google Calendar",
      label: "Name",
    },
    isLastItemInList: {
      type: "boolean",
      value: false,
      label: "Is Last Item in List",
    },
    destination: {
      type: "boolean",
      value: true,
      label: "Destination",
    },
    credentialId: {
      type: "number",
      value: 1,
      label: "Credential ID",
    },
    eventTypeId: {
      type: "number",
      value: 123,
      label: "Event Type ID",
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled",
    },
  });

  return (
    <EventCalendarSwitch
      title={state.title.value}
      externalId={state.externalId.value}
      type={state.type.value}
      isChecked={state.isChecked.value}
      name={state.name.value}
      isLastItemInList={state.isLastItemInList.value}
      destination={state.destination.value}
      credentialId={state.credentialId.value}
      eventTypeId={state.eventTypeId.value}
      disabled={state.disabled.value}
    />
  );
}