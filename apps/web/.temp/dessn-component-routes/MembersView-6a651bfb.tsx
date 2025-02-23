import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/organizations/pages/members';

// Mock components and hooks directly
const mockModules = {
  '@calcom/features/ee/common/components/LicenseRequired': {
    default: ({ children }) => <>{children}</>,
  },
  '@calcom/features/users/components/UserTable/UserListTable': {
    default: () => <div>UserListTable</div>,
  },
  '@calcom/lib/hooks/useLocale': {
    useLocale: () => ({ t: (key: string) => key }),
  },
  '@calcom/prisma/enums': {
    MembershipRole: {
      OWNER: 'OWNER',
      ADMIN: 'ADMIN',
    },
  },
  '@calcom/trpc/react': {
    trpc: {
      viewer: {
        organizations: {
          listCurrent: {
            useQuery: () => ({
              data: {
                isPrivate: false,
                user: { role: 'OWNER' },
              },
              isPending: false,
            }),
          },
        },
      },
    },
  },
};

// Override the imports
globalThis.__mocks__ = mockModules;

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isPrivate: {
      type: "boolean",
      value: false,
      label: "Is Organization Private",
    },
    userRole: {
      type: "dropdown",
      value: "OWNER",
      options: ["OWNER", "ADMIN", "MEMBER"],
      label: "User Role",
    },
  });

  // Update the mock data based on state
  mockModules['@calcom/trpc/react'].trpc.viewer.organizations.listCurrent.useQuery = () => ({
    data: {
      isPrivate: state.isPrivate.value,
      user: { role: state.userRole.value },
    },
    isPending: false,
  });

  return <ImportedComponent />;
}