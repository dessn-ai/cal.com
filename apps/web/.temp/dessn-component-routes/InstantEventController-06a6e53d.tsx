import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/eventtypes/components/tabs/instant/InstantEventController';
import { FormProvider, useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const methods = useForm({
    defaultValues: {
      isInstantEvent: false,
      instantMeetingParameters: [],
      instantMeetingExpiryTimeOffsetInSeconds: 300,
      instantMeetingSchedule: null,
    }
  });

  const [state, setState] = useParentState({
    eventType: {
      type: "object",
      value: {
        isInstantEvent: false,
        id: 1,
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