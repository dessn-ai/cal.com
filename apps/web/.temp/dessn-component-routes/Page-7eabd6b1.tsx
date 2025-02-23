import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';
import { I18nextProvider } from 'react-i18next';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { FeatureProvider } from '@calcom/features/flags/context/provider';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

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
      return <div>Error: {this.state.error?.message || 'Something went wrong'}</div>;
    }
    return this.props.children;
  }
}

// Mock i18n instance
const i18n = {
  language: 'en',
  languages: ['en'],
  options: {},
  t: (key: string) => key,
  changeLanguage: () => Promise.resolve(),
  on: () => {},
  off: () => {},
  init: () => {},
};

// Mock components and providers
const MockTRPCProvider = ({ children }) => <>{children}</>;

// Mock functions and hooks
const mockRouter = {
  push: () => Promise.resolve(),
  replace: () => Promise.resolve(),
  refresh: () => Promise.resolve(),
  back: () => Promise.resolve(),
  forward: () => Promise.resolve(),
  prefetch: () => Promise.resolve(),
};

const mockSession = {
  user: { 
    id: '1',
    email: 'test@test.com',
    name: 'Test User'
  },
  expires: "1"
};

// Mock TRPC hooks
const mockTrpc = {
  viewer: {
    me: {
      useQuery: () => ({
        data: {
          id: 1,
          username: 'testuser',
          email: 'test@example.com',
        },
        isLoading: false,
      }),
    },
    eventTypes: {
      list: {
        useQuery: () => ({
          data: [],
          isLoading: false,
        }),
      },
    },
  },
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    params: {
      type: "string",
      value: JSON.stringify({}),
      label: "Params",
    },
    searchParams: {
      type: "string",
      value: JSON.stringify({}),
      label: "Search Params",
    },
  });

  const mockProps = {
    params: JSON.parse(state.params.value),
    searchParams: JSON.parse(state.searchParams.value),
  };

  // Lazy load the ImportedComponent
  const ImportedComponent = React.lazy(() => 
    import('../../app/(use-page-wrapper)/(main-nav)/event-types/page')
      .catch(error => ({
        default: () => <div>Error loading component: {error.message}</div>
      }))
  );

  return (
    <ErrorBoundary>
      <SessionProvider session={mockSession}>
        <I18nextProvider i18n={i18n}>
          <MockTRPCProvider>
            <QueryClientProvider client={queryClient}>
              <TooltipProvider>
                <FeatureProvider features={{}}>
                  <Suspense fallback={<div>Loading...</div>}>
                    <ImportedComponent {...mockProps} />
                  </Suspense>
                </FeatureProvider>
              </TooltipProvider>
            </QueryClientProvider>
          </MockTRPCProvider>
        </I18nextProvider>
      </SessionProvider>
    </ErrorBoundary>
  );
}

// Add window.matchMedia mock if needed
if (typeof window !== 'undefined') {
  window.matchMedia = window.matchMedia || function() {
    return {
      matches: false,
      addListener: function() {},
      removeListener: function() {},
      addEventListener: function() {},
      removeEventListener: function() {},
      dispatchEvent: function() {},
    };
  };
}

// Mock modules directly
import('next/headers').then((mod) => {
  Object.defineProperty(mod, 'headers', { value: () => new Map() });
  Object.defineProperty(mod, 'cookies', { value: () => new Map() });
});

import('next/navigation').then((mod) => {
  Object.defineProperty(mod, 'useRouter', { value: () => mockRouter });
  Object.defineProperty(mod, 'useSearchParams', { value: () => new URLSearchParams() });
  Object.defineProperty(mod, 'usePathname', { value: () => "" });
  Object.defineProperty(mod, 'useParams', { value: () => ({}) });
});

// Export mocked modules for other components to use
export const mockModules = {
  trpc: mockTrpc,
  router: mockRouter,
  session: mockSession,
};