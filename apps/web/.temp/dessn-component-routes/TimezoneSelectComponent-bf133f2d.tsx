import React, { useState } from 'react';
import { useParentState } from '../useIframeState';
import { TimezoneSelectComponent } from '../../../../packages/ui/components/form/timezone-select/TimezoneSelect';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    variant: {
      type: "dropdown",
      value: "default",
      options: ["default", "minimal"],
      label: "Variant",
    },
    isPending: {
      type: "boolean",
      value: false,
      label: "Is Pending",
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
    timezoneSelectCustomClassname: {
      type: "string",
      value: "",
      label: "Custom Classname",
    },
  });

  // Initialize with a default timezone value
  const [selectedTimezone, setSelectedTimezone] = useState({ value: "America/New_York", label: "New York" });

  const mockData = [
    { label: "New York", timezone: "America/New_York" },
    { label: "London", timezone: "Europe/London" },
    { label: "Tokyo", timezone: "Asia/Tokyo" },
  ];

  return (
    <TimezoneSelectComponent
      variant={state.variant.value}
      isPending={state.isPending.value}
      size={state.size.value}
      grow={state.grow.value}
      timezoneSelectCustomClassname={state.timezoneSelectCustomClassname.value}
      data={mockData}
      value={selectedTimezone}
      onChange={(timezone) => setSelectedTimezone(timezone)}
    />
  );
}