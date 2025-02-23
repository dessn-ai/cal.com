import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/sso/page/orgs-sso-view';
import { Session } from 'next-auth';
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

  const mockSession: Session = {
    expires: new Date(Date.now() + 2 * 86400).toISOString(),
    user: {
      id: "user123",
      name: "Test User",
      email: "test@example.com",
      org: {
        id: state.orgId.value,
        role: state.isAdminOrOwner.value ? "ADMIN" : "MEMBER",
      }
    }
  };

  return (
    <SessionProvider session={mockSession}>
      <ImportedComponent />
    </SessionProvider>
  );
}