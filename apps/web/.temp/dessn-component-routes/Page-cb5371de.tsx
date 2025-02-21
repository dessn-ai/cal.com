import React from 'react';
import { useParentState } from '../useIframeState';

// Simple wrapper component to replace PageWrapper
const SimpleWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="min-h-screen bg-white dark:bg-gray-900">
    <main className="max-w-4xl mx-auto px-4 py-8">
      {children}
    </main>
  </div>
);

// Create a mock component instead of importing the actual one
const MockTeamEmbed = ({ isEmbed, slug, type }: { isEmbed: boolean; slug: string; type: string }) => {
  return (
    <div className="rounded-lg border p-8 shadow-sm">
      <h1 className="text-2xl font-semibold mb-4">Team Scheduling Page</h1>
      <div className="space-y-4">
        <div>
          <label className="font-medium">Team Slug:</label>
          <span className="ml-2">{slug}</span>
        </div>
        <div>
          <label className="font-medium">Event Type:</label>
          <span className="ml-2">{type}</span>
        </div>
        <div>
          <label className="font-medium">Embed Mode:</label>
          <span className="ml-2">{isEmbed ? 'Yes' : 'No'}</span>
        </div>
      </div>
    </div>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isEmbed: {
      type: "boolean",
      value: false,
      label: "Is Embed",
    },
  });

  const mockSSRProps = {
    slug: "team-slug",
    type: "event-type",
    team: {
      id: 1,
      name: "Test Team",
      slug: "team-slug",
    },
    eventType: {
      id: 1,
      title: "Test Event",
      slug: "event-type",
    },
    trpcState: {},
    profile: {
      slug: "team-slug",
      name: "Test Team",
    }
  };

  return (
    <SimpleWrapper>
      <MockTeamEmbed 
        isEmbed={state.isEmbed.value}
        slug={mockSSRProps.slug}
        type={mockSSRProps.type}
      />
    </SimpleWrapper>
  );
}