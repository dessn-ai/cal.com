import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';
import dynamic from 'next/dynamic';
import { DehydratedState } from '@tanstack/react-query';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';

// Dynamically import the component with no SSR
const ImportedComponent = dynamic(() => import('../../pages/team/[slug]/embed'), {
  ssr: false,
  loading: () => <div>Loading...</div>
});

const ErrorFallback = ({ error }) => (
  <div role="alert">
    <p>Something went wrong:</p>
    <pre>{error?.message}</pre>
  </div>
);

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback error={this.state.error} />;
    }
    return this.props.children;
  }
}

export default function ComponentPreview() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
        staleTime: Infinity,
      },
    },
  });

  const [state] = useParentState({
    considerUnpublished: {
      type: "boolean",
      value: true,
      label: "Consider Unpublished",
    },
    isValidOrgDomain: {
      type: "boolean",
      value: true,
      label: "Is Valid Org Domain",
    },
    isSEOIndexable: {
      type: "boolean",
      value: true,
      label: "Is SEO Indexable",
    },
    currentOrgDomain: {
      type: "string",
      value: "example.com",
      label: "Current Org Domain",
    },
    markdownStrippedBio: {
      type: "string",
      value: "This is a stripped bio",
      label: "Markdown Stripped Bio",
    },
  });

  const mockTeam = {
    id: 1,
    name: "Test Team",
    slug: "test-team",
    safeBio: "Safe bio content",
    members: [
      {
        name: "John Doe",
        id: "1",
        avatarUrl: "https://example.com/avatar.jpg",
        bio: "Member bio",
        profile: {
          id: 1,
          username: "johndoe",
        },
        subteams: [],
        username: "johndoe",
        accepted: true,
        organizationId: "org1",
        safeBio: "Safe member bio",
        bookerUrl: "https://example.com/book",
      },
    ],
    metadata: {
      requestedSlug: "team-slug",
      orgSeats: 5,
      orgPricePerSeat: 10,
    },
    children: [],
    parent: null,
    eventTypes: [],
    logo: "https://example.com/logo.png",
    isOrganization: true,
  };

  const mockThemeBasis = {
    brandColor: "#292929",
    darkBrandColor: "#fafafa",
    theme: "light",
  };

  const mockTrpcState: DehydratedState = {
    mutations: [],
    queries: [],
  };

  const mockSession = {
    user: {
      id: "test-user",
      name: "Test User",
      email: "test@example.com",
    },
    expires: "2024-12-31",
  };

  try {
    return (
      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <SessionProvider session={mockSession}>
            <QueryClientProvider client={queryClient}>
              <div className="preview-container">
                <ImportedComponent
                  considerUnpublished={state.considerUnpublished.value}
                  team={mockTeam}
                  trpcState={mockTrpcState}
                  themeBasis={mockThemeBasis}
                  markdownStrippedBio={state.markdownStrippedBio.value}
                  isValidOrgDomain={state.isValidOrgDomain.value}
                  currentOrgDomain={state.currentOrgDomain.value}
                  isSEOIndexable={state.isSEOIndexable.value}
                />
              </div>
            </QueryClientProvider>
          </SessionProvider>
        </Suspense>
      </ErrorBoundary>
    );
  } catch (error) {
    console.error('Error in ComponentPreview:', error);
    return <ErrorFallback error={error} />;
  }
}