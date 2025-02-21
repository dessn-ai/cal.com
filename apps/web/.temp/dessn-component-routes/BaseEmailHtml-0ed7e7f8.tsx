import React from 'react';
import { useParentState } from '../useIframeState';
import { BaseEmailHtml } from '../../../../packages/emails/src/components/BaseEmailHtml';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    children: {
      type: "string",
      value: "This is the email content.",
      label: "Email Content"
    },
    callToAction: {
      type: "string",
      value: "<button>Click me</button>",
      label: "Call to Action"
    },
    subject: {
      type: "string",
      value: "Important Email",
      label: "Subject"
    },
    title: {
      type: "string",
      value: "Email Title",
      label: "Title"
    },
    subtitle: {
      type: "string",
      value: "Email Subtitle",
      label: "Subtitle"
    },
    headerType: {
      type: "dropdown",
      value: "checkCircle",
      options: ["checkCircle", "xCircle", "calendarCircle", "teamCircle"],
      label: "Header Type"
    },
    hideLogo: {
      type: "boolean",
      value: false,
      label: "Hide Logo"
    }
  });

  return (
    <BaseEmailHtml
      children={<div dangerouslySetInnerHTML={{ __html: state.children.value }} />}
      callToAction={<div dangerouslySetInnerHTML={{ __html: state.callToAction.value }} />}
      subject={state.subject.value}
      title={state.title.value}
      subtitle={state.subtitle.value}
      headerType={state.headerType.value as "checkCircle" | "xCircle" | "calendarCircle" | "teamCircle"}
      hideLogo={state.hideLogo.value}
    />
  );
}