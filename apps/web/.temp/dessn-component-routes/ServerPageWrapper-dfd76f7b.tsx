import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';
import { I18nextProvider } from 'react-i18next';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { FeatureProvider } from '@calcom/features/flags/context/provider';

// Create a mock session
const mockSession = {
  user: {
    id: "mock-user-id",
    name: "Mock User",
    email: "mock@example.com",
  },
  expires: "2024-12-31"
};

// Create a new QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
    },
  },
});

// Mock i18n instance
const i18n = {
  language: 'en',
  t: (key) => key,
  exists: () => true,
  changeLanguage: () => new Promise(() => {}),
  options: {},
};

// Wrap the imported component in a try-catch to handle any potential errors
const SafeImportedComponent = React.lazy(async () => {
  try {
    const Component = await import('../../app/(use-page-wrapper)/settings/platform/managed-users/page');
    return {
      default: (props) => {
        try {
          return <Component.default {...props} />;
        } catch (error) {
          console.error('Error rendering component:', error);
          return <div>Error rendering component</div>;
        }
      }
    };
  } catch (error) {
    console.error('Error importing component:', error);
    return {
      default: () => <div>Error loading component</div>
    };
  }
});

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <SessionProvider session={mockSession}>
          <I18nextProvider i18n={i18n}>
            <QueryClientProvider client={queryClient}>
              <TooltipProvider>
                <FeatureProvider>
                  <SafeImportedComponent />
                </FeatureProvider>
              </TooltipProvider>
            </QueryClientProvider>
          </I18nextProvider>
        </SessionProvider>
      </Suspense>
    </ErrorBoundary>
  );
}

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error:', error);
    console.error('Error Info:', errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', color: 'red' }}>
          <h2>Something went wrong</h2>
          <details>
            <summary>Error Details</summary>
            <pre>{this.state.error?.toString()}</pre>
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}