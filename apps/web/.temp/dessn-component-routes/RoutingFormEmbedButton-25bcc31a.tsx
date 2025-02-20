import React from 'react';
import { useParentState } from '../useIframeState';

// Mock RoutingFormEmbedButton component
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
    <button 
      className={`${className} mock-embed-button`}
      onClick={() => console.log('Embed button clicked')}
    >
      Embed Form
    </button>
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