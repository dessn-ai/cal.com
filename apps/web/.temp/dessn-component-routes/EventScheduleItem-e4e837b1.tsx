import React from 'react';
import { useParentState } from '../useIframeState';
import { EventScheduleItem } from '../../../../packages/features/troubleshooter/components/EventScheduleItem';

import { TroubleshooterStoreProvider } from '../../../../packages/features/troubleshooter/store';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    eventSlug: {
      type: "string",
      value: "example-event",
      label: "Event Slug",
    },
  });

  const mockTrpcContext = {
    viewer: {
      availability: {
        schedule: {
          getScheduleByEventSlug: {
            useQuery: () => ({
              data: {
                name: "Mock Schedule",
                id: "mock-id",
              },
            }),
          },
        },
      },
    },
  };

  return (
    <TroubleshooterStoreProvider
      initialState={{
        event: {
          slug: state.eventSlug.value,
        },
      }}>
      <EventScheduleItem />
    </TroubleshooterStoreProvider>
  );
}