import React from 'react';
import { useParentState } from '../useIframeState';
import { EventAppsTab } from '../../../../packages/features/eventtypes/components/tabs/apps/EventAppsTab';
import { FormProvider, useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    eventType: {
      type: "object",
      value: {
        id: 1,
        title: "Sample Event",
        description: "This is a sample event",
        teamId: null,
        length: 30,
        recurringEvent: null,
        seatsPerTimeSlot: null,
        team: null,
        schedulingType: "COLLECTIVE",
        URL: "https://example.com/event"
      },
      label: "Event Type"
    }
  });

  const methods = useForm({
    defaultValues: {
      metadata: {
        apps: {},
      }
    }
  });

  return (
    <FormProvider {...methods}>
      <EventAppsTab eventType={state.eventType.value} />
    </FormProvider>
  );
}