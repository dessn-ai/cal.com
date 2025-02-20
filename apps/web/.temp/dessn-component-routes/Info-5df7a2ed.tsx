import React from 'react';
import { useParentState } from '../useIframeState';
import { Info } from '../../../../packages/emails/src/components/Info';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    label: {
      type: "string",
      value: "Sample Label",
      label: "Label",
    },
    description: {
      type: "string",
      value: "This is a sample description.",
      label: "Description",
    },
    extraInfo: {
      type: "string",
      value: "Extra information goes here.",
      label: "Extra Info",
    },
    withSpacer: {
      type: "boolean",
      value: false,
      label: "With Spacer",
    },
    lineThrough: {
      type: "boolean",
      value: false,
      label: "Line Through",
    },
    formatted: {
      type: "boolean",
      value: false,
      label: "Formatted",
    },
    isLabelHTML: {
      type: "boolean",
      value: false,
      label: "Is Label HTML",
    },
  });

  return (
    <Info
      label={state.label.value}
      description={state.description.value}
      extraInfo={state.extraInfo.value}
      withSpacer={state.withSpacer.value}
      lineThrough={state.lineThrough.value}
      formatted={state.formatted.value}
      isLabelHTML={state.isLabelHTML.value}
    />
  );
}