import React from 'react';
import { useParentState } from '../useIframeState';
import { EventAppsTab } from '../../../../packages/features/eventtypes/components/tabs/apps/EventAppsTab';

import { useForm, FormProvider } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    eventType: {
      type: "string",
      value: JSON.stringify({
        id: 1,
        title: "Sample Event",
        team: { id: 1 },
        parent: { teamId: 2 },
      }),
      label: "Event Type",
    },
  });

  const methods = useForm({
    defaultValues: {
      eventType: JSON.parse(state.eventType.value),
    },
  });

  return (
    <FormProvider {...methods}>
      <EventAppsTab eventType={JSON.parse(state.eventType.value)} />
    </FormProvider>
  );
}