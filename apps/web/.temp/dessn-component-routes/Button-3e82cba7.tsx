import React from 'react';
import { useParentState } from '../useIframeState';
import { Button } from '../../../../packages/ui/components/button/Button';

import { Icon } from '../../../../packages/ui/components/icon';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    variant: {
      type: "dropdown",
      value: "button",
      options: ["button", "icon", "fab"],
      label: "Variant",
    },
    color: {
      type: "dropdown",
      value: "primary",
      options: ["primary", "secondary", "minimal", "destructive"],
      label: "Color",
    },
    size: {
      type: "dropdown",
      value: "base",
      options: ["xs", "sm", "base", "lg"],
      label: "Size",
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
    href: {
      type: "string",
      value: "",
      label: "Href",
    },
    tooltip: {
      type: "string",
      value: "",
      label: "Tooltip",
    },
    startIcon: {
      type: "string",
      value: "",
      label: "Start Icon",
    },
    endIcon: {
      type: "string",
      value: "",
      label: "End Icon",
    },
  });

  return (
    <Button
      variant={state.variant.value}
      color={state.color.value}
      size={state.size.value}
      loading={state.loading.value}
      disabled={state.disabled.value}
      href={state.href.value || undefined}
      tooltip={state.tooltip.value || undefined}
      StartIcon={state.startIcon.value ? state.startIcon.value : undefined}
      EndIcon={state.endIcon.value ? state.endIcon.value : undefined}
      onClick={() => console.log("Button clicked")}
    >
      Button Text
    </Button>
  );
}