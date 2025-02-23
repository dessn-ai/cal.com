import React, { useState } from 'react';
import { useParentState } from '../useIframeState';
import { Timezone } from '../../../../packages/platform/atoms/timezone/index';

export default function ComponentPreview() {
  const [selectedTimezone, setSelectedTimezone] = useState("America/New_York");
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
  });

  return (
    <Timezone
      variant={state.variant.value}
      timezoneSelectCustomClassname={state.timezoneSelectCustomClassname.value}
      size={state.size.value}
      grow={state.grow.value}
      value={selectedTimezone}
      onChange={(timezone) => setSelectedTimezone(timezone)}
    />
  );
}