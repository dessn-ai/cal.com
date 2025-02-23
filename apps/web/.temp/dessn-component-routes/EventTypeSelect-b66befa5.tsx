import React from 'react';
import { useParentState } from '../useIframeState';
import { EventTypeSelect } from '../../../../packages/features/troubleshooter/components/EventTypeSelect';

import { TroubleshooterStoreProvider } from '../../../../packages/features/troubleshooter/store';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    eventTypes: {
      type: "string",
      value: JSON.stringify([
        { id: 1, title: "Meeting", slug: "meeting", length: 30 },
        { id: 2, title: "Interview", slug: "interview", length: 60 },
      ]),
      label: "Event Types",
    },
    selectedEventType: {
      type: "string",
      value: JSON.stringify({ id: 1, slug: "meeting", duration: 30 }),
      label: "Selected Event Type",
    },
  });

  const mockTrpc = {
    viewer: {
      eventTypes: {
        list: {
          useQuery: () => ({
            data: JSON.parse(state.eventTypes.value),
            isPending: false,
          }),
        },
      },
    },
  };

  return (
    <TroubleshooterStoreProvider
      initialState={{
        event: JSON.parse(state.selectedEventType.value),
        setEvent: (event) => setState('selectedEventType', JSON.stringify(event)),
      }}>
      <EventTypeSelect />
    </TroubleshooterStoreProvider>
  );
}