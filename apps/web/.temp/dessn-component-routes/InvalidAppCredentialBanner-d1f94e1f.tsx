import React from 'react';
import { useParentState } from '../useIframeState';

// Mock the InvalidAppCredentialBanner component if the actual import is failing
const InvalidAppCredentialBanner = ({ name, slug }: { name: string; slug: string }) => {
  return (
    <div className="rounded-md border border-red-200 bg-red-50 p-4">
      <div className="flex">
        <div className="flex-grow">
          <h3 className="text-sm font-medium text-red-800">
            Invalid {name} Credentials
          </h3>
          <div className="mt-2 text-sm text-red-700">
            <p>
              Your {name} credentials are invalid. Please reconfigure your {name} integration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    name: {
      type: "string",
      value: "Google Calendar",
      label: "App Name",
    },
    slug: {
      type: "string",
      value: "google-calendar",
      label: "App Slug",
    },
  });

  return (
    <InvalidAppCredentialBanner
      name={state.name.value}
      slug={state.slug.value}
    />
  );
}