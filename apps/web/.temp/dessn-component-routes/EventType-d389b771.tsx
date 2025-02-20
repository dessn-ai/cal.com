import React from 'react';
import { useParentState } from '../useIframeState';
import { EventType } from '../../../../packages/features/eventtypes/components/EventType';
import { Form } from '@calcom/ui';
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
        length: 30,
        description: "Sample description",
        schedulingType: "ROUND_ROBIN",
        locations: [{ type: "integrations:daily" }],
        customInputs: [],
        schedule: null,
        periodType: "UNLIMITED",
        metadata: {},
        periodStartDate: null,
        periodEndDate: null,
        periodDays: null,
        periodCountCalendarDays: false,
        requiresConfirmation: false,
        disableGuests: false,
        hideCalendarNotes: false,
        minimumBookingNotice: 120,
        beforeEventBuffer: 0,
        afterEventBuffer: 0,
        seatsPerTimeSlot: null,
        workflows: [],
        hosts: [
          {
            id: 1,
            userId: 1,
            isFixed: true,
            priority: 1,
          }
        ],
        users: [
          {
            id: 1,
            name: "Test User",
            email: "test@example.com",
            timeZone: "UTC",
            username: "testuser",
          }
        ],
      },
      label: "Event Type",
    },
    team: {
      type: "object",
      value: {
        id: 1,
        name: "Test Team",
        slug: "test-team",
      },
      label: "Team",
    },
    currentUserMembership: {
      type: "object",
      value: {
        role: "OWNER",
        accepted: true,
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
    },
  });

  const mockTabMap = {
    setup: <div>Setup Tab Content</div>,
    availability: <div>Availability Tab Content</div>,
    limits: <div>Limits Tab Content</div>,
    advanced: <div>Advanced Tab Content</div>,
  };

  const mockTabsNavigation = [
    { name: "setup", href: "#setup", icon: null },
    { name: "availability", href: "#availability", icon: null },
    { name: "limits", href: "#limits", icon: null },
    { name: "advanced", href: "#advanced", icon: null },
  ];

  return (
    <Form
      form={formMethods}
      handleSubmit={() => {}}>
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
      />
    </Form>
  );
}