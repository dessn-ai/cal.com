import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';
import { I18nextProvider } from 'react-i18next';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { useParentState } from '../useIframeState';

// Create instances of required clients/providers
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

// Mock session data
const mockSession = {
  user: {
    id: 1,
    name: 'Test User',
    email: 'test@example.com',
  },
  expires: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
};

// Mock i18n instance
const i18n = {
  language: 'en',
  t: (key) => key,
  // Add other required i18n methods
  exists: () => true,
  getFixedT: () => (key) => key,
};

// Mock components
const MockOrgBrandingProvider = ({ children }) => <>{children}</>;
const MockFeatureProvider = ({ children }) => <>{children}</>;
const MockTRPCProvider = ({ children }) => <>{children}</>;

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    status: {
      type: "dropdown",
      value: "upcoming",
      options: ["upcoming", "past", "cancelled", "unconfirmed"],
      label: "Status",
    },
  });

  const mockParams = {
    params: {
      status: state.status.value,
    },
    searchParams: {},
  };

  // Lazy load the actual component to prevent immediate import issues
  const ImportedComponent = React.lazy(() => 
    import('../../app/(use-page-wrapper)/(main-nav)/bookings/[status]/page')
      .catch(() => ({ default: () => <div>Failed to load component</div> }))
  );

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <QueryClientProvider client={queryClient}>
        <SessionProvider session={mockSession}>
          <I18nextProvider i18n={i18n}>
            <TooltipProvider>
              <MockTRPCProvider>
                <MockFeatureProvider>
                  <MockOrgBrandingProvider>
                    <div className="preview-container">
                      <ImportedComponent {...mockParams} />
                    </div>
                  </MockOrgBrandingProvider>
                </MockFeatureProvider>
              </MockTRPCProvider>
            </TooltipProvider>
          </I18nextProvider>
        </SessionProvider>
      </QueryClientProvider>
    </React.Suspense>
  );
}