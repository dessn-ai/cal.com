import React from 'react';
import { useParentState } from '../useIframeState';
import { Timezone } from '../../../../packages/platform/atoms/timezone/index';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    variant: {
      type: "dropdown",
      value: "default",
      options: ["default", "minimal"],
      label: "Variant",
    },
    timezoneSelectCustomClassname: {
      type: "string",
      value: "custom-timezone-select",
      label: "Custom Classname",
    },
    size: {
      type: "dropdown",
      value: "md",
      options: ["sm", "md"],
      label: "Size",
    },
    grow: {
      type: "boolean",
      value: false,
      label: "Grow",
    },
    selectedTimezone: {
      type: "string",
      value: Intl.DateTimeFormat().resolvedOptions().timeZone,
      label: "Selected Timezone",
    },
  });

  const handleTimezoneChange = (timezone: string) => {
    setState((prev) => ({
      ...prev,
      selectedTimezone: {
        ...prev.selectedTimezone,
        value: timezone,
      },
    }));
  };

  return (
    <Timezone
      variant={state.variant.value}
      timezoneSelectCustomClassname={state.timezoneSelectCustomClassname.value}
      size={state.size.value}
      grow={state.grow.value}
      value={state.selectedTimezone.value}
      onChange={handleTimezoneChange}
    />
  );
}