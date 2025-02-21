import React from 'react';
import { useParentState } from '../useIframeState';
import { App } from '../../../../packages/lib/OgImages';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    name: {
      type: "string",
      value: "Cal.com",
      label: "Name",
    },
    description: {
      type: "string",
      value: "Scheduling infrastructure for absolutely everyone.",
      label: "Description",
    },
    slug: {
      type: "string",
      value: "/api/app-store/caldotcom/icon.svg",
      label: "Slug",
    },
  });

  return (
    <App
      name={state.name.value}
      description={state.description.value}
      slug={state.slug.value}
    />
  );
}