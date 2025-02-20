import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/platform/atoms/event-types/wrappers/EventTeamAssignmentTabWebWrapper';


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

  return (
    <ImportedComponent
      orgId={state.orgId.value}
      teamId={state.teamId.value}
      eventType={{ teamId: state.teamId.value, schedulingType: state.eventType.value }}
      isTeamEvent={state.isTeamEvent.value}
    />
  );
}