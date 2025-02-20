import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/ui/components/head-seo/HeadSeo';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    title: {
      type: "string",
      value: "Welcome to Cal.com",
      label: "Title",
    },
    description: {
      type: "string",
      value: "Scheduling infrastructure for absolutely everyone.",
      label: "Description",
    },
    siteName: {
      type: "string",
      value: "Cal.com",
      label: "Site Name",
    },
    url: {
      type: "string",
      value: "https://cal.com",
      label: "URL",
    },
    canonical: {
      type: "string",
      value: "https://cal.com",
      label: "Canonical URL",
    },
    isBrandingHidden: {
      type: "boolean",
      value: false,
      label: "Hide Branding",
    },
    origin: {
      type: "string",
      value: "https://cal.com",
      label: "Origin",
    },
  });

  const appProps = {
    name: "Cal.com",
    description: "Scheduling infrastructure for absolutely everyone.",
    slug: "cal",
  };

  const meetingProps = {
    title: "Team Meeting",
    profile: {
      name: "John Doe",
      image: "https://example.com/john-doe.jpg",
    },
    users: [
      { name: "John Doe", username: "johndoe" },
      { name: "Jane Smith", username: "janesmith" },
    ],
  };

  return (
    <ImportedComponent
      title={state.title.value}
      description={state.description.value}
      siteName={state.siteName.value}
      url={state.url.value}
      canonical={state.canonical.value}
      isBrandingHidden={state.isBrandingHidden.value}
      origin={state.origin.value}
      app={appProps}
      meeting={meetingProps}
    />
  );
}