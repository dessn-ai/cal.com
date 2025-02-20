import React from 'react';
import { useParentState } from '../useIframeState';
import { ShellMainAppDir } from "../../app/(use-page-wrapper)/(main-nav)/ShellMainAppDir";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { FeatureProvider } from '@calcom/features/flags/context/provider';
import { httpBatchLink } from '@trpc/client';
import { createTRPCReact } from '@trpc/react-query';

// Initialize i18next
const i18n = i18next.createInstance();
i18n.init({
  lng: 'en',
  resources: {
    en: {
      translation: {
        teams: "Teams",
        create_manage_teams_collaborative: "Create and manage teams collaboratively"
      },
    },
  },
});

// Create TRPC
const trpc = createTRPCReact();
const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: '/api/trpc',
    }),
  ],
});

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
    },
  },
});

// Mock TeamsView and TeamsCTA components
const MockTeamsView = () => (
  <div className="teams-view">
    <h3>Teams View</h3>
    <p>This is a mock of the teams view component</p>
  </div>
);

const MockTeamsCTA = () => (
  <button className="teams-cta">
    Create New Team
  </button>
);

function Providers({ children }: { children: React.ReactNode }) {
  // Mock session data
  const mockSession = {
    user: {
      id: 1,
      name: "Test User",
      email: "test@example.com",
      username: "testuser",
      role: "USER",
    },
    expires: "2024-12-31",
  };

  // Mock feature flags
  const mockFeatures = {
    flags: {},
    isFeatureEnabled: () => false,
  };

  return (
    <SessionProvider session={mockSession}>
      <I18nextProvider i18n={i18n}>
        <trpc.Provider client={trpcClient} queryClient={queryClient}>
          <QueryClientProvider client={queryClient}>
            <TooltipProvider>
              <FeatureProvider value={mockFeatures}>
                {children}
              </FeatureProvider>
            </TooltipProvider>
          </QueryClientProvider>
        </trpc.Provider>
      </I18nextProvider>
    </SessionProvider>
  );
}

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    params: {
      type: "string",
      value: JSON.stringify({}),
      label: "Params",
    },
    searchParams: {
      type: "string",
      value: JSON.stringify({ token: "example-token" }),
      label: "Search Params",
    },
  });

  const props = {
    params: JSON.parse(state.params.value),
    searchParams: JSON.parse(state.searchParams.value),
  };

  return (
    <Providers>
      <ErrorBoundary>
        <React.Suspense fallback={<div>Loading...</div>}>
          <ShellMainAppDir
            CTA={<MockTeamsCTA />}
            heading="Teams"
            subtitle="Create and manage teams collaboratively">
            <MockTeamsView />
          </ShellMainAppDir>
        </React.Suspense>
      </ErrorBoundary>
    </Providers>
  );
}

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', color: 'red' }}>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}