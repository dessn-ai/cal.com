import React, { createContext, useContext } from 'react';
import { useParentState } from '../useIframeState';
import { EventWebhooksTab } from '../../../../packages/features/eventtypes/components/tabs/webhooks/EventWebhooksTab';
import { FormProvider, useForm } from 'react-hook-form';

// Create a mock context
const ManagedEventTypeContext = createContext({
  isManagedEventType: false,
  managedEventType: null,
  getManagedParentOption: () => null,
  isChildrenManagedEventType: false,
});

// Mock provider component
const MockManagedEventTypeProvider = ({ children }) => {
  const value = {
    isManagedEventType: false,
    managedEventType: null,
    getManagedParentOption: () => null,
    isChildrenManagedEventType: false,
  };
  
  return (
    <ManagedEventTypeContext.Provider value={value}>
      {children}
    </ManagedEventTypeContext.Provider>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    eventType: {
      type: "object",
      value: {
        id: 1,
        title: "Sample Event Type",
        description: "This is a sample event type for preview",
        length: 30,
        slug: "sample-event",
        hidden: false,
        teamId: null,
        userId: 1,
        webhooks: [],
        metadata: {},
        isParentEventType: false,
      },
      label: "Event Type",
    },
  });

  const formMethods = useForm({
    defaultValues: {
      webhooks: state.eventType.value.webhooks || [],
    },
  });

  return (
    <MockManagedEventTypeProvider>
      <FormProvider {...formMethods}>
        <EventWebhooksTab eventType={state.eventType.value} />
      </FormProvider>
    </MockManagedEventTypeProvider>
  );
}