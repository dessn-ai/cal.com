import React from 'react';
import { useParentState } from '../useIframeState';
import { VerifyAccountEmail } from '../../../../packages/emails/src/templates/VerifyAccountEmail';


const mockTFunction = (key: string, options?: any) => {
  const translations: { [key: string]: string } = {
    "verify_email_subject": "Verify your email for {{appName}}",
    "verify_email_email_header": "Verify your email",
    "hi_user_name": "Hi {{name}}!",
    "verify_email_email_body": "Please verify your email for {{appName}}",
    "verify_email_email_button": "Verify Email",
    "verify_email_email_link_text": "Or copy and paste this URL into your browser:",
    "happy_scheduling": "Happy scheduling!",
    "the_calcom_team": "The {{companyName}} team"
  };

  if (options) {
    return translations[key].replace(/{{(\w+)}}/g, (_, p1) => options[p1] || '');
  }
  return translations[key] || key;
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    name: {
      type: "string",
      value: "John Doe",
      label: "User Name",
    },
    email: {
      type: "string",
      value: "john@example.com",
      label: "User Email",
    },
    verificationEmailLink: {
      type: "string",
      value: "https://example.com/verify",
      label: "Verification Email Link",
    },
  });

  const props = {
    language: mockTFunction,
    user: {
      name: state.name.value,
      email: state.email.value,
    },
    verificationEmailLink: state.verificationEmailLink.value,
  };

  return <VerifyAccountEmail {...props} />;
}