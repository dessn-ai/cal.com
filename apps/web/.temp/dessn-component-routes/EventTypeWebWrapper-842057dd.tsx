import React from 'react';
import { useParentState } from '../useIframeState';
import { EventTypeWebWrapper } from '../../../../packages/platform/atoms/event-types/wrappers/EventTypeWebWrapper';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    id: {
      type: "number",
      value: 1,
      label: "Event Type ID",
    },
  });

  return <EventTypeWebWrapper id={state.id.value} />;
}