import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/connect-and-join/connect-and-join-view';

import { SessionProvider } from 'next-auth/react';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    token: {
      type: "string",
      value: "sample-token",
      label: "Token",
    },
  });

  const mockSession = {
    data: {
      user: {
        org: "Sample Org",
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