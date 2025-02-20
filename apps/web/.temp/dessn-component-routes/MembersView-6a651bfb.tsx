import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/organizations/pages/members';


// Mock the necessary dependencies
jest.mock('@calcom/features/ee/common/components/LicenseRequired', () => ({ children }) => <>{children}</>);
jest.mock('@calcom/features/users/components/UserTable/UserListTable', () => () => <div>UserListTable</div>);
jest.mock('@calcom/lib/hooks/useLocale', () => ({
  useLocale: () => ({ t: (key: string) => key }),
}));
jest.mock('@calcom/prisma/enums', () => ({
  MembershipRole: {
    OWNER: 'OWNER',
    ADMIN: 'ADMIN',
  },
}));
jest.mock('@calcom/trpc/react', () => ({
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
}));

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

  // Update the mock based on the state
  jest.mock('@calcom/trpc/react', () => ({
    trpc: {
      viewer: {
        organizations: {
          listCurrent: {
            useQuery: () => ({
              data: {
                isPrivate: state.isPrivate.value,
                user: { role: state.userRole.value },
              },
              isPending: false,
            }),
          },
        },
      },
    },
  }));

  return <ImportedComponent />;
}