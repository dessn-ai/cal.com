import React from 'react';
import { useParentState } from '../useIframeState';
import { Badge } from '../../../../packages/ui/components/badge/Badge';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    variant: {
      type: "dropdown",
      value: "default",
      options: ["default", "warning", "orange", "success", "green", "gray", "blue", "red", "error", "grayWithoutHover", "purple"],
      label: "Variant",
    },
    size: {
      type: "dropdown",
      value: "md",
      options: ["sm", "md", "lg"],
      label: "Size",
    },
    children: {
      type: "string",
      value: "Badge Text",
      label: "Children",
    },
    rounded: {
      type: "boolean",
      value: false,
      label: "Rounded",
    },
    startIcon: {
      type: "dropdown",
      value: "",
      options: ["", "check", "x", "alert", "info"],
      label: "Start Icon",
    },
    withDot: {
      type: "boolean",
      value: false,
      label: "With Dot",
    },
  });

  return (
    <Badge
      variant={state.variant.value}
      size={state.size.value}
      rounded={state.rounded.value}
      startIcon={state.startIcon.value || undefined}
      withDot={state.withDot.value}
    >
      {state.children.value}
    </Badge>
  );
}