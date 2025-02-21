import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../components/ui/AuthContainer';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    footerText: {
      type: "string",
      value: "© 2023 Cal.com, Inc. All rights reserved.",
      label: "Footer Text",
    },
    showLogo: {
      type: "boolean",
      value: true,
      label: "Show Logo",
    },
    heading: {
      type: "string",
      value: "Welcome to Cal.com",
      label: "Heading",
    },
    loading: {
      type: "boolean",
      value: false,
      label: "Loading",
    },
  });

  return (
    <ImportedComponent
      footerText={state.footerText.value}
      showLogo={state.showLogo.value}
      heading={state.heading.value}
      loading={state.loading.value}
    >
      <div>Content goes here</div>
    </ImportedComponent>
  );
}