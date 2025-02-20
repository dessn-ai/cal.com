import React from 'react';
import { useParentState } from '../useIframeState';

// Create a simplified mock email template component
const MockTeamInviteEmail = ({
  language,
  from,
  to,
  teamName,
  joinLink,
  isCalcomMember,
  isAutoJoin,
  isOrg,
  parentTeamName,
  isExistingUserMovedToOrg,
  prevLink,
  newLink
}) => {
  const getInviteText = () => {
    if (isOrg) {
      return isAutoJoin
        ? `${from} has added you to the ${teamName} organization.`
        : `${from} has invited you to join the ${teamName} organization.`;
    }
    
    if (parentTeamName) {
      return isAutoJoin
        ? `${from} has added you to the team ${teamName} in their organization ${parentTeamName}.`
        : `${from} has invited you to the team ${teamName} in their organization ${parentTeamName}.`;
    }
    
    return `${from} has invited you to join the team ${teamName}.`;
  };

  return (
    <div style={{ 
      maxWidth: '600px', 
      margin: '0 auto', 
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#ffffff',
      border: '1px solid #e1e1e1',
      borderRadius: '8px'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h1 style={{ fontSize: '24px', color: '#292929' }}>
          Team Invitation
        </h1>
      </div>

      <div style={{ marginBottom: '20px', color: '#4b5563' }}>
        <p>{getInviteText()}</p>
        
        {isExistingUserMovedToOrg && prevLink && newLink && (
          <p style={{ marginTop: '10px' }}>
            Your link will change from {prevLink} to {newLink}
          </p>
        )}
      </div>

      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <a
          href={joinLink}
          style={{
            backgroundColor: '#292929',
            color: '#ffffff',
            padding: '12px 24px',
            borderRadius: '6px',
            textDecoration: 'none',
            display: 'inline-block'
          }}
        >
          {isCalcomMember ? (isAutoJoin ? 'Login' : 'Accept Invitation') : 'Create Account'}
        </a>
      </div>

      <div style={{ 
        marginTop: '30px', 
        paddingTop: '20px', 
        borderTop: '1px solid #e1e1e1',
        fontSize: '14px',
        color: '#6b7280',
        textAlign: 'center'
      }}>
        <p>Have any questions? Contact our support team</p>
      </div>
    </div>
  );
};

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
      <MockTeamInviteEmail
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
  } catch (error) {
    console.error('Error rendering TeamInviteEmail:', error);
    return (
      <div style={{ color: 'red', padding: '20px' }}>
        Error rendering email template: {error.message}
      </div>
    );
  }
}