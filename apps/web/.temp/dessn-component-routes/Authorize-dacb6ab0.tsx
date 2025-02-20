import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/auth/oauth2/authorize-view';

import { SessionProvider } from 'next-auth/react';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    client_id: {
      type: "string",
      value: "example_client_id",
      label: "Client ID",
    },
    state: {
      type: "string",
      value: "example_state",
      label: "State",
    },
    scope: {
      type: "string",
      value: "read,write",
      label: "Scope",
    },
  });

  const mockSession = {
    data: {
      user: {
        name: "John Doe",
        email: "john@example.com",
      },
    },
    status: "authenticated",
  };

  return (
    <SessionProvider session={mockSession}>
      <ImportedComponent />
    </SessionProvider>
  );
}