import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/sso/page/orgs-sso-view';
import { SessionProvider } from 'next-auth/react';
import { MembershipRole } from '@calcom/prisma/enums';

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
    user: {
      id: 1,
      name: "Test User",
      email: "test@example.com",
      org: {
        id: state.orgId.value,
        name: "Test Organization",
        slug: "test-org",
        role: state.isAdminOrOwner.value ? MembershipRole.ADMIN : MembershipRole.MEMBER,
      },
    },
    expires: "2024-01-01",
  };

  return (
    <SessionProvider session={mockSession}>
      <ImportedComponent />
    </SessionProvider>
  );
}