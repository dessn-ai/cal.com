import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/apps/[slug]/slug-view';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isAppDisabled: {
      type: "boolean",
      value: false,
      label: "Is App Disabled",
    },
    source: {
      type: "string",
      value: JSON.stringify({
        content: "# App Description\n\nThis is a sample app description.",
        data: {
          items: ["Feature 1", "Feature 2", "Feature 3"],
        },
      }),
      label: "Source",
    },
    data: {
      type: "string",
      value: JSON.stringify({
        name: "Sample App",
        description: "This is a sample app description",
        isGlobal: true,
        slug: "sample-app",
        variant: "other",
        type: "sample",
        logo: "https://example.com/logo.png",
        categories: ["productivity", "communication"],
        publisher: "Sample Publisher",
        feeType: "usage-based",
        price: 0,
        commission: 0,
        docsUrl: "https://example.com/docs",
        url: "https://example.com",
        email: "support@example.com",
        licenseRequired: false,
        teamsPlanRequired: false,
        isTemplate: false,
        dependencies: [],
        concurrentMeetings: 1,
        paid: false,
      }),
      label: "App Data",
    },
  });

  const parsedProps = {
    isAppDisabled: state.isAppDisabled.value,
    source: JSON.parse(state.source.value),
    data: JSON.parse(state.data.value),
  };

  return <ImportedComponent {...parsedProps} />;
}