import React, { useState } from 'react';
import { useParentState } from '../useIframeState';
import { TimezoneSelect } from '../../../../packages/ui/components/form/timezone-select/TimezoneSelect';

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

  const [selectedTimezone, setSelectedTimezone] = useState({ value: "America/New_York", label: "Eastern Time - US & Canada" });

  return (
    <TimezoneSelect
      variant={state.variant.value}
      timezoneSelectCustomClassname={state.timezoneSelectCustomClassname.value}
      size={state.size.value}
      grow={state.grow.value}
      value={selectedTimezone}
      onChange={setSelectedTimezone}
    />
  );
}