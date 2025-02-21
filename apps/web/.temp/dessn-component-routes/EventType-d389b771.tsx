import React from 'react';
import { useParentState } from '../useIframeState';
import { EventType } from '../../../../packages/features/eventtypes/components/EventType';
import { useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    eventType: {
      type: "object",
      value: {
        id: 1,
        title: "Sample Event Type",
        slug: "sample-event",
        bookerUrl: "https://example.com/book",
        users: [
          {
            id: 1,
            username: "testuser",
            email: "test@example.com",
            name: "Test User"
          }
        ]
      },
      label: "Event Type",
    },
    team: {
      type: "object",
      value: null,
      label: "Team",
    },
    currentUserMembership: {
      type: "object",
      value: null,
      label: "Current User Membership",
    },
    isUserOrganizationAdmin: {
      type: "boolean",
      value: false,
      label: "Is User Organization Admin",
    },
    isUpdating: {
      type: "boolean",
      value: false,
      label: "Is Updating",
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
    tabName: {
      type: "string",
      value: "setup",
      label: "Tab Name",
    },
    allowDelete: {
      type: "boolean",
      value: true,
      label: "Allow Delete",
    },
  });

  const formMethods = useForm({
    defaultValues: {
      id: 1,
      title: "Sample Event Type",
      slug: "sample-event",
      users: [
        {
          id: 1,
          username: "testuser",
          email: "test@example.com",
          name: "Test User"
        }
      ],
      hidden: false
    }
  });

  const mockTabMap = {
    setup: <div>Setup Tab Content</div>,
    availability: <div>Availability Tab Content</div>,
    limits: <div>Limits Tab Content</div>,
    advanced: <div>Advanced Tab Content</div>,
  };

  const mockTabsNavigation = [
    { name: "Setup", href: "#setup" },
    { name: "Availability", href: "#availability" },
    { name: "Limits", href: "#limits" },
    { name: "Advanced", href: "#advanced" },
  ];

  return (
    <EventType
      formMethods={formMethods}
      isPlatform={state.isPlatform.value}
      tabName={state.tabName.value}
      eventType={state.eventType.value}
      team={state.team.value}
      currentUserMembership={state.currentUserMembership.value}
      tabMap={mockTabMap}
      isUpdating={state.isUpdating.value}
      isUserOrganizationAdmin={state.isUserOrganizationAdmin.value}
      onDelete={() => {}}
      isDeleting={state.isDeleting.value}
      tabsNavigation={mockTabsNavigation}
      handleSubmit={() => {}}
      allowDelete={state.allowDelete.value}
      bookerUrl="https://example.com"
    />
  );
}