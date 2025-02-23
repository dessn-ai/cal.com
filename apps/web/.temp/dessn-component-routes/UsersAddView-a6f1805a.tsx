import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import { createTRPCReact } from '@trpc/react-query';
import superjson from 'superjson';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

// Mock the @calcom/lib/i18n module
const mockI18n = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  locales: ['en'],
  localeOptions: [
    {
      value: 'en',
      label: 'English',
    },
  ],
  defaultLocaleOption: {
    value: 'en',
    label: 'English',
  },
};

// Create a proxy to handle any i18n-related imports
const originalImport = window.import;
window.import = async function(...args) {
  const modulePath = args[0];
  if (modulePath.includes('@calcom/lib/i18n')) {
    return Promise.resolve(mockI18n);
  }
  return originalImport.apply(this, args);
};

// Initialize i18next
i18next.init({
  lng: 'en',
  resources: {
    en: {
      translation: {}
    }
  },
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
});

// Create a new QueryClient instance
const queryClient = new QueryClient();

// Create TRPC
const trpc = createTRPCReact<any>();

// Create TRPC client
const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: '/api/trpc',
    }),
  ],
  transformer: superjson,
});

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong. Please try again.</div>;
    }

    return this.props.children;
  }
}

// Lazy load the ImportedComponent to ensure our mock is in place
const LazyImportedComponent = React.lazy(() => import('../../../../packages/features/ee/users/pages/users-add-view'));

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  return (
    <ErrorBoundary>
      <I18nextProvider i18n={i18next}>
        <trpc.Provider client={trpcClient} queryClient={queryClient}>
          <QueryClientProvider client={queryClient}>
            <Suspense fallback={<div>Loading...</div>}>
              <LazyImportedComponent />
            </Suspense>
          </QueryClientProvider>
        </trpc.Provider>
      </I18nextProvider>
    </ErrorBoundary>
  );
}