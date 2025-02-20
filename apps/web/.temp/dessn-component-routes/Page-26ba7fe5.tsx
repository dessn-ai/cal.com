import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';
import { I18nextProvider } from 'react-i18next';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { FeatureProvider } from '@calcom/features/flags/context/provider';

// Create a mock i18n instance
const i18n = {
  language: 'en',
  languages: ['en'],
  defaultNS: 'common',
  ns: ['common'],
  t: (key: string) => key,
};

// Create a new QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

// Mock session
const mockSession = {
  user: {
    id: 1,
    name: 'Test User',
    email: 'test@example.com',
  },
  expires: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
};

// Mock Components
const MockLegacyPage = () => <div>LegacyPage</div>;
const MockSettingsHeader = ({ children }: { children: React.ReactNode }) => <div>{children}</div>;
const MockLayout = ({ children }: { children: React.ReactNode }) => <div>{children}</div>;

// Mock utils
const mockUtils = {
  _generateMetadata: () => ({}),
  getTranslate: () => Promise.resolve((key: string) => key),
};

// Override imports with mocks
const originalImport = window.require || (() => {});
window.require = (path: string) => {
  if (path === 'app/_utils') return mockUtils;
  if (path === '@calcom/features/ee/organizations/pages/members') return MockLegacyPage;
  if (path === '@calcom/features/settings/appDir/SettingsHeader') return MockSettingsHeader;
  if (path === 'app/(use-page-wrapper)/settings/(settings-layout)/layout') return MockLayout;
  return originalImport(path);
};

const ImportedComponent = React.lazy(() => 
  import('../../app/(use-page-wrapper)/settings/organizations/members/page')
    .catch(() => ({ 
      default: () => <div>Error loading component</div> 
    }))
);

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    containerClassName: {
      type: "string",
      value: "lg:max-w-screen-2xl",
      label: "Container Class Name",
    },
  });

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SessionProvider session={mockSession}>
        <I18nextProvider i18n={i18n}>
          <QueryClientProvider client={queryClient}>
            <TooltipProvider>
              <FeatureProvider>
                <ImportedComponent />
              </FeatureProvider>
            </TooltipProvider>
          </QueryClientProvider>
        </I18nextProvider>
      </SessionProvider>
    </Suspense>
  );
}