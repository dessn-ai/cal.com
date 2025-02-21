import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/teams/components/TeamInviteList';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    teams: {
      type: "string",
      value: JSON.stringify([
        {
          id: 1,
          name: "Team Alpha",
          slug: "team-alpha",
          bio: "This is Team Alpha",
          hideBranding: false,
          role: "MEMBER",
          logoUrl: "https://example.com/logo.png",
          accepted: true
        },
        {
          id: 2,
          name: "Team Beta",
          slug: "team-beta",
          bio: "This is Team Beta",
          hideBranding: true,
          role: "ADMIN",
          logoUrl: null,
          accepted: false
        }
      ]),
      label: "Teams"
    }
  });

  const teams = JSON.parse(state.teams.value);

  return <ImportedComponent teams={teams} />;
}