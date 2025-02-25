import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/organizations/pages/members';

// Mock all required components and modules using React.createContext
const MockLicenseRequired = ({ children }) => <>{children}</>;
const MockUserListTable = () => <div>UserListTable</div>;

// Create mock contexts
const TRPCContext = React.createContext(null);
const LocaleContext = React.createContext(null);

// Create mock providers
const MockTRPCProvider = ({ children, isPrivate, userRole }) => {
  const mockTrpc = {
    viewer: {
      organizations: {
        listCurrent: {
          useQuery: () => ({
            data: {
              isPrivate,
              user: { role: userRole },
              members: [],
              membership: {
                role: userRole,
                accepted: true,
              },
            },
            isPending: false,
          }),
        },
        getMembershipbyUser: {
          useQuery: () => ({
            data: {
              role: userRole,
              accepted: true,
            },
            isPending: false,
          }),
        },
      },
      teams: {
        list: {
          useQuery: () => ({
            data: [],
            isPending: false,
          }),
        },
      },
    },
  };

  return (
    <TRPCContext.Provider value={mockTrpc}>
      {children}
    </TRPCContext.Provider>
  );
};

const MockLocaleProvider = ({ children }) => {
  const mockLocale = {
    t: (key: string) => key,
    isLocaleReady: true,
    i18n: {
      language: 'en',
    },
  };

  return (
    <LocaleContext.Provider value={mockLocale}>
      {children}
    </LocaleContext.Provider>
  );
};

// Create a wrapper component that provides all necessary context
const ComponentWrapper = ({ children, isPrivate, userRole }) => {
  // Mock any hooks or utilities that the component might need
  const mockUtils = {
    useLocale: () => ({
      t: (key: string) => key,
      isLocaleReady: true,
      i18n: {
        language: 'en',
      },
    }),
    useSession: () => ({
      data: {
        user: {
          id: 1,
          username: 'testuser',
          email: 'test@example.com',
          name: 'Test User',
        },
        expires: '2024-12-31',
      },
      status: 'authenticated',
    }),
  };

  // Inject mock utilities into global scope if needed
  if (typeof window !== 'undefined') {
    window.__mockUtils = mockUtils;
  }

  return (
    <MockLocaleProvider>
      <MockTRPCProvider isPrivate={isPrivate} userRole={userRole}>
        {children}
      </MockTRPCProvider>
    </MockLocaleProvider>
  );
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

  return (
    <ComponentWrapper
      isPrivate={state.isPrivate.value}
      userRole={state.userRole.value}
    >
      <ImportedComponent />
    </ComponentWrapper>
  );
}