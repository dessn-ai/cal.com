import React from 'react';
import { useParentState } from '../useIframeState';
import { OrganisationAccountVerifyEmail } from '../../../../packages/emails/src/templates/OrganizationAccountVerifyEmail';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    email: {
      type: "string",
      value: "user@example.com",
      label: "User Email",
    },
    code: {
      type: "string",
      value: "123456",
      label: "Verification Code",
    },
    subject: {
      type: "string",
      value: "Verify Your Organization Account",
      label: "Email Subject",
    },
    title: {
      type: "string",
      value: "Organization Account Verification",
      label: "Email Title",
    },
    hideLogo: {
      type: "boolean",
      value: false,
      label: "Hide Logo",
    },
  });

  const mockLanguage = (key: string, params?: Record<string, string>) => {
    const translations: Record<string, string> = {
      "organization_verify_header": "Verify Your Organization Account",
      "hi_user_name": `Hi ${params?.name || ''}!`,
      "organization_verify_email_body": "Please use the following code to verify your organization account:",
      "happy_scheduling": "Happy scheduling!",
      "the_calcom_team": "The Cal.com team",
    };
    return translations[key] || key;
  };

  return (
    <OrganisationAccountVerifyEmail
      language={mockLanguage}
      user={{ email: state.email.value }}
      code={state.code.value}
      subject={state.subject.value}
      title={state.title.value}
      hideLogo={state.hideLogo.value}
    />
  );
}