import React from 'react';
import { useParentState } from '../useIframeState';
import { V2BaseEmailHtml } from '../../../../packages/emails/src/components/V2BaseEmailHtml';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    subject: {
      type: "string",
      value: "Important Email Subject",
      label: "Subject",
    },
    title: {
      type: "string",
      value: "Email Title",
      label: "Title",
    },
    subtitle: {
      type: "string",
      value: "Email Subtitle",
      label: "Subtitle",
    },
    headerType: {
      type: "dropdown",
      value: "checkCircle",
      options: ["checkCircle", "xCircle", "calendarCircle", "teamCircle"],
      label: "Header Type",
    },
    children: {
      type: "string",
      value: "This is the main content of the email.",
      label: "Email Content",
    },
    callToAction: {
      type: "string",
      value: "<button>Click me!</button>",
      label: "Call to Action",
    },
  });

  return (
    <V2BaseEmailHtml
      subject={state.subject.value}
      title={state.title.value}
      subtitle={state.subtitle.value}
      headerType={state.headerType.value as any}
      callToAction={<div dangerouslySetInnerHTML={{ __html: state.callToAction.value }} />}
    >
      {state.children.value}
    </V2BaseEmailHtml>
  );
}