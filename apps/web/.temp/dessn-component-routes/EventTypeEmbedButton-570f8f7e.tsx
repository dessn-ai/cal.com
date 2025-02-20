import React from 'react';
import { useParentState } from '../useIframeState';
import { EventTypeEmbedButton } from '../../../../packages/features/embed/EventTypeEmbed';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    embedUrl: {
      type: "string",
      value: "https://example.com/embed",
      label: "Embed URL",
    },
    namespace: {
      type: "string",
      value: "default",
      label: "Namespace",
    },
    className: {
      type: "string",
      value: "custom-class",
      label: "Class Name",
    },
    eventId: {
      type: "number",
      value: 1,
      label: "Event ID",
    },
    noQueryParamMode: {
      type: "boolean",
      value: false,
      label: "No Query Param Mode",
    },
  });

  return (
    <EventTypeEmbedButton
      embedUrl={state.embedUrl.value}
      namespace={state.namespace.value}
      className={state.className.value}
      eventId={state.eventId.value}
      noQueryParamMode={state.noQueryParamMode.value}
    />
  );
}