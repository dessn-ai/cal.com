import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';
import dynamic from 'next/dynamic';

// Use dynamic import with error handling
const ImportedComponent = dynamic(
  () => import('../../pages/org/[orgSlug]/[user]/embed').catch(() => {
    // Fallback component in case import fails
    return () => <div>Failed to load component</div>;
  }),
  {
    ssr: false,
    loading: () => <div>Loading...</div>,
  }
);

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
      <ErrorBoundary>
        <ImportedComponent {...props} />
      </ErrorBoundary>
    </Suspense>
  );
}

// Simple ErrorBoundary component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong loading the component.</div>;
    }

    return this.props.children;
  }
}