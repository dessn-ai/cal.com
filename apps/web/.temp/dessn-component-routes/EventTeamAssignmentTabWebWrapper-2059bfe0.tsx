import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/platform/atoms/event-types/wrappers/EventTeamAssignmentTabWebWrapper';
import { FormProvider, useForm } from 'react-hook-form';
import { SchedulingType } from '@calcom/prisma/enums';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    orgId: {
      type: "number",
      value: 1,
      label: "Organization ID",
    },
    teamId: {
      type: "number",
      value: 2,
      label: "Team ID",
    },
    eventType: {
      type: "string",
      value: "meeting",
      label: "Event Type",
    },
    isTeamEvent: {
      type: "boolean",
      value: true,
      label: "Is Team Event",
    },
  });

  const mockTeamMembers = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      username: "johndoe",
      membership: {
        accepted: true,
        role: "MEMBER",
        userId: 1,
        teamId: state.teamId.value,
      },
      avatar: "",
      eventTypes: ["meeting"],
      defaultScheduleId: 1,
      profile: {
        id: 1,
        username: "johndoe"
      }
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      username: "janesmith",
      membership: {
        accepted: true,
        role: "ADMIN",
        userId: 2,
        teamId: state.teamId.value,
      },
      avatar: "",
      eventTypes: ["meeting"],
      defaultScheduleId: 2,
      profile: {
        id: 2,
        username: "janesmith"
      }
    }
  ];

  const mockEventType = {
    teamId: state.teamId.value,
    schedulingType: SchedulingType.COLLECTIVE,
    id: 1,
    title: "Team Meeting",
    slug: "team-meeting",
    length: 30,
    owner: { id: 1, name: "John Doe", email: "john@example.com" },
    users: mockTeamMembers,
    hosts: [],
    assignAllTeamMembers: true,
    team: {
      id: state.teamId.value,
      name: "Test Team",
      members: mockTeamMembers,
      parentId: null
    },
    children: [],
    metadata: {},
    workflows: [],
    seatsPerTimeSlot: null,
    webhooks: [],
    hashedLink: null,
    locations: [],
    customInputs: [],
    schedule: null,
    periodType: "UNLIMITED",
    price: 0,
    currency: "usd",
    slotInterval: null,
    hidden: false,
    hideCalendarNotes: false,
    minimumBookingNotice: 0,
    beforeEventBuffer: 0,
    afterEventBuffer: 0,
    requiresConfirmation: false,
    disableGuests: false,
    userId: 1,
    parentId: null,
    successRedirectUrl: null
  };

  const methods = useForm({
    defaultValues: {
      schedulingType: SchedulingType.COLLECTIVE,
      hosts: [],
      assignAllTeamMembers: true,
      assignRRMembersUsingSegment: false,
      isRRWeightsEnabled: false,
      rrSegmentQueryValue: "",
      maxLeadThreshold: null,
      children: []
    }
  });

  return (
    <FormProvider {...methods}>
      <ImportedComponent
        orgId={state.orgId.value}
        teamId={state.teamId.value}
        eventType={mockEventType}
        isTeamEvent={state.isTeamEvent.value}
        team={{
          id: state.teamId.value,
          name: "Test Team",
          members: mockTeamMembers,
          membership: {
            accepted: true,
            role: "MEMBER",
            userId: 1,
            teamId: state.teamId.value,
          }
        }}
        teamMembers={mockTeamMembers}
        isSegmentApplicable={false}
      />
    </FormProvider>
  );
}