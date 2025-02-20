import React from 'react';
import { useParentState } from '../useIframeState';
import { EventTeamAssignmentTab } from '../../../../packages/features/eventtypes/components/tabs/assignment/EventTeamAssignmentTab';
import { FormProvider, useForm } from 'react-hook-form';
import { SchedulingType } from '@calcom/prisma/enums';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    teamMembers: {
      type: "string",
      value: JSON.stringify([
        { 
          id: 1, 
          name: "John Doe", 
          email: "john@example.com", 
          username: "johndoe",
          membership: {},
          eventTypes: [],
          avatar: "",
          profile: {},
          defaultScheduleId: null
        },
        { 
          id: 2, 
          name: "Jane Smith", 
          email: "jane@example.com", 
          username: "janesmith",
          membership: {},
          eventTypes: [],
          avatar: "",
          profile: {},
          defaultScheduleId: null
        }
      ]),
      label: "Team Members"
    },
    team: {
      type: "string",
      value: JSON.stringify({ 
        id: 1, 
        name: "Sample Team",
        parentId: null
      }),
      label: "Team"
    },
    eventType: {
      type: "string",
      value: JSON.stringify({ 
        slug: "sample-event",
        team: { parentId: null },
        children: [],
        schedulingType: SchedulingType.COLLECTIVE
      }),
      label: "Event Type"
    },
    orgId: {
      type: "number",
      value: 1,
      label: "Organization ID"
    },
    isSegmentApplicable: {
      type: "boolean",
      value: true,
      label: "Is Segment Applicable"
    }
  });

  const methods = useForm({
    defaultValues: {
      schedulingType: SchedulingType.COLLECTIVE,
      hosts: [],
      assignAllTeamMembers: false,
      children: [],
      maxLeadThreshold: null,
      isRRWeightsEnabled: false,
      assignRRMembersUsingSegment: false,
      rrSegmentQueryValue: "",
    }
  });

  return (
    <FormProvider {...methods}>
      <EventTeamAssignmentTab
        teamMembers={JSON.parse(state.teamMembers.value)}
        team={JSON.parse(state.team.value)}
        eventType={JSON.parse(state.eventType.value)}
        orgId={state.orgId.value}
        isSegmentApplicable={state.isSegmentApplicable.value}
      />
    </FormProvider>
  );
}