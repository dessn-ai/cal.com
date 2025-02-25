import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/teams/components/TeamInviteListItem';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    teamId: {
      type: "number",
      value: 1,
      label: "Team ID",
    },
    teamName: {
      type: "string",
      value: "Sample Team",
      label: "Team Name",
    },
    teamSlug: {
      type: "string",
      value: "sample-team",
      label: "Team Slug",
    },
    teamBio: {
      type: "string",
      value: "This is a sample team bio",
      label: "Team Bio",
    },
    teamLogoUrl: {
      type: "string",
      value: "https://example.com/logo.png",
      label: "Team Logo URL",
    },
    teamHideBranding: {
      type: "boolean",
      value: false,
      label: "Hide Branding",
    },
    teamRole: {
      type: "dropdown",
      value: "MEMBER",
      options: ["MEMBER", "ADMIN", "OWNER"],
      label: "Team Role",
    },
    teamAccepted: {
      type: "boolean",
      value: false,
      label: "Team Accepted",
    },
    isPending: {
      type: "boolean",
      value: true,
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

  const team = {
    id: state.teamId.value,
    name: state.teamName.value,
    slug: state.teamSlug.value,
    bio: state.teamBio.value,
    logoUrl: state.teamLogoUrl.value,
    hideBranding: state.teamHideBranding.value,
    role: state.teamRole.value as any,
    accepted: state.teamAccepted.value,
  };

  return (
    <ImportedComponent
      team={team}
      key={1}
      onActionSelect={onActionSelect}
      isPending={state.isPending.value}
      hideDropdown={state.hideDropdown.value}
      setHideDropdown={setHideDropdown}
    />
  );
}