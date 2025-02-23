import React from 'react';
import { useParentState } from '../useIframeState';
import { EventType } from '../../../../packages/features/eventtypes/components/EventType';
import { useForm, FormProvider } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    eventType: {
      type: "object",
      value: {
        id: 1,
        title: "Sample Event Type",
        slug: "sample-event",
        bookerUrl: "https://example.com/book",
        length: 30,
        description: "Sample description",
        schedulingType: "ROUND_ROBIN",
        locations: [{ type: "integrations:daily" }],
        customInputs: [],
        schedule: null,
        periodType: "UNLIMITED",
        hidden: false,
        hideCalendarNotes: false,
        requiresConfirmation: false,
        disableGuests: false,
        metadata: {},
        seatsPerTimeSlot: null,
        users: [{ id: 1, name: "Test User", email: "test@example.com" }],
        price: 0,
        currency: "USD",
        owner: { id: 1, name: "Test User", email: "test@example.com" },
      },
      label: "Event Type",
    },
    team: {
      type: "object",
      value: {
        id: 1,
        name: "Test Team",
        slug: "test-team",
        members: []
      },
      label: "Team",
    },
    currentUserMembership: {
      type: "object",
      value: {
        role: "OWNER",
        accepted: true
      },
      label: "Current User Membership",
    },
    isUserOrganizationAdmin: {
      type: "boolean",
      value: true,
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
      ...state.eventType.value,
    }
  });

  const mockTabMap = {
    setup: <div>Setup Tab Content</div>,
    availability: <div>Availability Tab Content</div>,
    limits: <div>Limits Tab Content</div>,
    advanced: <div>Advanced Tab Content</div>,
  };

  const mockTabsNavigation = [
    { name: "setup", href: "#setup", info: "Setup info" },
    { name: "availability", href: "#availability", info: "Availability info" },
    { name: "limits", href: "#limits", info: "Limits info" },
    { name: "advanced", href: "#advanced", info: "Advanced info" },
  ];

  return (
    <FormProvider {...formMethods}>
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
        onDelete={() => console.log('Delete clicked')}
        isDeleting={state.isDeleting.value}
        tabsNavigation={mockTabsNavigation}
        handleSubmit={() => console.log('Submit clicked')}
        allowDelete={state.allowDelete.value}
      />
    </FormProvider>
  );
}