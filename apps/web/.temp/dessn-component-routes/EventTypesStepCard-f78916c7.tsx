import React from 'react';
import { useParentState } from '../useIframeState';
import { EventTypesStepCard } from '../../components/apps/installation/EventTypesStepCard';

import { FormProvider, useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    userName: {
      type: "string",
      value: "JohnDoe",
      label: "User Name",
    },
  });

  const methods = useForm({
    defaultValues: {
      eventTypeGroups: [
        {
          id: 1,
          name: "Default Group",
          slug: "default-group",
          image: "",
          eventTypes: [
            {
              id: 1,
              title: "Sample Event",
              description: "This is a sample event",
              length: 30,
              slug: "sample-event",
              selected: false,
            },
          ],
        },
      ],
    },
  });

  const setConfigureStep = (value: boolean) => {
    console.log("Configure step set to:", value);
  };

  const handleSetUpLater = () => {
    console.log("Set up later clicked");
  };

  return (
    <FormProvider {...methods}>
      <EventTypesStepCard
        userName={state.userName.value}
        setConfigureStep={setConfigureStep}
        handleSetUpLater={handleSetUpLater}
      />
    </FormProvider>
  );
}