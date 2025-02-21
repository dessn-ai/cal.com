import React from 'react';
import { useParentState } from '../useIframeState';
import { EventSetupTab } from '../../../../packages/features/eventtypes/components/tabs/setup/EventSetupTab';

import { useForm, FormProvider } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    team: {
      type: "dropdown",
      value: "team1",
      options: ["team1", "team2", "team3"],
      label: "Team",
    },
    locationOptions: {
      type: "string",
      value: JSON.stringify([
        {
          label: "Location 1",
          options: [
            { label: "Option 1", value: "option1" },
            { label: "Option 2", value: "option2" },
          ],
        },
      ]),
      label: "Location Options",
    },
    destinationCalendar: {
      type: "string",
      value: JSON.stringify({ name: "Default Calendar" }),
      label: "Destination Calendar",
    },
    eventType: {
      type: "string",
      value: JSON.stringify({ title: "Sample Event", slug: "sample-event", length: 30 }),
      label: "Event Type",
    },
    teamMembers: {
      type: "string",
      value: JSON.stringify([{ id: 1, name: "John Doe" }, { id: 2, name: "Jane Smith" }]),
      label: "Team Members",
    },
    urlPrefix: {
      type: "string",
      value: "https://cal.com",
      label: "URL Prefix",
    },
    hasOrgBranding: {
      type: "boolean",
      value: true,
      label: "Has Org Branding",
    },
    orgId: {
      type: "number",
      value: 123,
      label: "Organization ID",
    },
  });

  const methods = useForm({
    defaultValues: {
      title: "Sample Event",
      slug: "sample-event",
      length: 30,
      description: "This is a sample event description.",
      locations: [],
      seatsPerTimeSlotEnabled: false,
      autoTranslateDescriptionEnabled: false,
    },
  });

  return (
    <FormProvider {...methods}>
      <EventSetupTab
        team={state.team.value}
        locationOptions={JSON.parse(state.locationOptions.value)}
        destinationCalendar={JSON.parse(state.destinationCalendar.value)}
        eventType={JSON.parse(state.eventType.value)}
        teamMembers={JSON.parse(state.teamMembers.value)}
        urlPrefix={state.urlPrefix.value}
        hasOrgBranding={state.hasOrgBranding.value}
        orgId={state.orgId.value}
      />
    </FormProvider>
  );
}