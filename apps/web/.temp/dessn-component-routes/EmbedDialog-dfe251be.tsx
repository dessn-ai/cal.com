import React from 'react';
import { useParentState } from '../useIframeState';
import { EmbedDialog } from '../../../../packages/features/embed/Embed';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    types: {
      type: "dropdown",
      value: "inline",
      options: ["inline", "floating-popup", "element-click"],
      label: "Embed Type"
    },
    tabs: {
      type: "dropdown",
      value: "embed-code",
      options: ["embed-code", "embed-react", "embed-preview"],
      label: "Embed Tab"
    },
    eventTypeHideOptionDisabled: {
      type: "boolean",
      value: false,
      label: "Hide Event Type Option Disabled"
    },
    defaultBrandColor: {
      type: "string",
      value: "#000000",
      label: "Default Brand Color"
    },
    noQueryParamMode: {
      type: "boolean",
      value: false,
      label: "No Query Param Mode"
    }
  });

  return (
    <EmbedDialog
      types={state.types.value.split(',')}
      tabs={state.tabs.value.split(',').map(tab => ({ name: tab, href: `embedTabName=${tab}` }))}
      eventTypeHideOptionDisabled={state.eventTypeHideOptionDisabled.value}
      defaultBrandColor={{ brandColor: state.defaultBrandColor.value, darkBrandColor: state.defaultBrandColor.value }}
      noQueryParamMode={state.noQueryParamMode.value}
    />
  );
}