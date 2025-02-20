import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/organizations/pages/settings/privacy';

import { MembershipRole } from '@calcom/prisma/enums';

// Mock the trpc hook
const mockUseQuery = () => ({
  data: {
    id: 1,
    isPrivate: false,
    user: {
      role: MembershipRole.OWNER,
      accepted: true,
    },
  },
});

// Mock the trpc object
const mockTrpc = {
  viewer: {
    organizations: {
      listCurrent: {
        useQuery: mockUseQuery,
      },
    },
  },
};

// Mock LicenseRequired component
const MockLicenseRequired = ({ children }) => <>{children}</>;

// Mock MakeTeamPrivateSwitch component
const MockMakeTeamPrivateSwitch = ({ isOrg, teamId, isPrivate, disabled }) => (
  <div>
    MakeTeamPrivateSwitch (mocked)
    <br />
    isOrg: {isOrg.toString()}
    <br />
    teamId: {teamId}
    <br />
    isPrivate: {isPrivate.toString()}
    <br />
    disabled: {disabled.toString()}
  </div>
);

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isOrgAdminOrOwner: {
      type: "boolean",
      value: true,
      label: "Is Org Admin or Owner",
    },
    isInviteOpen: {
      type: "boolean",
      value: false,
      label: "Is Invite Open",
    },
  });

  // Override the imported components and hooks with mocks
  ImportedComponent.defaultProps = {
    ...ImportedComponent.defaultProps,
    LicenseRequired: MockLicenseRequired,
    MakeTeamPrivateSwitch: MockMakeTeamPrivateSwitch,
    trpc: mockTrpc,
  };

  return <ImportedComponent />;
}