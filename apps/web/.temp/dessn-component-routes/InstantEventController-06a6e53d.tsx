import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/eventtypes/components/tabs/instant/InstantEventController';

import { useForm, FormProvider } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    eventType: {
      type: "object",
      value: {
        id: 1,
        isInstantEvent: false,
      },
      label: "Event Type",
    },
    paymentEnabled: {
      type: "boolean",
      value: false,
      label: "Payment Enabled",
    },
    isTeamEvent: {
      type: "boolean",
      value: true,
      label: "Is Team Event",
    },
  });

  const methods = useForm({
    defaultValues: {
      isInstantEvent: false,
      instantMeetingParameters: [],
      instantMeetingSchedule: '',
      instantMeetingExpiryTimeOffsetInSeconds: 300,
    },
  });

  return (
    <FormProvider {...methods}>
      <ImportedComponent
        eventType={state.eventType.value}
        paymentEnabled={state.paymentEnabled.value}
        isTeamEvent={state.isTeamEvent.value}
      />
    </FormProvider>
  );
}