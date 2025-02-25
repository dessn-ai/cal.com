import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';
import { TRPCClientError } from '@trpc/client';

// Simplified PageWrapper for preview
const PreviewPageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="preview-wrapper">
      {children}
    </div>
  );
};

// Mock the imported component to handle dynamic import issues
const Page = ({ isEmbed, profile, team, ...props }: any) => {
  try {
    if (team) {
      return (
        <div>
          <h1>{team.name}</h1>
          <p>Team Embed View</p>
        </div>
      );
    }
    return (
      <div>
        <h1>{profile.name}</h1>
        <p>User Embed View</p>
      </div>
    );
  } catch (error) {
    if (error instanceof TRPCClientError) {
      return <div>Error: {error.message}</div>;
    }
    return <div>Something went wrong</div>;
  }
};

// Attach the simplified PageWrapper
Page.PageWrapper = PreviewPageWrapper;

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

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Page {...props} />
    </Suspense>
  );
}