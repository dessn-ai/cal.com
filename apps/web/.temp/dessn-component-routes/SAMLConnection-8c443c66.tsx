import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/sso/components/SAMLConnection';

import { useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    teamId: {
      type: "number",
      value: 1,
      label: "Team ID",
    },
    connectionType: {
      type: "dropdown",
      value: "SAML",
      options: ["SAML", "OIDC"],
      label: "Connection Type",
    },
  });

  const form = useForm();

  const connection = state.connectionType.value === "SAML" ? {
    type: "saml",
    acsUrl: "https://example.com/acs",
    entityId: "https://example.com/entity",
    callbackUrl: "https://example.com/callback",
  } : null;

  return (
    <ImportedComponent
      teamId={state.teamId.value}
      connection={connection}
    />
  );
}