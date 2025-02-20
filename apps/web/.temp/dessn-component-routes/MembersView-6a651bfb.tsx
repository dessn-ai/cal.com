import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/organizations/pages/members';

// Mock modules using vi.mock or direct module replacement
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
};

// Create a mock for trpc
const createTrpcMock = (isPrivate: boolean, userRole: string) => ({
  trpc: {
    viewer: {
      organizations: {
        listCurrent: {
          useQuery: () => ({
            data: {
              isPrivate,
              user: { role: userRole },
            },
            isPending: false,
          }),
        },
      },
    },
  },
});

// Override imports
const originalRequire = window.require;
window.require = (modulePath: string) => {
  if (mockModules[modulePath]) {
    return mockModules[modulePath];
  }
  if (modulePath === '@calcom/trpc/react') {
    return createTrpcMock(false, 'OWNER'); // Default values
  }
  return originalRequire?.(modulePath);
};

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

  // Update the mock values based on state
  if (window.require) {
    window.require = (modulePath: string) => {
      if (mockModules[modulePath]) {
        return mockModules[modulePath];
      }
      if (modulePath === '@calcom/trpc/react') {
        return createTrpcMock(state.isPrivate.value, state.userRole.value);
      }
      return originalRequire?.(modulePath);
    };
  }

  return <ImportedComponent />;
}