import React from 'react';
import { useParentState } from '../useIframeState';
import { Shell } from '../../../../packages/platform/atoms/src/components/ui/shell';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    heading: {
      type: "string",
      value: "Welcome to Cal.com",
      label: "Heading",
    },
    subtitle: {
      type: "string",
      value: "Manage your schedule efficiently",
      label: "Subtitle",
    },
    headerClassName: {
      type: "string",
      value: "bg-gray-100",
      label: "Header Class Name",
    },
    CTA: {
      type: "string",
      value: "<button>Get Started</button>",
      label: "CTA",
    },
  });

  return (
    <Shell
      heading={<h1>{state.heading.value}</h1>}
      subtitle={state.subtitle.value}
      headerClassName={state.headerClassName.value}
      CTA={<div dangerouslySetInnerHTML={{ __html: state.CTA.value }} />}
    >
      <p>This is the main content area of the Shell component.</p>
    </Shell>
  );
}