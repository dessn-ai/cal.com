import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/sso/components/OIDCConnection';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    teamId: {
      type: "number",
      value: 1,
      label: "Team ID",
    },
    connection: {
      type: "dropdown",
      value: "null",
      options: ["null", "saml", "oidc"],
      label: "Connection Type",
    },
  });

  const connection = state.connection.value === "null" ? null : {
    type: state.connection.value,
    acsUrl: "https://example.com/acs",
    entityId: "https://example.com/entity",
    callbackUrl: "https://example.com/callback",
  };

  return (
    <ImportedComponent
      teamId={state.teamId.value}
      connection={connection}
    />
  );
}