import React from 'react';
import { useParentState } from '../useIframeState';
import { TeamsUpgradeBanner } from '../../../../packages/features/ee/teams/components/TeamsUpgradeBanner';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    teamName: {
      type: "string",
      value: "My Team",
      label: "Team Name",
    },
    teamId: {
      type: "number",
      value: 1,
      label: "Team ID",
    },
  });

  const mockData = [
    {
      team: {
        name: state.teamName.value,
        id: state.teamId.value,
      },
    },
  ];

  return (
    <TeamsUpgradeBanner
      data={mockData as any}
    />
  );
}