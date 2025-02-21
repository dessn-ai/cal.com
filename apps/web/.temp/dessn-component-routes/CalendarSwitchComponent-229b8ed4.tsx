import React from 'react';
import { useParentState } from '../useIframeState';
import { CalendarSwitchComponent } from '../../../../packages/ui/components/calendar-switch/CalendarSwitch';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    title: {
      type: "string",
      value: "My Calendar",
      label: "Title",
    },
    externalId: {
      type: "string",
      value: "calendar-123",
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
      value: "Work Calendar",
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
      label: "Is Destination",
    },
    credentialId: {
      type: "number",
      value: 1,
      label: "Credential ID",
    },
    eventTypeId: {
      type: "number",
      value: 2,
      label: "Event Type ID",
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled",
    },
    isLoading: {
      type: "boolean",
      value: false,
      label: "Is Loading",
    },
  });

  return (
    <CalendarSwitchComponent
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
      isLoading={state.isLoading.value}
    >
      <input type="checkbox" checked={state.isChecked.value} readOnly />
    </CalendarSwitchComponent>
  );
}