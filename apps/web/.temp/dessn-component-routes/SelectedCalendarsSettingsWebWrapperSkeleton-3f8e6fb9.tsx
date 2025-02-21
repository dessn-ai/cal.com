import React from 'react';
import { useParentState } from '../useIframeState';
import { SelectedCalendarsSettingsWebWrapperSkeleton } from '../../../../packages/platform/atoms/selected-calendars/wrappers/SelectedCalendarsSettingsWebWrapper';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    onChanged: {
      type: "boolean",
      value: false,
      label: "On Changed",
    },
    fromOnboarding: {
      type: "boolean",
      value: false,
      label: "From Onboarding",
    },
    destinationCalendarId: {
      type: "string",
      value: "",
      label: "Destination Calendar ID",
    },
    isPending: {
      type: "boolean",
      value: false,
      label: "Is Pending",
    },
    classNames: {
      type: "string",
      value: "",
      label: "Class Names",
    },
    eventTypeId: {
      type: "number",
      value: 1,
      label: "Event Type ID",
    },
    disabledScope: {
      type: "dropdown",
      value: "user",
      options: ["user", "eventType"],
      label: "Disabled Scope",
    },
    scope: {
      type: "dropdown",
      value: "user",
      options: ["user", "eventType"],
      label: "Scope",
    },
    disableConnectionModification: {
      type: "boolean",
      value: false,
      label: "Disable Connection Modification",
    },
  });

  return (
    <SelectedCalendarsSettingsWebWrapperSkeleton />
  );
}