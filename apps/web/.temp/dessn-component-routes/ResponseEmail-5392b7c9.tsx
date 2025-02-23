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
      label: "Subject",
    },
  });

  const form = {
    id: state.formId.value,
    name: state.formName.value,
    fields: [
      { label: "Name", type: "text" },
      { label: "Email", type: "email" },
      { label: "Preference", type: "select", options: [{ id: "1", label: "Option 1" }, { id: "2", label: "Option 2" }] },
    ],
  };

  const orderedResponses = [
    { label: "Name", value: "John Doe" },
    { label: "Email", value: "john@example.com" },
    { label: "Preference", value: "1" },
  ];

  return (
    <ResponseEmail
      form={form}
      orderedResponses={orderedResponses}
      subject={state.subject.value}
    />
  );
}