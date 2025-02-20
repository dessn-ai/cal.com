import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

// Mock component for preview
const MockUserComponent = (props: any) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">User Profile Preview</h1>
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <img 
            src={props.profile.image} 
            alt={props.profile.name}
            className="w-16 h-16 rounded-full"
          />
          <div>
            <h2 className="text-xl font-semibold">{props.profile.name}</h2>
            <p className="text-gray-600">@{props.profile.username}</p>
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="font-medium">Bio</h3>
          <p>{props.markdownStrippedBio}</p>
        </div>
        <div className="space-y-2">
          <h3 className="font-medium">Event Types</h3>
          <div className="space-y-2">
            {props.eventTypes.map((event: any) => (
              <div key={event.id} className="border p-3 rounded">
                <h4 className="font-medium">{event.title}</h4>
                <p className="text-sm text-gray-600">{event.length} minutes</p>
                <div dangerouslySetInnerHTML={{ __html: event.descriptionAsSafeHTML }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
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
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={
        <div className="flex h-full items-center justify-center">
          <p>Loading...</p>
        </div>
      }>
        <MockUserComponent {...props} />
      </Suspense>
    </QueryClientProvider>
  );
}