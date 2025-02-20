import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/eventtypes/components/tabs/advanced/CustomEventTypeModal';

import { FormProvider, useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    placeHolder: {
      type: "string",
      value: "Event with {attendee}",
      label: "Placeholder",
    },
    defaultValue: {
      type: "string",
      value: "",
      label: "Default Value",
    },
    isNameFieldSplit: {
      type: "boolean",
      value: false,
      label: "Is Name Field Split",
    },
  });

  const methods = useForm({
    defaultValues: {
      customEventName: state.defaultValue.value,
    },
  });

  const mockEvent = {
    attendeeName: "John Doe",
    eventType: "Meeting",
    eventName: "Team Sync",
    host: "Jane Smith",
    eventDuration: 60,
    t: (key: string) => key,
  };

  return (
    <FormProvider {...methods}>
      <ImportedComponent
        placeHolder={state.placeHolder.value}
        defaultValue={state.defaultValue.value}
        close={() => console.log("Modal closed")}
        setValue={(value: string) => console.log("New value:", value)}
        event={mockEvent}
        isNameFieldSplit={state.isNameFieldSplit.value}
      />
    </FormProvider>
  );
}