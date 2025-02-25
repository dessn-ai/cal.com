import React from 'react';
import { useParentState } from '../useIframeState';
import { VerifyEmailByCode } from '../../../../packages/emails/src/templates/VerifyEmailByCode';


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
    userEmail: {
      type: "string",
      value: "john@example.com",
      label: "User Email",
    },
    verificationEmailCode: {
      type: "string",
      value: "123456",
      label: "Verification Code",
    },
    isVerifyingEmail: {
      type: "boolean",
      value: false,
      label: "Is Verifying Email",
    },
  });

  const mockLanguage = (key: string, options?: Record<string, string>) => {
    return `Translated: ${key} ${JSON.stringify(options)}`;
  };

  return (
    <VerifyEmailByCode
      language={mockLanguage}
      user={{
        name: state.userName.value,
        email: state.userEmail.value,
      }}
      verificationEmailCode={state.verificationEmailCode.value}
      isVerifyingEmail={state.isVerifyingEmail.value}
    />
  );
}