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

  const methods = useForm({
    defaultValues: {
      schedulingType: SchedulingType.COLLECTIVE,
      hosts: [],
      assignAllTeamMembers: false,
      children: [],
      isRRWeightsEnabled: false,
      maxLeadThreshold: null,
    },
  });

  const mockEventType = {
    teamId: state.teamId.value,
    schedulingType: state.eventType.value,
    slug: 'test-event',
    team: {
      id: state.teamId.value,
      name: 'Test Team',
      members: []
    },
    children: []
  };

  const mockTeamMembers = [
    {
      id: 1,
      name: "Team Member 1",
      email: "member1@example.com",
      username: "member1",
      membership: {},
      eventTypes: [],
      avatar: "",
      profile: null,
      defaultScheduleId: null
    }
  ];

  return (
    <FormProvider {...methods}>
      <ImportedComponent
        orgId={state.orgId.value}
        teamId={state.teamId.value}
        eventType={mockEventType}
        isTeamEvent={state.isTeamEvent.value}
        team={mockEventType.team}
        teamMembers={mockTeamMembers}
      />
    </FormProvider>
  );
}