import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/signup-view';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    prepopulateFormValues: {
      type: "string",
      value: JSON.stringify({ email: "example@example.com", username: "exampleuser" }),
      label: "Prepopulate Form Values",
    },
    token: {
      type: "string",
      value: "exampleToken",
      label: "Token",
    },
    orgSlug: {
      type: "string",
      value: "exampleOrg",
      label: "Organization Slug",
    },
    isGoogleLoginEnabled: {
      type: "boolean",
      value: true,
      label: "Is Google Login Enabled",
    },
    isSAMLLoginEnabled: {
      type: "boolean",
      value: true,
      label: "Is SAML Login Enabled",
    },
    orgAutoAcceptEmail: {
      type: "string",
      value: "example@org.com",
      label: "Organization Auto Accept Email",
    },
    redirectUrl: {
      type: "string",
      value: "/example-redirect",
      label: "Redirect URL",
    },
    emailVerificationEnabled: {
      type: "boolean",
      value: true,
      label: "Email Verification Enabled",
    },
  });

  return (
    <ImportedComponent
      prepopulateFormValues={state.prepopulateFormValues.value ? JSON.parse(state.prepopulateFormValues.value) : undefined}
      token={state.token.value}
      orgSlug={state.orgSlug.value}
      isGoogleLoginEnabled={state.isGoogleLoginEnabled.value}
      isSAMLLoginEnabled={state.isSAMLLoginEnabled.value}
      orgAutoAcceptEmail={state.orgAutoAcceptEmail.value}
      redirectUrl={state.redirectUrl.value}
      emailVerificationEnabled={state.emailVerificationEnabled.value}
    />
  );
}