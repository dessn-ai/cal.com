import React from 'react';
import { useParentState } from '../useIframeState';
import { TopBanner } from '../../../../packages/ui/components/top-banner/TopBanner';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    icon: {
      type: "dropdown",
      value: "info",
      options: ["info", "triangle-alert", "bell"],
      label: "Icon",
    },
    text: {
      type: "string",
      value: "This is a sample banner text",
      label: "Text",
    },
    variant: {
      type: "dropdown",
      value: "default",
      options: ["default", "warning", "error"],
      label: "Variant",
    },
    actions: {
      type: "boolean",
      value: false,
      label: "Show Actions",
    },
  });

  const actions = state.actions.value ? (
    <button className="underline">Action</button>
  ) : undefined;

  return (
    <TopBanner
      icon={state.icon.value as any}
      text={state.text.value}
      variant={state.variant.value as any}
      actions={actions}
    />
  );
}