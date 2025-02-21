import React from 'react';
import { useParentState } from '../useIframeState';
import { SelectedCalendarsSettingsWebWrapper } from '../../../../packages/platform/atoms/selected-calendars/wrappers/SelectedCalendarsSettingsWebWrapper';

import { SelectedCalendarSettingsScope } from '../../../../packages/platform/atoms/selected-calendars/wrappers/SelectedCalendarsSettingsWebWrapper';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    onChanged: {
      type: "string",
      value: "() => console.log('Changed')",
      label: "On Changed",
    },
    fromOnboarding: {
      type: "boolean",
      value: false,
      label: "From Onboarding",
    },
    destinationCalendarId: {
      type: "string",
      value: "calendar123",
      label: "Destination Calendar ID",
    },
    isPending: {
      type: "boolean",
      value: false,
      label: "Is Pending",
    },
    classNames: {
      type: "string",
      value: "custom-class",
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
    <SelectedCalendarsSettingsWebWrapper
      onChanged={() => eval(state.onChanged.value)}
      fromOnboarding={state.fromOnboarding.value}
      destinationCalendarId={state.destinationCalendarId.value}
      isPending={state.isPending.value}
      classNames={state.classNames.value}
      eventTypeId={state.eventTypeId.value}
      disabledScope={state.disabledScope.value as SelectedCalendarSettingsScope}
      scope={state.scope.value as SelectedCalendarSettingsScope}
      setScope={(scope) => setState('scope', scope)}
      disableConnectionModification={state.disableConnectionModification.value}
    />
  );
}