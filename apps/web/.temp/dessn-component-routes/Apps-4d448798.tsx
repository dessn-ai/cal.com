import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/apps/categories/[category]/category-view';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    apps: {
      type: "string",
      value: JSON.stringify([
        {
          slug: "app1",
          name: "App 1",
          description: "Description for App 1",
          installCount: 100,
          logo: "https://example.com/app1-logo.png",
        },
        {
          slug: "app2",
          name: "App 2",
          description: "Description for App 2",
          installCount: 50,
          logo: "https://example.com/app2-logo.png",
        },
      ]),
      label: "Apps",
    },
    category: {
      type: "string",
      value: "productivity",
      label: "Category",
    },
  });

  const apps = JSON.parse(state.apps.value);

  return (
    <ImportedComponent
      apps={apps}
      category={state.category.value}
    />
  );
}