import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/alby/pages/setup/index';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    email: {
      type: "string",
      value: "user@example.com",
      label: "Email",
    },
    lightningAddress: {
      type: "string",
      value: "user@getalby.com",
      label: "Lightning Address",
    },
    clientId: {
      type: "string",
      value: "alby_client_id",
      label: "Client ID",
    },
    clientSecret: {
      type: "string",
      value: "alby_client_secret",
      label: "Client Secret",
    },
  });

  return (
    <ImportedComponent
      email={state.email.value}
      lightningAddress={state.lightningAddress.value}
      clientId={state.clientId.value}
      clientSecret={state.clientSecret.value}
    />
  );
}