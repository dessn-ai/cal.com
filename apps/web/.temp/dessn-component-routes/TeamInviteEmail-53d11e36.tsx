import React from 'react';
import { useParentState } from '../useIframeState';
import { TeamInviteEmail } from '../../../../packages/emails/src/templates/TeamInviteEmail';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    language: {
      type: "dropdown",
      value: "en",
      options: ["en", "es", "fr", "de"],
      label: "Language",
    },
    from: {
      type: "string",
      value: "John Doe",
      label: "From",
    },
    to: {
      type: "string",
      value: "jane@example.com",
      label: "To",
    },
    teamName: {
      type: "string",
      value: "Awesome Team",
      label: "Team Name",
    },
    joinLink: {
      type: "string",
      value: "https://example.com/join",
      label: "Join Link",
    },
    isCalcomMember: {
      type: "boolean",
      value: false,
      label: "Is Calcom Member",
    },
    isAutoJoin: {
      type: "boolean",
      value: false,
      label: "Is Auto Join",
    },
    isOrg: {
      type: "boolean",
      value: false,
      label: "Is Organization",
    },
    parentTeamName: {
      type: "string",
      value: "",
      label: "Parent Team Name",
    },
    isExistingUserMovedToOrg: {
      type: "boolean",
      value: false,
      label: "Is Existing User Moved To Org",
    },
    prevLink: {
      type: "string",
      value: null,
      label: "Previous Link",
    },
    newLink: {
      type: "string",
      value: null,
      label: "New Link",
    },
  });

  const mockLanguage = (key: string, options?: any) => key;

  return (
    <TeamInviteEmail
      language={mockLanguage}
      from={state.from.value}
      to={state.to.value}
      teamName={state.teamName.value}
      joinLink={state.joinLink.value}
      isCalcomMember={state.isCalcomMember.value}
      isAutoJoin={state.isAutoJoin.value}
      isOrg={state.isOrg.value}
      parentTeamName={state.parentTeamName.value || undefined}
      isExistingUserMovedToOrg={state.isExistingUserMovedToOrg.value}
      prevLink={state.prevLink.value}
      newLink={state.newLink.value}
    />
  );
}