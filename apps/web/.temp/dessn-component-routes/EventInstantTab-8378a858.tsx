import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useParentState } from '../useIframeState';
import { EventInstantTab } from '../../../../packages/features/eventtypes/components/tabs/instant/EventInstantTab';

export default function ComponentPreview() {
  const methods = useForm({
    defaultValues: {
      // Add any form default values needed
      instant: false,
      requiresBookerEmailVerification: false,
    }
  });

  const [state, setState] = useParentState({
    eventType: {
      type: "object",
      value: {
        id: 1,
        title: "Sample Event",
        slug: "sample-event",
        length: 30,
        description: "This is a sample event",
        hidden: false,
        requiresConfirmation: false,
        price: 0,
        currency: "USD",
        metadata: {},
        locations: [],
        customInputs: [],
        users: [],
        team: null,
        hosts: [],
        bookingFields: [],
      },
      label: "Event Type",
    },
    isTeamEvent: {
      type: "boolean",
      value: false,
      label: "Is Team Event",
    },
  });

  return (
    <FormProvider {...methods}>
      <EventInstantTab
        eventType={state.eventType.value}
        isTeamEvent={state.isTeamEvent.value}
      />
    </FormProvider>
  );
}