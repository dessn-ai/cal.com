import React from 'react';
import { useParentState } from '../useIframeState';
import { EventSetupTab } from '../../../../packages/features/eventtypes/components/tabs/setup/EventSetupTab';
import { FormProvider, useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    eventType: {
      type: "object",
      value: {
        title: "Sample Event",
        slug: "sample-event",
        length: 30,
        description: "This is a sample event description.",
        locations: [],
        seatsPerTimeSlotEnabled: false,
        autoTranslateDescriptionEnabled: false,
      },
      label: "Event Type",
    },
    locationOptions: {
      type: "object",
      value: [],
      label: "Location Options",
    },
    team: {
      type: "object",
      value: null,
      label: "Team",
    },
    teamMembers: {
      type: "object",
      value: [],
      label: "Team Members",
    },
    destinationCalendar: {
      type: "object",
      value: null,
      label: "Destination Calendar",
    },
    urlPrefix: {
      type: "string",
      value: "https://example.com",
      label: "URL Prefix",
    },
    hasOrgBranding: {
      type: "boolean",
      value: false,
      label: "Has Org Branding",
    },
    orgId: {
      type: "number",
      value: null,
      label: "Organization ID",
    },
  });

  const methods = useForm({
    defaultValues: {
      title: state.eventType.value.title,
      slug: state.eventType.value.slug,
      length: state.eventType.value.length,
      description: state.eventType.value.description,
      locations: state.eventType.value.locations,
      seatsPerTimeSlotEnabled: state.eventType.value.seatsPerTimeSlotEnabled,
      autoTranslateDescriptionEnabled: state.eventType.value.autoTranslateDescriptionEnabled,
      metadata: {},
      users: [{ username: 'default-user' }]
    }
  });

  return (
    <FormProvider {...methods}>
      <EventSetupTab
        eventType={state.eventType.value}
        locationOptions={state.locationOptions.value}
        team={state.team.value}
        teamMembers={state.teamMembers.value}
        destinationCalendar={state.destinationCalendar.value}
        urlPrefix={state.urlPrefix.value}
        hasOrgBranding={state.hasOrgBranding.value}
        orgId={state.orgId.value}
      />
    </FormProvider>
  );
}