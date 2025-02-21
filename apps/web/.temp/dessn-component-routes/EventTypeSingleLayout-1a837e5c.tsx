import React from 'react';
import { useParentState } from '../useIframeState';
import { EventTypeSingleLayout } from '../../../../packages/features/eventtypes/components/EventTypeLayout';

import { useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    eventType: {
      type: "object",
      value: {
        id: 1,
        title: "Sample Event Type",
        slug: "sample-event",
        team: null,
        hidden: false,
      },
      label: "Event Type",
    },
    currentUserMembership: {
      type: "object",
      value: {
        role: "OWNER",
      },
      label: "Current User Membership",
    },
    team: {
      type: "object",
      value: null,
      label: "Team",
    },
    isUpdateMutationLoading: {
      type: "boolean",
      value: false,
      label: "Is Update Mutation Loading",
    },
    isUserOrganizationAdmin: {
      type: "boolean",
      value: true,
      label: "Is User Organization Admin",
    },
    bookerUrl: {
      type: "string",
      value: "https://example.com",
      label: "Booker URL",
    },
    isDeleting: {
      type: "boolean",
      value: false,
      label: "Is Deleting",
    },
    isPlatform: {
      type: "boolean",
      value: false,
      label: "Is Platform",
    },
  });

  const formMethods = useForm<any>({
    defaultValues: {
      hidden: false,
      users: [{ username: "johndoe" }],
      slug: "sample-event",
    },
  });

  const tabsNavigation = [
    { name: "Overview", href: "#overview" },
    { name: "Availability", href: "#availability" },
    { name: "Team", href: "#team" },
  ];

  return (
    <EventTypeSingleLayout
      eventType={state.eventType.value}
      currentUserMembership={state.currentUserMembership.value}
      team={state.team.value}
      formMethods={formMethods}
      isUpdateMutationLoading={state.isUpdateMutationLoading.value}
      isUserOrganizationAdmin={state.isUserOrganizationAdmin.value}
      bookerUrl={state.bookerUrl.value}
      onDelete={() => console.log("Delete clicked")}
      isDeleting={state.isDeleting.value}
      isPlatform={state.isPlatform.value}
      tabsNavigation={tabsNavigation}
    >
      <div>Event Type Content Goes Here</div>
    </EventTypeSingleLayout>
  );
}