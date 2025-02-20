import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/sso/page/orgs-sso-view';

import { SessionProvider } from 'next-auth/react';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isAdminOrOwner: {
      type: "boolean",
      value: true,
      label: "Is Admin or Owner",
    },
    orgId: {
      type: "string",
      value: "org123",
      label: "Organization ID",
    },
  });

  const mockSession = {
    data: {
      user: {
        org: {
          id: state.orgId.value,
          role: state.isAdminOrOwner.value ? "ADMIN" : "MEMBER",
        },
      },
    },
    status: "authenticated",
  };

  return (
    <SessionProvider session={mockSession as any}>
      <ImportedComponent />
    </SessionProvider>
  );
}