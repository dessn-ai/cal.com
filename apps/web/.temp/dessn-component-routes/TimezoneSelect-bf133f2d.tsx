import React from 'react';
import { useParentState } from '../useIframeState';
import { TimezoneSelectComponent } from '../../../../packages/ui/components/form/timezone-select/TimezoneSelect';

// Mock data for the timezone select
const MOCK_TIMEZONE_DATA = [
  { label: "San Francisco", timezone: "America/Los_Angeles" },
  { label: "New York", timezone: "America/New_York" },
  { label: "London", timezone: "Europe/London" },
  { label: "Tokyo", timezone: "Asia/Tokyo" },
];

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
      value: "",
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
  });

  return (
    <TimezoneSelectComponent
      variant={state.variant.value}
      timezoneSelectCustomClassname={state.timezoneSelectCustomClassname.value}
      size={state.size.value}
      grow={state.grow.value}
      isPending={false}
      data={MOCK_TIMEZONE_DATA}
      value={{ value: "America/New_York", label: "New York" }}
    />
  );
}