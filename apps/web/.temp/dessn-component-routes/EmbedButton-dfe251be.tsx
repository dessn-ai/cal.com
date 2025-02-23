import React from 'react';
import { useParentState } from '../useIframeState';
import { EmbedButton } from '../../../../packages/features/embed/Embed';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "",
      label: "Class Name"
    },
    embedUrl: {
      type: "string",
      value: "https://example.com/embed",
      label: "Embed URL"
    },
    namespace: {
      type: "string",
      value: "default",
      label: "Namespace"
    },
    eventId: {
      type: "number",
      value: 1,
      label: "Event ID"
    },
    noQueryParamMode: {
      type: "boolean",
      value: false,
      label: "No Query Param Mode"
    }
  });

  return (
    <EmbedButton
      className={state.className.value}
      embedUrl={state.embedUrl.value}
      namespace={state.namespace.value}
      eventId={state.eventId.value}
      noQueryParamMode={state.noQueryParamMode.value}
    >
      Embed Button
    </EmbedButton>
  );
}