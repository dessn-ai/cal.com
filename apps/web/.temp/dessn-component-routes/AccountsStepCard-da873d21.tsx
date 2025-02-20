import React from 'react';
import { useParentState } from '../useIframeState';
import { AccountsStepCard } from '../../components/apps/installation/AccountsStepCard';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    teams: {
      type: "string",
      value: JSON.stringify([
        { id: 1, name: "Team 1", logoUrl: "https://example.com/logo1.png", isOrganization: false, alreadyInstalled: false },
        { id: 2, name: "Team 2", logoUrl: "https://example.com/logo2.png", isOrganization: true, alreadyInstalled: true }
      ]),
      label: "Teams",
    },
    personalAccount: {
      type: "string",
      value: JSON.stringify({
        id: 1,
        avatarUrl: "https://example.com/avatar.png",
        name: "John Doe",
        alreadyInstalled: false
      }),
      label: "Personal Account",
    },
    loading: {
      type: "boolean",
      value: false,
      label: "Loading",
    },
    installableOnTeams: {
      type: "boolean",
      value: true,
      label: "Installable on Teams",
    },
  });

  const onSelect = (id?: number) => {
    console.log("Selected id:", id);
  };

  return (
    <AccountsStepCard
      teams={JSON.parse(state.teams.value)}
      personalAccount={JSON.parse(state.personalAccount.value)}
      onSelect={onSelect}
      loading={state.loading.value}
      installableOnTeams={state.installableOnTeams.value}
    />
  );
}