import React from 'react';
import { useParentState } from '../useIframeState';

// Simple wrapper component to replace PageWrapper
const SimpleWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-gray-50 p-4">
    {children}
  </div>
);

// Mock the Booker component
const MockBooker = ({
  username,
  eventSlug,
  isTeamEvent,
  isEmbed,
  ...props
}: {
  username: string;
  eventSlug: string;
  isTeamEvent: boolean;
  isEmbed: boolean;
  [key: string]: any;
}) => {
  return (
    <div className="rounded-md border p-8 bg-white">
      <h2 className="font-medium text-gray-900 mb-4">Booking Preview</h2>
      <div className="space-y-3 text-sm">
        <div>
          <span className="font-medium">Username:</span> {username}
        </div>
        <div>
          <span className="font-medium">Event Slug:</span> {eventSlug}
        </div>
        <div>
          <span className="font-medium">Team Event:</span> {isTeamEvent ? 'Yes' : 'No'}
        </div>
        <div>
          <span className="font-medium">Embed Mode:</span> {isEmbed ? 'Yes' : 'No'}
        </div>
      </div>
    </div>
  );
};

// Mock the getBookerWrapperClasses function
const getBookerWrapperClasses = ({ isEmbed }: { isEmbed: boolean }) => {
  return `w-full ${isEmbed ? 'embedded' : ''} mx-auto`;
};

// Create the Type component that matches the structure of the actual component
function Type({
  slug,
  user,
  isEmbed,
}: {
  slug: string;
  user: string;
  isEmbed: boolean;
}) {
  return (
    <main className={getBookerWrapperClasses({ isEmbed: !!isEmbed })}>
      <MockBooker
        username={user}
        eventSlug={slug}
        isTeamEvent={true}
        isEmbed={isEmbed}
      />
    </main>
  );
}

export default function ComponentPreview() {
  const [state] = useParentState({
    isEmbed: {
      type: "boolean",
      value: false,
      label: "Is Embed",
    },
  });

  // Create preview props
  const previewProps = {
    slug: "preview-event",
    user: "preview-user",
    isEmbed: state.isEmbed.value,
  };

  return (
    <SimpleWrapper>
      <Type {...previewProps} />
    </SimpleWrapper>
  );
}