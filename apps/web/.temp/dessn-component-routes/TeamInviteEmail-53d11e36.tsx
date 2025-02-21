// Create virtual module for @calcom/prisma
const virtualModule = `
export const prisma = {
  validator: {
    validate: () => true
  }
};
export default prisma;
`;

// Register virtual module
if (typeof window !== 'undefined') {
  window.__vite__register = window.__vite__register || {};
  window.__vite__register['@calcom/prisma'] = virtualModule;
}

import React from 'react';
import { useParentState } from '../useIframeState';
import { TeamInviteEmail } from '../../../../packages/emails/src/templates/TeamInviteEmail';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

// Initialize i18next
i18next.init({
  lng: 'en',
  resources: {
    en: {
      translation: {
        'email_team_invite|heading|invited_to_regular_team': 'Invited to team',
        'email_team_invite|content|invited_to_regular_team': 'You have been invited to join the team',
        'email_no_user_signoff': 'Best regards, {appName}',
        'have_any_questions': 'Have any questions?',
        'contact': 'Contact',
        'our_support_team': 'our support team',
        'create_your_account': 'Create your account',
        'email_user_cta': 'Join team',
        'login': 'Login'
      }
    }
  }
});

// Mock components
const V2BaseEmailHtml = ({ children, subject }) => (
  <div className="email-wrapper">
    <h2>{subject}</h2>
    {children}
  </div>
);

const CallToAction = ({ label, href }) => (
  <a href={href} style={{ 
    padding: '10px 20px',
    background: '#000',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '5px',
    display: 'inline-block'
  }}>
    {label}
  </a>
);

// Create a simplified preview component
const SimpleTeamInviteEmail = (props) => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <h1>Team Invitation</h1>
      <p>You have been invited to join {props.teamName} by {props.from}</p>
      <CallToAction label="Join Team" href={props.joinLink} />
      <p>Best regards,<br />Cal.com Team</p>
    </div>
  );
};

export default function ComponentPreview() {
  const [state] = useParentState({
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

  const mockLanguage = (key: string, options?: any) => {
    return i18next.t(key, { ...options, appName: 'Cal.com' });
  };

  try {
    return (
      <I18nextProvider i18n={i18next}>
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', background: '#fff' }}>
          <SimpleTeamInviteEmail
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
        </div>
      </I18nextProvider>
    );
  } catch (error) {
    console.error('Error rendering email template:', error);
    return (
      <div style={{ color: 'red', padding: '20px', background: '#fff' }}>
        <h2>Error rendering email template</h2>
        <p><strong>Message:</strong> {error.message}</p>
        <pre style={{ whiteSpace: 'pre-wrap' }}>{error.stack}</pre>
      </div>
    );
  }
}