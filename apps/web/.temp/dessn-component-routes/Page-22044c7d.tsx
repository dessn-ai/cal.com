import React, { Suspense, useState, useEffect } from 'react';
import { useParentState } from '../useIframeState';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider as TooltipProvider } from '@radix-ui/react-tooltip';
import { I18nextProvider } from 'react-i18next';
import { SessionProvider } from 'next-auth/react';
import { FeatureProvider } from '@calcom/features/flags/context/provider';
import i18next from 'i18next';

// Create a new instance of QueryClient
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

// Initialize i18next
const i18n = i18next.createInstance();
i18n.init({
  fallbackLng: 'en',
  debug: false,
  resources: {},
});

// Fallback component in case the import fails
const FallbackComponent = () => (
  <div className="p-4">
    <h1>Organization Privacy Settings</h1>
    <p>Unable to load the privacy settings component.</p>
  </div>
);

export default function ComponentPreview() {
  const [state, setState] = useParentState({});
  const [Component, setComponent] = useState<React.ComponentType | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadComponent = async () => {
      try {
        // Try different import paths
        const module = await import('../../app/(use-page-wrapper)/settings/(settings-layout)/organizations/privacy/page')
          .catch(() => import('/app/(use-page-wrapper)/settings/(settings-layout)/organizations/privacy/page'))
          .catch(() => import('@calcom/web/app/(use-page-wrapper)/settings/(settings-layout)/organizations/privacy/page'))
          .catch(() => {
            throw new Error('Failed to import component');
          });
        
        setComponent(() => module.default || FallbackComponent);
      } catch (e) {
        console.error('Failed to load component:', e);
        setError(true);
        setComponent(() => FallbackComponent);
      }
    };

    loadComponent();
  }, []);

  if (!Component) {
    return <div>Loading...</div>;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SessionProvider>
        <I18nextProvider i18n={i18n}>
          <QueryClientProvider client={queryClient}>
            <TooltipProvider>
              <FeatureProvider>
                <div className="w-full">
                  <Component />
                </div>
              </FeatureProvider>
            </TooltipProvider>
          </QueryClientProvider>
        </I18nextProvider>
      </SessionProvider>
    </Suspense>
  );
}