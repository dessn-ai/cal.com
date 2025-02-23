import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useParentState } from '../useIframeState';
import { EventInstantTab } from '../../../../packages/features/eventtypes/components/tabs/instant/EventInstantTab';

export default function ComponentPreview() {
  const methods = useForm({
    defaultValues: {
      // Add any form default values needed by InstantEventController
      instant: false,
      slotInterval: 15,
    },
  });

  const [state, setState] = useParentState({
    eventType: {
      type: "string",
      value: JSON.stringify({
        id: 1,
        title: "Sample Event",
        slug: "sample-event",
        metadata: {},
      }),
      label: "Event Type",
    },
    isTeamEvent: {
      type: "boolean",
      value: false,
      label: "Is Team Event",
    },
  });

  const eventType = JSON.parse(state.eventType.value);

  return (
    <FormProvider {...methods}>
      <EventInstantTab
        eventType={eventType}
        isTeamEvent={state.isTeamEvent.value}
      />
    </FormProvider>
  );
}