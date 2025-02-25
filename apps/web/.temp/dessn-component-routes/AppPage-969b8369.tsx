import React from 'react';
import { useParentState } from '../useIframeState';
import { AppPage } from '../../components/apps/AppPage';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    name: {
      type: "string",
      value: "Sample App",
      label: "App Name",
    },
    description: {
      type: "string",
      value: "This is a sample app description.",
      label: "Description",
    },
    type: {
      type: "string",
      value: "calendar_other",
      label: "App Type",
    },
    logo: {
      type: "string",
      value: "https://example.com/app-logo.png",
      label: "Logo URL",
    },
    slug: {
      type: "string",
      value: "sample-app",
      label: "App Slug",
    },
    variant: {
      type: "string",
      value: "other",
      label: "Variant",
    },
    categories: {
      type: "string",
      value: "calendar,productivity",
      label: "Categories",
    },
    author: {
      type: "string",
      value: "Sample Author",
      label: "Author",
    },
    price: {
      type: "number",
      value: 0,
      label: "Price",
    },
    email: {
      type: "string",
      value: "support@sampleapp.com",
      label: "Support Email",
    },
    licenseRequired: {
      type: "boolean",
      value: false,
      label: "License Required",
    },
    concurrentMeetings: {
      type: "boolean",
      value: false,
      label: "Concurrent Meetings",
    },
  });

  return (
    <AppPage
      name={state.name.value}
      description={state.description.value}
      type={state.type.value}
      logo={state.logo.value}
      slug={state.slug.value}
      variant={state.variant.value}
      categories={state.categories.value.split(',')}
      author={state.author.value}
      price={state.price.value}
      email={state.email.value}
      licenseRequired={state.licenseRequired.value}
      concurrentMeetings={state.concurrentMeetings.value}
      body={<div>App body content goes here</div>}
    />
  );
}