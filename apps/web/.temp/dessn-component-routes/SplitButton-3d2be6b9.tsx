import React from 'react';
import { useParentState } from '../useIframeState';
import { SplitButton } from '../../../../packages/ui/components/button/SplitButton';

import { Icon } from '../../../../packages/ui/components/icon';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    children: {
      type: "string",
      value: "Split Button",
      label: "Button Text",
    },
    color: {
      type: "dropdown",
      value: "primary",
      options: ["primary", "secondary", "minimal", "destructive"],
      label: "Button Color",
    },
    size: {
      type: "dropdown",
      value: "base",
      options: ["sm", "base", "lg"],
      label: "Button Size",
    },
    startIcon: {
      type: "string",
      value: "plus",
      label: "Start Icon",
    },
    loading: {
      type: "boolean",
      value: false,
      label: "Loading",
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled",
    },
  });

  const dropdownItems = [
    {
      label: "Option 1",
      action: () => console.log("Option 1 clicked"),
      icon: "calendar",
    },
    {
      label: "Option 2",
      action: () => console.log("Option 2 clicked"),
      icon: "clock",
    },
  ];

  return (
    <SplitButton
      color={state.color.value}
      size={state.size.value}
      StartIcon={state.startIcon.value ? (props) => <Icon {...props} name={state.startIcon.value} /> : undefined}
      loading={state.loading.value}
      disabled={state.disabled.value}
      dropdown={{
        items: dropdownItems,
      }}
    >
      {state.children.value}
    </SplitButton>
  );
}