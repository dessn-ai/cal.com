import React from 'react';
import { useParentState } from '../useIframeState';
import { RoutingFormEmbedButton } from '../../../../packages/features/embed/RoutingFormEmbed';
import { EmbedDialogProvider } from '../../../../packages/features/embed/lib/hooks/useEmbedDialogCtx';

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
  });

  return (
    <EmbedDialogProvider>
      <RoutingFormEmbedButton
        embedUrl={state.embedUrl.value}
        namespace={state.namespace.value}
        className={state.className.value}
        eventId={state.eventId.value}
        noQueryParamMode={true}
      />
    </EmbedDialogProvider>
  );
}