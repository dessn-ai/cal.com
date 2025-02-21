import React from 'react';
import { useParentState } from '../useIframeState';
import { CallToAction } from '../../../../packages/emails/src/components/CallToAction';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    label: {
      type: "string",
      value: "Click me",
      label: "Label",
    },
    href: {
      type: "string",
      value: "https://example.com",
      label: "Href",
    },
    secondary: {
      type: "boolean",
      value: false,
      label: "Secondary",
    },
    startIconName: {
      type: "string",
      value: "",
      label: "Start Icon Name",
    },
    endIconName: {
      type: "string",
      value: "",
      label: "End Icon Name",
    },
  });

  return (
    <CallToAction
      label={state.label.value}
      href={state.href.value}
      secondary={state.secondary.value}
      startIconName={state.startIconName.value || undefined}
      endIconName={state.endIconName.value || undefined}
    />
  );
}