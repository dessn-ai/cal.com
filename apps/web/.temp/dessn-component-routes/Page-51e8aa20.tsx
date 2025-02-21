import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

// Initialize i18next
const i18n = i18next.createInstance();
i18n.init({
  lng: 'en',
  resources: {
    en: {
      translation: {},
    },
  },
});

// Create a client
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
const MockSettingsHeader = ({ children }: { children: React.ReactNode }) => (
  <div data-testid="mock-settings-header">{children}</div>
);

const MockApiKeysView = () => (
  <div data-testid="mock-api-keys-view">
    <h1>API Keys View</h1>
    <button data-testid="mock-new-api-key-button">New API Key</button>
  </div>
);

// Wrap the imported component in a try-catch
const SafeImportedComponent = () => {
  try {
    return <MockApiKeysView />;
  } catch (error) {
    console.error('Error rendering component:', error);
    return <div>Error loading component</div>;
  }
};

export default function ComponentPreview() {
  const [state] = useParentState({});

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <QueryClientProvider client={queryClient}>
        <SessionProvider session={mockSession}>
          <I18nextProvider i18n={i18n}>
            <div className="preview-container">
              <MockSettingsHeader>
                <SafeImportedComponent />
              </MockSettingsHeader>
            </div>
          </I18nextProvider>
        </SessionProvider>
      </QueryClientProvider>
    </Suspense>
  );
}