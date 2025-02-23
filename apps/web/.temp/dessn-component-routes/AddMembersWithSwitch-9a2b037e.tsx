import React from 'react';
import { useParentState } from '../useIframeState';
import { AddMembersWithSwitch } from '../../../../packages/features/eventtypes/components/AddMembersWithSwitch';

import { useForm, FormProvider } from 'react-hook-form';

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
        { isFixed: false, userId: 1, priority: 2, weight: 100, scheduleId: 1 },
      ]),
      label: "Value",
    },
    assignAllTeamMembers: {
      type: "boolean",
      value: false,
      label: "Assign All Team Members",
    },
    automaticAddAllEnabled: {
      type: "boolean",
      value: true,
      label: "Automatic Add All Enabled",
    },
    isFixed: {
      type: "boolean",
      value: false,
      label: "Is Fixed",
    },
    placeholder: {
      type: "string",
      value: "Select team members",
      label: "Placeholder",
    },
    isRRWeightsEnabled: {
      type: "boolean",
      value: true,
      label: "Is RR Weights Enabled",
    },
    teamId: {
      type: "number",
      value: 1,
      label: "Team ID",
    },
    isSegmentApplicable: {
      type: "boolean",
      value: true,
      label: "Is Segment Applicable",
    },
  });

  const methods = useForm({
    defaultValues: {
      assignRRMembersUsingSegment: false,
      rrSegmentQueryValue: null,
    },
  });

  return (
    <FormProvider {...methods}>
      <AddMembersWithSwitch
        teamMembers={JSON.parse(state.teamMembers.value)}
        value={JSON.parse(state.value.value)}
        onChange={(hosts) => setState('value', JSON.stringify(hosts))}
        assignAllTeamMembers={state.assignAllTeamMembers.value}
        setAssignAllTeamMembers={(value) => setState('assignAllTeamMembers', value)}
        automaticAddAllEnabled={state.automaticAddAllEnabled.value}
        onActive={() => console.log("Active")}
        isFixed={state.isFixed.value}
        placeholder={state.placeholder.value}
        isRRWeightsEnabled={state.isRRWeightsEnabled.value}
        teamId={state.teamId.value}
        isSegmentApplicable={state.isSegmentApplicable.value}
        data-testid="add-members-with-switch"
      />
    </FormProvider>
  );
}