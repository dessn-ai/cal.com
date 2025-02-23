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

  try {
    return (
      <div className="email-preview">
        <div className="email-content">
          <h2>Team Invite Email Preview</h2>
          <dl>
            <dt>From:</dt>
            <dd>{state.from.value}</dd>
            
            <dt>To:</dt>
            <dd>{state.to.value}</dd>
            
            <dt>Team Name:</dt>
            <dd>{state.teamName.value}</dd>
            
            <dt>Join Link:</dt>
            <dd>{state.joinLink.value}</dd>
            
            {state.parentTeamName.value && (
              <>
                <dt>Parent Team:</dt>
                <dd>{state.parentTeamName.value}</dd>
              </>
            )}
          </dl>
          
          <div className="flags">
            {state.isCalcomMember.value && <div>Cal.com Member</div>}
            {state.isAutoJoin.value && <div>Auto Join Enabled</div>}
            {state.isOrg.value && <div>Organization Invite</div>}
            {state.isExistingUserMovedToOrg.value && <div>Existing User Moving to Org</div>}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error rendering TeamInviteEmail:', error);
    return <div>Error rendering email template</div>;
  }
}