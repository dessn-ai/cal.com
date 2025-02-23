import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/event-types/views/event-types-single-view';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    type: {
      type: "number",
      value: 1,
      label: "Type",
    },
    eventType: {
      type: "string",
      value: JSON.stringify({ id: 1, title: "Sample Event" }),
      label: "Event Type",
    },
    trpcState: {
      type: "string",
      value: JSON.stringify({}),
      label: "TRPC State",
    },
  });

  const eventType = JSON.parse(state.eventType.value);
  const trpcState = JSON.parse(state.trpcState.value);

  return (
    <ImportedComponent
      type={state.type.value}
      eventType={eventType}
      trpcState={trpcState}
    />
  );
}