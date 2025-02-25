import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';
import dynamic from 'next/dynamic';

// Use dynamic import with error handling
const ImportedComponent = dynamic(() => import('../../pages/[user]/embed').catch(() => {
  // Fallback component if import fails
  return () => <div>Failed to load component</div>;
}), {
  ssr: false,
  loading: () => <div>Loading...</div>
});

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    trpcState: {
      type: 'string',
      value: '{}',
      label: 'TRPC State',
    },
    profile: {
      type: 'string',
      value: JSON.stringify({
        name: 'John Doe',
        image: 'https://example.com/avatar.jpg',
        theme: 'light',
        brandColor: '#000000',
        darkBrandColor: '#FFFFFF',
        organization: {
          requestedSlug: 'johndoe-org',
          slug: 'johndoe-org',
          id: 1,
        },
        allowSEOIndexing: true,
        username: 'johndoe',
      }),
      label: 'Profile',
    },
    users: {
      type: 'string',
      value: JSON.stringify([
        {
          name: 'John Doe',
          username: 'johndoe',
          bio: 'A sample bio',
          verified: true,
          avatarUrl: 'https://example.com/avatar.jpg',
          profile: {
            id: 1,
            upId: 'up_123',
            username: 'johndoe',
            organizationId: null,
            organization: null,
          },
        },
      ]),
      label: 'Users',
    },
    themeBasis: {
      type: 'string',
      value: 'light',
      label: 'Theme Basis',
    },
    markdownStrippedBio: {
      type: 'string',
      value: 'A sample bio without markdown',
      label: 'Markdown Stripped Bio',
    },
    safeBio: {
      type: 'string',
      value: 'A safe sample bio',
      label: 'Safe Bio',
    },
    entity: {
      type: 'string',
      value: JSON.stringify({
        logoUrl: 'https://example.com/logo.png',
        considerUnpublished: false,
        orgSlug: 'sample-org',
        name: 'Sample Organization',
        teamSlug: 'sample-team',
      }),
      label: 'Entity',
    },
    eventTypes: {
      type: 'string',
      value: JSON.stringify([
        {
          descriptionAsSafeHTML: '<p>A sample event description</p>',
          metadata: {},
          id: 1,
          title: 'Sample Event',
          slug: 'sample-event',
          length: 60,
          hidden: false,
          lockTimeZoneToggleOnBookingPage: false,
          requiresConfirmation: false,
          canSendCalVideoTranscriptionEmails: false,
          requiresBookerEmailVerification: false,
          price: 0,
          currency: 'USD',
          recurringEvent: null,
        },
      ]),
      label: 'Event Types',
    },
    isOrgSEOIndexable: {
      type: 'boolean',
      value: true,
      label: 'Is Org SEO Indexable',
    },
    isEmbed: {
      type: 'boolean',
      value: false,
      label: 'Is Embed',
    },
  });

  const props = {
    trpcState: JSON.parse(state.trpcState.value),
    profile: JSON.parse(state.profile.value),
    users: JSON.parse(state.users.value),
    themeBasis: state.themeBasis.value,
    markdownStrippedBio: state.markdownStrippedBio.value,
    safeBio: state.safeBio.value,
    entity: JSON.parse(state.entity.value),
    eventTypes: JSON.parse(state.eventTypes.value),
    isOrgSEOIndexable: state.isOrgSEOIndexable.value,
    isEmbed: state.isEmbed.value,
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ErrorBoundary>
        <ImportedComponent {...props} />
      </ErrorBoundary>
    </Suspense>
  );
}

// Simple Error Boundary Component
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