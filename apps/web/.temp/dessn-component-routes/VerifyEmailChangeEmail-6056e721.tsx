import React from 'react';
import { useParentState } from '../useIframeState';
import { VerifyEmailChangeEmail } from '../../../../packages/emails/src/templates/VerifyEmailChangeEmail';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    language: {
      type: "string",
      value: "en",
      label: "Language",
    },
    userName: {
      type: "string",
      value: "John Doe",
      label: "User Name",
    },
    emailFrom: {
      type: "string",
      value: "old@example.com",
      label: "Old Email",
    },
    emailTo: {
      type: "string",
      value: "new@example.com",
      label: "New Email",
    },
    verificationEmailLink: {
      type: "string",
      value: "https://example.com/verify",
      label: "Verification Link",
    },
  });

  const mockLanguage = (key: string, options?: Record<string, string>) => {
    const translations: Record<string, string> = {
      "change_of_email": "Change of Email for {appName}",
      "hi_user_name": "Hi {name}!",
      "verify_email_change_description": "Please verify your email change for {appName}",
      "old_email_address": "Old Email Address",
      "new_email_address": "New Email Address",
      "verify_email_email_button": "Verify Email Change",
      "happy_scheduling": "Happy Scheduling",
      "the_calcom_team": "The {companyName} Team",
    };

    return translations[key].replace(/{(\w+)}/g, (_, p1) => options?.[p1] || p1);
  };

  return (
    <VerifyEmailChangeEmail
      language={mockLanguage}
      user={{
        name: state.userName.value,
        emailFrom: state.emailFrom.value,
        emailTo: state.emailTo.value,
      }}
      verificationEmailLink={state.verificationEmailLink.value}
    />
  );
}