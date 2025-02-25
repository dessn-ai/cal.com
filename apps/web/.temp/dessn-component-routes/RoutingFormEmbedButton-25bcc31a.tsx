import React from 'react';
import { useParentState } from '../useIframeState';
import { Button } from '@calcom/ui';

// Mock version of RoutingFormEmbedButton
const MockRoutingFormEmbedButton = ({
  embedUrl,
  namespace,
  className,
  eventId,
  noQueryParamMode
}: {
  embedUrl: string;
  namespace: string;
  className: string;
  eventId: number;
  noQueryParamMode: boolean;
}) => {
  return (
    <Button 
      color="secondary"
      className={className}
      onClick={() => {
        console.log('Embed button clicked', { embedUrl, namespace, eventId });
      }}
    >
      Embed
    </Button>
  );
};

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
    <MockRoutingFormEmbedButton
      embedUrl={state.embedUrl.value}
      namespace={state.namespace.value}
      className={state.className.value}
      eventId={state.eventId.value}
      noQueryParamMode={true}
    />
  );
}