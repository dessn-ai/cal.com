import React, { Suspense, useEffect } from 'react';
import { useParentState } from '../useIframeState';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';
import { TooltipProvider } from '@radix-ui/react-tooltip';

// Mock the i18n configuration module
const mockI18nConfig = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    defaultNS: 'common',
  }
};

// Intercept the import
if (typeof window !== 'undefined') {
  const originalImport = window.import;
  window.import = async function(...args) {
    const [specifier] = args;
    if (specifier.includes('next-i18next.config.js')) {
      return Promise.resolve(mockI18nConfig);
    }
    return originalImport.apply(this, args);
  };
}

// Initialize i18next
const i18nInstance = i18next.createInstance();
i18nInstance
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    resources: {
      en: {
        common: {}
      }
    },
    interpolation: {
      escapeValue: false,
    },
  });

// Create Query Client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

// Simple providers
const FeatureProvider = ({ children }) => children;
const TRPCProvider = ({ children }) => children;

// Lazy load the ImportedComponent to allow for module interception
const LazyImportedComponent = React.lazy(() => 
  import('../../app/layout').catch(() => ({
    default: ({ children }) => <div>{children}</div>
  }))
);

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    children: {
      type: "string",
      value: "<div>Sample child content</div>",
      label: "Children",
    },
  });

  // Set up module mock
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // @ts-ignore
      window.__next_i18next_config = mockI18nConfig;
      // Mock the module system
      window.module = {
        ...window.module,
        exports: mockI18nConfig
      };
    }
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SessionProvider session={null}>
        <I18nextProvider i18n={i18nInstance}>
          <TRPCProvider>
            <QueryClientProvider client={queryClient}>
              <TooltipProvider>
                <FeatureProvider>
                  <Suspense fallback={<div>Loading layout...</div>}>
                    <LazyImportedComponent>
                      {React.createElement('div', { 
                        dangerouslySetInnerHTML: { __html: state.children.value }
                      })}
                    </LazyImportedComponent>
                  </Suspense>
                </FeatureProvider>
              </TooltipProvider>
            </QueryClientProvider>
          </TRPCProvider>
        </I18nextProvider>
      </SessionProvider>
    </Suspense>
  );
}

// Export the mock config
export const i18n = mockI18nConfig.i18n;