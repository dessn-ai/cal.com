import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/sso/page/orgs-sso-view';
import { SessionProvider } from 'next-auth/react';
import { MembershipRole } from '@calcom/prisma/enums';

// Mock the required UI components
const MockTooltipProvider = ({ children }) => <>{children}</>;
const MockOrgBrandingProvider = ({ children }) => <>{children}</>;
const MockFeatureProvider = ({ children }) => <>{children}</>;

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
      id: "user123",
      email: "user@example.com",
      name: "Test User",
      username: "testuser",
      org: {
        id: state.orgId.value,
        name: "Test Organization",
        slug: "test-org",
        role: state.isAdminOrOwner.value ? MembershipRole.ADMIN : MembershipRole.MEMBER
      }
    },
    expires: new Date(Date.now() + 2 * 86400000).toISOString(),
  };

  return (
    <MockFeatureProvider>
      <MockOrgBrandingProvider>
        <MockTooltipProvider>
          <SessionProvider session={mockSession}>
            <ImportedComponent />
          </SessionProvider>
        </MockTooltipProvider>
      </MockOrgBrandingProvider>
    </MockFeatureProvider>
  );
}