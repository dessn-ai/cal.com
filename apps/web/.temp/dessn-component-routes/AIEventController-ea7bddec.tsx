import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/eventtypes/components/tabs/ai/AIEventController';

import { useForm, FormProvider } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    eventType: {
      type: "object",
      value: {
        id: 1,
        aiPhoneCallConfig: {
          enabled: false,
          templateType: "CHECK_IN_APPOINTMENT",
          yourPhoneNumber: "+1234567890",
          numberToCall: "+0987654321",
        },
      },
      label: "Event Type",
    },
    isTeamEvent: {
      type: "boolean",
      value: true,
      label: "Is Team Event",
    },
  });

  const methods = useForm({
    defaultValues: {
      aiPhoneCallConfig: {
        enabled: false,
        templateType: "CHECK_IN_APPOINTMENT",
        yourPhoneNumber: "+1234567890",
        numberToCall: "+0987654321",
      },
    },
  });

  return (
    <FormProvider {...methods}>
      <ImportedComponent 
        eventType={state.eventType.value as any} 
        isTeamEvent={state.isTeamEvent.value} 
      />
    </FormProvider>
  );
}