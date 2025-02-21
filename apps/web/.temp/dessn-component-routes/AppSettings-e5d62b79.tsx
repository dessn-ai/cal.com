import React from 'react';
import { useParentState } from '../useIframeState';
import { AppSettings } from '../../../../packages/app-store/_components/AppSettings';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    slug: {
      type: "string",
      value: "example-app",
      label: "App Slug",
    },
  });

  return <AppSettings slug={state.slug.value} />;
}