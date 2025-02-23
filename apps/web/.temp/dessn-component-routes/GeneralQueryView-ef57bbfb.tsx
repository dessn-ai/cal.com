import React from 'react';
import { useParentState } from '../useIframeState';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

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
    id: "test-user",
    name: "Test User",
    email: "test@example.com",
  },
  expires: "2024-12-31"
};

// Initialize i18next with minimal configuration
const i18n = i18next.createInstance();
i18n
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    resources: {
      en: {
        translation: {}
      }
    },
    interpolation: {
      escapeValue: false,
    },
  });

// Mock Feature Provider
const FeatureProvider = ({ children }) => {
  return <>{children}</>;
};

// Mock the imported component to avoid i18n issues
const MockGeneralView = ({ revalidatePage }) => {
  return (
    <div>
      <h1>General Account Settings</h1>
      <button onClick={revalidatePage}>Revalidate Page</button>
    </div>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    revalidatePage: {
      type: "string",
      value: "async function",
      label: "Revalidate Page Function",
    },
  });

  const revalidatePage = async () => {
    console.log("Revalidating page...");
    // This is a mock function. In a real scenario, this would actually revalidate the page.
  };

  try {
    return (
      <SessionProvider session={mockSession}>
        <I18nextProvider i18n={i18n}>
          <QueryClientProvider client={queryClient}>
            <TooltipPrimitive.Provider>
              <FeatureProvider>
                <MockGeneralView revalidatePage={revalidatePage} />
              </FeatureProvider>
            </TooltipPrimitive.Provider>
          </QueryClientProvider>
        </I18nextProvider>
      </SessionProvider>
    );
  } catch (error) {
    console.error('Error in ComponentPreview:', error);
    return <div>Error loading component</div>;
  }
}