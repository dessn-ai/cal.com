import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';
import { SessionProvider } from 'next-auth/react';
import { I18nextProvider } from 'react-i18next';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { TRPCProvider } from '@calcom/trpc/react';
import { FeatureProvider } from '@calcom/features/flags/context/provider';
import { OrgBrandingProvider } from '@calcom/features/ee/organizations/context/provider';

// Import the actual component
const ImportedComponent = React.lazy(() => import('../../app/(use-page-wrapper)/settings/teams/new/page'));

// Create a new QueryClient instance
const queryClient = new QueryClient();

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SessionProvider>
        <I18nextProvider i18n={{}}>
          <QueryClientProvider client={queryClient}>
            <TRPCProvider>
              <TooltipProvider>
                <FeatureProvider>
                  <OrgBrandingProvider>
                    <ImportedComponent />
                  </OrgBrandingProvider>
                </FeatureProvider>
              </TooltipProvider>
            </TRPCProvider>
          </QueryClientProvider>
        </I18nextProvider>
      </SessionProvider>
    </Suspense>
  );
}