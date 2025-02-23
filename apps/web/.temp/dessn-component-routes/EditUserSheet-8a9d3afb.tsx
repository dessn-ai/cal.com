import React from 'react';
import { useParentState } from '../useIframeState';
import { EditUserSheet } from '../../../../packages/features/users/components/UserTable/EditSheet/EditUserSheet';
import { OrgBrandingProvider } from '../../../../packages/features/ee/organizations/context/provider';

// Mock any API calls that might use crypto
const mockGenerateNonce = () => "mock-nonce-123";

// Create a HOC to catch crypto-related errors
const withCryptoErrorHandling = (WrappedComponent: React.ComponentType<any>) => {
  return function WithCryptoErrorHandling(props: any) {
    try {
      return <WrappedComponent {...props} />;
    } catch (error) {
      console.error('Crypto operation failed:', error);
      return null;
    }
  };
};

const SafeEditUserSheet = withCryptoErrorHandling(EditUserSheet);

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    editSheet: {
      type: "object",
      value: {
        showModal: true,
        user: {
          id: 1,
          username: "johndoe",
          email: "john@example.com",
          timeZone: "America/New_York",
          role: "MEMBER",
          avatarUrl: null,
          accepted: true,
          disableImpersonation: false,
          completedOnboarding: true,
          lastActiveAt: new Date().toISOString(),
          teams: [
            { id: 1, name: "Team A", slug: "team-a" },
            { id: 2, name: "Team B", slug: "team-b" }
          ],
          attributes: [
            {
              id: "1",
              attributeId: "attr1",
              value: "Value 1",
              slug: "value-1",
              weight: 1,
              contains: ["value1"]
            }
          ]
        }
      },
      label: "Edit Sheet State"
    }
  });

  const mockDispatch = React.useCallback(() => {
    console.log("Dispatch called");
  }, []);

  // Mock organization branding data that matches the expected type
  const mockOrgBrand = {
    id: 1,
    name: "Test Organization",
    slug: "test-org",
    logoUrl: null,
    fullDomain: "test-org.cal.com",
    domainSuffix: "cal.com",
    role: "MEMBER",
    theme: null,
    brandColor: "#292929",
    darkBrandColor: "#fafafa",
    logo: null,
    hideBranding: false
  };

  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <OrgBrandingProvider value={{ orgBrand: mockOrgBrand }}>
        <SafeEditUserSheet
          state={{
            changeMemberRole: { showModal: false },
            deleteMember: { showModal: false },
            impersonateMember: { showModal: false },
            inviteMember: { showModal: false },
            editSheet: state.editSheet.value
          }}
          dispatch={mockDispatch}
        />
      </OrgBrandingProvider>
    </ErrorBoundary>
  );
}

// Simple error boundary component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; fallback: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error('Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}