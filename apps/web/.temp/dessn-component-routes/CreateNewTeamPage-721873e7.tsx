import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/settings/teams/new/create-new-team-view';
import { WizardLayout } from '@calcom/ui';
import { OrgBrandingProvider } from '@calcom/features/ee/organizations/context/provider';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    returnTo: {
      type: "string",
      value: "/teams",
      label: "Return To URL",
    },
    slug: {
      type: "string",
      value: "my-team",
      label: "Team Slug",
    },
  });

  // Mock organization branding data with all required fields
  const mockOrgBranding = {
    orgBranding: {
      logo: "",
      brandColor: "#292929",
      darkBrandColor: "#fafafa",
      theme: null,
      backgroundImage: null,
    },
    isLoading: false,
    organization: {
      id: 1,
      slug: "default-org",
      name: "Default Organization",
      metadata: {},
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    setOrgBranding: () => {},
    resetOrgBranding: () => {},
    isOrgAdmin: true,
  };

  // Mock the required hooks and functions
  React.useEffect(() => {
    // Mock the window object with required properties
    if (typeof window !== 'undefined') {
      // @ts-ignore
      window.__NEXT_DATA__ = {
        props: {
          pageProps: {
            user: {
              id: 1,
              username: 'testuser',
              name: 'Test User',
              email: 'test@example.com',
              organizationId: 1,
            },
          },
        },
      };

      // Mock TRPC
      // @ts-ignore
      window.trpc = {
        viewer: {
          teams: {
            list: {
              useQuery: () => ({
                data: [],
                isLoading: false,
              }),
            },
            hasTeamPlan: {
              useQuery: () => ({
                data: true,
                isLoading: false,
              }),
            },
          },
          organizations: {
            listCurrent: {
              useQuery: () => ({
                data: [mockOrgBranding.organization],
                isLoading: false,
              }),
            },
          },
        },
      };
    }
  }, []);

  return (
    <ErrorBoundary>
      <OrgBrandingProvider value={mockOrgBranding}>
        <WizardLayout currentStep={1} maxSteps={3}>
          <ImportedComponent />
        </WizardLayout>
      </OrgBrandingProvider>
    </ErrorBoundary>
  );
}

// Simple error boundary component
function ErrorBoundary({ children }: { children: React.ReactNode }) {
  const [hasError, setHasError] = React.useState(false);

  React.useEffect(() => {
    if (hasError) {
      console.error("Error occurred in component");
    }
  }, [hasError]);

  if (hasError) {
    return <div>Something went wrong. Please try again.</div>;
  }

  return <>{children}</>;
}