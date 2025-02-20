import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../pages/org/[orgSlug]/[user]/embed';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isEmbed: {
      type: "boolean",
      value: true,
      label: "Is Embed",
    },
    profile: {
      type: "dropdown",
      value: "user",
      options: ["user", "team"],
      label: "Profile Type",
    },
  });

  const mockUserProps: any = {
    trpcState: {},
    profile: {
      name: "John Doe",
      image: "https://example.com/avatar.jpg",
      theme: null,
      brandColor: "#000000",
      darkBrandColor: "#FFFFFF",
      organization: null,
      allowSEOIndexing: true,
      username: "johndoe",
    },
    users: [],
    themeBasis: null,
    markdownStrippedBio: "A short bio",
    safeBio: "A safe bio",
    entity: {
      considerUnpublished: false,
    },
    eventTypes: [],
    isOrgSEOIndexable: true,
    isEmbed: state.isEmbed.value,
  };

  const mockTeamProps: any = {
    team: {
      name: "Team Name",
      slug: "team-slug",
    },
    trpcState: {},
    isEmbed: state.isEmbed.value,
  };

  const props = state.profile.value === "user" ? mockUserProps : mockTeamProps;

  return <ImportedComponent {...props} />;
}