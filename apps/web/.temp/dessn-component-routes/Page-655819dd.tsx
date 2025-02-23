import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../pages/team/[slug]/embed';

import { DehydratedState } from '@tanstack/react-query';

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
    isSEOIndexable: {
      type: "boolean",
      value: true,
      label: "Is SEO Indexable",
    },
    currentOrgDomain: {
      type: "string",
      value: "example.com",
      label: "Current Org Domain",
    },
    markdownStrippedBio: {
      type: "string",
      value: "This is a stripped bio",
      label: "Markdown Stripped Bio",
    },
  });

  const mockTeam = {
    safeBio: "Safe bio content",
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
        safeBio: "Safe member bio",
        bookerUrl: "https://example.com/book",
      },
    ],
    metadata: {
      requestedSlug: "team-slug",
      orgSeats: 5,
      orgPricePerSeat: 10,
    },
    children: [],
    parent: null,
    eventTypes: [],
    logo: "https://example.com/logo.png",
    isOrganization: true,
  };

  const mockThemeBasis = {
    // Add mock theme data here
  };

  const mockTrpcState: DehydratedState = {
    mutations: [],
    queries: [],
  };

  return (
    <ImportedComponent
      considerUnpublished={state.considerUnpublished.value}
      team={mockTeam}
      trpcState={mockTrpcState}
      themeBasis={mockThemeBasis}
      markdownStrippedBio={state.markdownStrippedBio.value}
      isValidOrgDomain={state.isValidOrgDomain.value}
      currentOrgDomain={state.currentOrgDomain.value}
      isSEOIndexable={state.isSEOIndexable.value}
    />
  );
}