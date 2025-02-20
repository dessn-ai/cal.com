import React from 'react';
import { useParentState } from '../useIframeState';
import { ResponseEmail } from '../../../../packages/app-store/routing-forms/emails/components/ResponseEmail';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    formName: {
      type: "string",
      value: "Sample Form",
      label: "Form Name",
    },
    formId: {
      type: "string",
      value: "sample-form-id",
      label: "Form ID",
    },
    subject: {
      type: "string",
      value: "New Form Response",
      label: "Email Subject",
    },
    hideLogo: {
      type: "boolean",
      value: false,
      label: "Hide Logo",
    },
  });

  const form = {
    id: state.formId.value,
    name: state.formName.value,
    fields: [
      { label: "Name", type: "text" },
      { label: "Email", type: "email" },
      { label: "Preferred Contact Method", type: "select", options: [{ id: "email", label: "Email" }, { id: "phone", label: "Phone" }] },
    ],
  };

  const orderedResponses = [
    { label: "Name", value: "John Doe" },
    { label: "Email", value: "john@example.com" },
    { label: "Preferred Contact Method", value: "email" },
  ];

  return (
    <ResponseEmail
      form={form}
      orderedResponses={orderedResponses}
      subject={state.subject.value}
      hideLogo={state.hideLogo.value}
    />
  );
}