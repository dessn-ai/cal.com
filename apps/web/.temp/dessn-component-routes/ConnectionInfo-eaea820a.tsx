import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/sso/components/ConnectionInfo';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    teamId: {
      type: "number",
      value: 1,
      label: "Team ID",
    },
    connectionType: {
      type: "dropdown",
      value: "saml",
      options: ["saml", "oidc"],
      label: "Connection Type",
    },
  });

  const connection: SSOConnection = {
    type: state.connectionType.value,
    acsUrl: state.connectionType.value === "saml" ? "https://example.com/acs" : null,
    entityId: state.connectionType.value === "saml" ? "https://example.com/entity" : null,
    callbackUrl: state.connectionType.value === "oidc" ? "https://example.com/callback" : null,
  };

  return (
    <ImportedComponent
      teamId={state.teamId.value}
      connection={connection}
    />
  );
}

type SSOConnection = {
  type: string;
  acsUrl: string | null;
  entityId: string | null;
  callbackUrl: string | null;
};