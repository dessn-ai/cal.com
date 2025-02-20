import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/auth/verify-email-change-view';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    updateSession: {
      type: "boolean",
      value: true,
      label: "Update Session",
    },
    token: {
      type: "string",
      value: "sample-token-123",
      label: "Token",
    },
    updatedEmail: {
      type: "string",
      value: "newemail@example.com",
      label: "Updated Email",
    },
  });

  return (
    <ImportedComponent
      updateSession={state.updateSession.value}
      token={state.token.value}
      updatedEmail={state.updatedEmail.value}
    />
  );
}