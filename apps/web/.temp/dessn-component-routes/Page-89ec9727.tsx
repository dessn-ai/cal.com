import React from 'react';
import { useParentState } from '../useIframeState';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { DehydratedState } from '@tanstack/react-query';
import { SessionProvider } from "next-auth/react";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import * as Tooltip from '@radix-ui/react-tooltip';
import { FeatureProvider } from '@calcom/features/flags/context/provider';

// Create a new QueryClient instance
const queryClient = new QueryClient();

// Initialize i18next
const i18n = i18next.createInstance();
i18n.init({
  lng: 'en',
  resources: {},
});

// Mock Component instead of importing
const MockComponent = ({
  considerUnpublished,
  team,
  trpcState,
  themeBasis,
  markdownStrippedBio,
  isValidOrgDomain,
  currentOrgDomain,
  isSEOIndexable,
}) => {
  return (
    <div className="p-4">
      <h1>Organization Embed Page</h1>
      <div>Domain: {currentOrgDomain}</div>
      <div>Team Name: {team.members[0].name}</div>
      <div>Bio: {markdownStrippedBio}</div>
    </div>
  );
};

export default function ComponentPreview() {
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

  try {
    return (
      <SessionProvider session={null}>
        <I18nextProvider i18n={i18n}>
          <QueryClientProvider client={queryClient}>
            <FeatureProvider
              features={{}}
              baseUrl=""
              isTeamMetadataUpdated={false}
            >
              <Tooltip.Provider>
                <div className="h-full">
                  <MockComponent
                    considerUnpublished={state.considerUnpublished.value}
                    team={mockTeam}
                    trpcState={mockTrpcState}
                    themeBasis={null}
                    markdownStrippedBio="Stripped bio content"
                    isValidOrgDomain={state.isValidOrgDomain.value}
                    currentOrgDomain={state.currentOrgDomain.value}
                    isSEOIndexable={state.isSEOIndexable.value}
                  />
                </div>
              </Tooltip.Provider>
            </FeatureProvider>
          </QueryClientProvider>
        </I18nextProvider>
      </SessionProvider>
    );
  } catch (error) {
    console.error('Render error:', error);
    return <div>Error rendering component</div>;
  }
}