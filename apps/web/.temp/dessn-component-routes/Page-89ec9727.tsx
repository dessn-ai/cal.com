import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';
import { I18nextProvider } from 'react-i18next';
import { TooltipProvider } from '@radix-ui/react-tooltip';

// Wrap the import in try-catch to handle potential import failures
const ImportedComponent = React.lazy(() => import('../../pages/org/[orgSlug]/embed').catch(() => ({
  default: () => <div>Failed to load component</div>
})));

import { DehydratedState } from '@tanstack/react-query';

export default function ComponentPreview() {
  const queryClient = new QueryClient();

  const [state, setState] = useParentState({
    considerUnpublished: {
      type: "boolean",
      value: true,
      label: "Consider Unpublished",
    },
    isValidOrgDomain: {
      type: "boolean",
      value: true,
      label: "Is Valid Org Domain",
    },
    currentOrgDomain: {
      type: "string",
      value: "example.com",
      label: "Current Org Domain",
    },
    isSEOIndexable: {
      type: "boolean",
      value: true,
      label: "Is SEO Indexable",
    },
  });

  const mockTeam = {
    safeBio: "A safe bio for the team",
    members: [
      {
        name: "John Doe",
        id: "1",
        avatarUrl: "https://example.com/avatar.jpg",
        bio: "Member bio",
        profile: {},
        subteams: [],
        username: "johndoe",
        accepted: true,
        organizationId: "org1",
        safeBio: "Safe bio for John",
        bookerUrl: "https://example.com/book/john",
      },
    ],
    metadata: {
      requestedSlug: "team-slug",
      orgSeats: 5,
      orgPricePerSeat: 10,
      billingPeriod: "MONTHLY",
    },
    children: [],
    parent: null,
    eventTypes: [],
    logo: "https://example.com/logo.png",
    isOrganization: true,
  };

  const mockTrpcState: DehydratedState = {
    mutations: [],
    queries: [],
  };

  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>
        <I18nextProvider i18n={{ language: 'en' } as any}>
          <TooltipProvider>
            <Suspense fallback={<div>Loading...</div>}>
              <ImportedComponent
                considerUnpublished={state.considerUnpublished.value}
                team={mockTeam}
                trpcState={mockTrpcState}
                themeBasis={null}
                markdownStrippedBio="Stripped bio content"
                isValidOrgDomain={state.isValidOrgDomain.value}
                currentOrgDomain={state.currentOrgDomain.value}
                isSEOIndexable={state.isSEOIndexable.value}
              />
            </Suspense>
          </TooltipProvider>
        </I18nextProvider>
      </SessionProvider>
    </QueryClientProvider>
  );
}