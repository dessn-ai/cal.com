import React from 'react';
import { useParentState } from '../useIframeState';
import { ForgotPasswordEmail } from '../../../../packages/emails/src/templates/ForgotPasswordEmail';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    userName: {
      type: "string",
      value: "John Doe",
      label: "User Name",
    },
    userEmail: {
      type: "string",
      value: "john@example.com",
      label: "User Email",
    },
    resetLink: {
      type: "string",
      value: "https://example.com/reset-password",
      label: "Reset Link",
    },
    subject: {
      type: "string",
      value: "Reset Your Password",
      label: "Email Subject",
    },
    hideLogo: {
      type: "boolean",
      value: false,
      label: "Hide Logo",
    },
  });

  const mockLanguage = (key: string, params?: Record<string, string>) => {
    const translations: Record<string, string> = {
      "reset_password_subject": "Reset your password for {appName}",
      "hi_user_name": "Hi {name}",
      "someone_requested_password_reset": "Someone requested a password reset for your account.",
      "change_password": "Change Password",
      "password_reset_instructions": "If you didn't request this, please ignore this email.",
      "have_any_questions": "Have any questions?",
      "contact_our_support_team": "Contact our support team",
    };

    let translation = translations[key] || key;
    if (params) {
      Object.entries(params).forEach(([paramKey, paramValue]) => {
        translation = translation.replace(`{${paramKey}}`, paramValue);
      });
    }
    return translation;
  };

  return (
    <ForgotPasswordEmail
      language={mockLanguage}
      user={{
        name: state.userName.value,
        email: state.userEmail.value,
      }}
      resetLink={state.resetLink.value}
      subject={state.subject.value}
      hideLogo={state.hideLogo.value}
    />
  );
}