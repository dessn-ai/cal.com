import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/teams/components/TeamListItem';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    team: {
      type: "string",
      value: JSON.stringify({
        id: 1,
        name: "Sample Team",
        slug: "sample-team",
        role: "MEMBER",
        accepted: true,
        logoUrl: "https://example.com/logo.png",
        inviteToken: { token: "sample-token", expiresInDays: 7 },
      }),
      label: "Team",
    },
    key: {
      type: "number",
      value: 1,
      label: "Key",
    },
    isPending: {
      type: "boolean",
      value: false,
      label: "Is Pending",
    },
    hideDropdown: {
      type: "boolean",
      value: false,
      label: "Hide Dropdown",
    },
  });

  const onActionSelect = (text: string) => {
    console.log("Action selected:", text);
  };

  const setHideDropdown = (value: boolean) => {
    setState("hideDropdown", value);
  };

  return (
    <ImportedComponent
      team={JSON.parse(state.team.value)}
      key={state.key.value}
      onActionSelect={onActionSelect}
      isPending={state.isPending.value}
      hideDropdown={state.hideDropdown.value}
      setHideDropdown={setHideDropdown}
    />
  );
}