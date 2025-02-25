import React from 'react';
import { useParentState } from '../useIframeState';

// Mock the MembershipRole enum if not available
const MembershipRole = {
  OWNER: 'OWNER',
  ADMIN: 'ADMIN',
  MEMBER: 'MEMBER',
};

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
  isLoading: false,
  error: null,
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
    isOrg: {String(isOrg)}
    <br />
    teamId: {teamId}
    <br />
    isPrivate: {String(isPrivate)}
    <br />
    disabled: {String(disabled)}
  </div>
);

// Mock Privacy Component
const MockPrivacyComponent = () => {
  const query = mockUseQuery();
  const { data } = query;

  return (
    <div className="privacy-settings">
      <div className="mt-6">
        <h2 className="font-medium text-gray-900">Privacy Settings</h2>
        <p className="text-sm text-gray-600">
          Configure your organization's privacy settings
        </p>
      </div>

      <hr className="my-8 border-gray-200" />

      <MockLicenseRequired>
        <div className="flex flex-col gap-6">
          <MockMakeTeamPrivateSwitch
            isOrg={true}
            teamId={data?.id || 0}
            isPrivate={data?.isPrivate || false}
            disabled={false}
          />
        </div>
      </MockLicenseRequired>
    </div>
  );
};

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

  return <MockPrivacyComponent />;
}