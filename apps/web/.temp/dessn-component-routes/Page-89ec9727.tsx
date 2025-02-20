import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../pages/org/[orgSlug]/embed';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    team: {
      type: "object",
      value: {
        name: "Sample Team",
        slug: "sample-team",
        id: 1,
        theme: "light",
        bio: "This is a sample team bio",
        hideBranding: false,
        brandColor: "#000000",
        darkBrandColor: "#FFFFFF",
        logoUrl: "https://example.com/logo.png",
        isPrivate: false,
        hideBookATeamMember: false,
        parentId: null,
        isOrganization: true,
        members: [],
        eventTypes: [],
        organizationSettings: {
          allowSEOIndexing: true,
          orgAutoAcceptEmail: "auto@example.com",
          orgProfileRedirectsToVerifiedDomain: false
        }
      },
      label: "Team",
    },
    trpcState: {
      type: "object",
      value: {},
      label: "TRPC State",
    },
    themeBasis: {
      type: "string",
      value: "light",
      label: "Theme Basis",
    },
    markdownStrippedBio: {
      type: "string",
      value: "This is a sample stripped bio",
      label: "Markdown Stripped Bio",
    },
    isValidOrgDomain: {
      type: "boolean",
      value: true,
      label: "Is Valid Org Domain",
    },
    currentOrgDomain: {
      type: "string",
      value: "example.org",
      label: "Current Org Domain",
    },
    isSEOIndexable: {
      type: "boolean",
      value: true,
      label: "Is SEO Indexable",
    },
  });

  return (
    <ImportedComponent
      team={state.team.value}
      trpcState={state.trpcState.value}
      themeBasis={state.themeBasis.value}
      markdownStrippedBio={state.markdownStrippedBio.value}
      isValidOrgDomain={state.isValidOrgDomain.value}
      currentOrgDomain={state.currentOrgDomain.value}
      isSEOIndexable={state.isSEOIndexable.value}
    />
  );
}