import React from 'react';
import { useParentState } from '../useIframeState';
import { IntervalLimitsManager } from '../../../../packages/features/eventtypes/components/tabs/limits/EventLimitsTab';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    propertyName: {
      type: "dropdown",
      value: "durationLimits",
      options: ["durationLimits", "bookingLimits"],
      label: "Property Name",
    },
    defaultLimit: {
      type: "number",
      value: 60,
      label: "Default Limit",
    },
    step: {
      type: "number",
      value: 15,
      label: "Step",
    },
    textFieldSuffix: {
      type: "string",
      value: "minutes",
      label: "Text Field Suffix",
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled",
    },
  });

  return (
    <IntervalLimitsManager
      propertyName={state.propertyName.value}
      defaultLimit={state.defaultLimit.value}
      step={state.step.value}
      textFieldSuffix={state.textFieldSuffix.value}
      disabled={state.disabled.value}
    />
  );
}