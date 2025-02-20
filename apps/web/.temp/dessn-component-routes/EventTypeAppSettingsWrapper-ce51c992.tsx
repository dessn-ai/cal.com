import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../components/apps/installation/EventTypeAppSettingsWrapper';
import { FormProvider, useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const methods = useForm();
  const [state, setState] = useParentState({
    slug: {
      type: "string",
      value: "example-slug",
      label: "Slug",
    },
    userName: {
      type: "string",
      value: "John Doe",
      label: "User Name",
    },
    categories: {
      type: "string",
      value: JSON.stringify(["category1", "category2"]),
      label: "Categories",
    },
    credentialId: {
      type: "number",
      value: 1,
      label: "Credential ID",
    },
    eventType: {
      type: "string",
      value: JSON.stringify({
        id: 1,
        title: "Sample Event",
        description: "This is a sample event",
        teamId: null,
        length: 60,
        recurringEvent: null,
        seatsPerTimeSlot: null,
        team: null,
        URL: "https://example.com/event",
        metadata: {},
        schedulingType: null,
        slug: "sample-event",
        requiresConfirmation: false,
        position: 0,
        destinationCalendar: null,
        selected: true,
        locations: [],
      }),
      label: "Event Type",
    },
  });

  return (
    <FormProvider {...methods}>
      <ImportedComponent
        slug={state.slug.value}
        userName={state.userName.value}
        categories={JSON.parse(state.categories.value)}
        credentialId={state.credentialId.value}
        eventType={JSON.parse(state.eventType.value)}
      />
    </FormProvider>
  );
}