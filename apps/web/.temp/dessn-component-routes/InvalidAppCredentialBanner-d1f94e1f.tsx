import React from 'react';
import { useParentState } from '../useIframeState';
import { InvalidAppCredentialBanner } from '../../../../packages/features/users/components/InvalidAppCredentialsBanner';


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