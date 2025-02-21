import React from 'react';
import { useParentState } from '../useIframeState';
import { EditWeightsForAllTeamMembers } from '../../../../packages/features/eventtypes/components/EditWeightsForAllTeamMembers';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    teamMembers: {
      type: "string",
      value: JSON.stringify([
        { value: "1", label: "John Doe", avatar: "https://example.com/avatar1.jpg", email: "john@example.com", defaultScheduleId: 1 },
        { value: "2", label: "Jane Smith", avatar: "https://example.com/avatar2.jpg", email: "jane@example.com", defaultScheduleId: 2 },
      ]),
      label: "Team Members",
    },
    value: {
      type: "string",
      value: JSON.stringify([
        { isFixed: false, userId: 1, priority: 1, weight: 100 },
        { isFixed: false, userId: 2, priority: 2, weight: 80 },
      ]),
      label: "Hosts",
    },
    assignAllTeamMembers: {
      type: "boolean",
      value: true,
      label: "Assign All Team Members",
    },
    assignRRMembersUsingSegment: {
      type: "boolean",
      value: false,
      label: "Assign RR Members Using Segment",
    },
    teamId: {
      type: "number",
      value: 1,
      label: "Team ID",
    },
  });

  return (
    <EditWeightsForAllTeamMembers
      teamMembers={JSON.parse(state.teamMembers.value)}
      value={JSON.parse(state.value.value)}
      onChange={(hosts) => setState('value', JSON.stringify(hosts))}
      assignAllTeamMembers={state.assignAllTeamMembers.value}
      assignRRMembersUsingSegment={state.assignRRMembersUsingSegment.value}
      teamId={state.teamId.value}
      queryValue={null}
    />
  );
}