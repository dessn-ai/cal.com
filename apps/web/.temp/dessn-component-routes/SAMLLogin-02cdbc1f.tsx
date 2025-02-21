import React from 'react';
import { useParentState } from '../useIframeState';
import { SAMLLogin } from '../../../../packages/features/auth/SAMLLogin';

import { useForm, FormProvider } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    samlTenantID: {
      type: "string",
      value: "example-tenant",
      label: "SAML Tenant ID",
    },
    samlProductID: {
      type: "string",
      value: "example-product",
      label: "SAML Product ID",
    },
  });

  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <SAMLLogin
        samlTenantID={state.samlTenantID.value}
        samlProductID={state.samlProductID.value}
        setErrorMessage={setErrorMessage}
      />
    </FormProvider>
  );
}