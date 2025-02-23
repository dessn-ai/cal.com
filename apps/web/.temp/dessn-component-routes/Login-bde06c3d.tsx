import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/auth/login-view';

import { FormProvider, useForm } from "react-hook-form";

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    csrfToken: {
      type: "string",
      value: "sample-csrf-token",
      label: "CSRF Token",
    },
    isGoogleLoginEnabled: {
      type: "boolean",
      value: true,
      label: "Google Login Enabled",
    },
    isSAMLLoginEnabled: {
      type: "boolean",
      value: true,
      label: "SAML Login Enabled",
    },
    samlTenantID: {
      type: "string",
      value: "sample-tenant-id",
      label: "SAML Tenant ID",
    },
    samlProductID: {
      type: "string",
      value: "sample-product-id",
      label: "SAML Product ID",
    },
    totpEmail: {
      type: "string",
      value: null,
      label: "TOTP Email",
    },
  });

  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <ImportedComponent
        csrfToken={state.csrfToken.value}
        trpcState={{} as any}
        isGoogleLoginEnabled={state.isGoogleLoginEnabled.value}
        isSAMLLoginEnabled={state.isSAMLLoginEnabled.value}
        samlTenantID={state.samlTenantID.value}
        samlProductID={state.samlProductID.value}
        totpEmail={state.totpEmail.value}
      />
    </FormProvider>
  );
}