import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/platform/atoms/event-types/wrappers/EventTeamAssignmentTabWebWrapper';
import { useForm, FormProvider } from 'react-hook-form';
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
        role: "MEMBER"
      },
      eventTypes: ["test-event"],
      avatar: "",
      defaultScheduleId: null,
      profile: {
        id: 1,
        username: "johndoe"
      },
      value: "1",
      label: "John Doe"
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      username: "janesmith",
      membership: {
        accepted: true,
        role: "MEMBER"
      },
      eventTypes: ["test-event"],
      avatar: "",
      defaultScheduleId: null,
      profile: {
        id: 2,
        username: "janesmith"
      },
      value: "2",
      label: "Jane Smith"
    }
  ];

  const mockEventType = {
    id: 1,
    teamId: state.teamId.value,
    schedulingType: SchedulingType.COLLECTIVE,
    users: [],
    hosts: [],
    assignAllTeamMembers: false,
    metadata: {},
    workflows: [],
    children: [],
    team: {
      id: state.teamId.value,
      name: "Test Team",
      members: mockTeamMembers,
      parentId: null
    },
    slug: "test-event"
  };

  const methods = useForm({
    defaultValues: {
      schedulingType: SchedulingType.COLLECTIVE,
      hosts: [],
      assignAllTeamMembers: false,
      assignRRMembersUsingSegment: false,
      isRRWeightsEnabled: false,
      maxLeadThreshold: null,
      children: [],
      rrSegmentQueryValue: ""
    }
  });

  return (
    <FormProvider {...methods}>
      <ImportedComponent
        orgId={state.orgId.value}
        teamId={state.teamId.value}
        eventType={mockEventType}
        isTeamEvent={state.isTeamEvent.value}
        teamMembers={mockTeamMembers}
        team={mockEventType.team}
      />
    </FormProvider>
  );
}