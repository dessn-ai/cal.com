import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/teams/pages/team-profile-view';

import { useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    team: {
      type: "dropdown",
      value: "mockTeam",
      options: ["mockTeam", "noTeam"],
      label: "Team",
    },
  });

  const form = useForm();

  const mockTeam = {
    id: 1,
    name: "Mock Team",
    slug: "mock-team",
    logo: "https://example.com/logo.png",
    bio: "This is a mock team for preview purposes.",
    membership: { role: "OWNER" },
    parent: null,
    metadata: {},
  };

  return (
    <ImportedComponent
      team={state.team.value === "mockTeam" ? mockTeam : null}
    />
  );
}