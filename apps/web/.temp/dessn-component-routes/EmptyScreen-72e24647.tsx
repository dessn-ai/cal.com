import React from 'react';
import { useParentState } from '../useIframeState';
import { EmptyScreen } from '../../../../packages/ui/components/empty-screen/EmptyScreen';

import { Icon } from '../../../../packages/ui/components/icon';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    Icon: {
      type: "dropdown",
      value: "activity",
      options: ["activity", "arrow-down", "arrow-left", "arrow-right", "arrow-up-right", "arrow-up"],
      label: "Icon",
    },
    headline: {
      type: "string",
      value: "Welcome to EmptyScreen",
      label: "Headline",
    },
    description: {
      type: "string",
      value: "This is a sample description for the EmptyScreen component.",
      label: "Description",
    },
    buttonText: {
      type: "string",
      value: "Click me",
      label: "Button Text",
    },
    border: {
      type: "boolean",
      value: true,
      label: "Show Border",
    },
    dashedBorder: {
      type: "boolean",
      value: true,
      label: "Dashed Border",
    },
    limitWidth: {
      type: "boolean",
      value: true,
      label: "Limit Width",
    },
  });

  return (
    <EmptyScreen
      Icon={state.Icon.value as any}
      headline={state.headline.value}
      description={state.description.value}
      buttonText={state.buttonText.value}
      buttonOnClick={() => console.log("Button clicked")}
      border={state.border.value}
      dashedBorder={state.dashedBorder.value}
      limitWidth={state.limitWidth.value}
    />
  );
}