import React from 'react';
import { useParentState } from '../useIframeState';
import { OrgAutoInviteEmail } from '../../../../packages/emails/src/templates/OrgAutoInviteEmail';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    language: {
      type: "string",
      value: "en",
      label: "Language",
    },
    from: {
      type: "string",
      value: "John Doe",
      label: "From",
    },
    to: {
      type: "string",
      value: "Jane Smith",
      label: "To",
    },
    orgName: {
      type: "string",
      value: "Acme Corp",
      label: "Organization Name",
    },
    joinLink: {
      type: "string",
      value: "https://example.com/join",
      label: "Join Link",
    },
    subject: {
      type: "string",
      value: "You've been invited to join our organization",
      label: "Subject",
    },
    title: {
      type: "string",
      value: "Welcome to Our Organization",
      label: "Title",
    },
  });

  const mockTFunction = (key: string, options?: any) => {
    return `Translated: ${key} ${JSON.stringify(options)}`;
  };

  return (
    <OrgAutoInviteEmail
      language={mockTFunction}
      from={state.from.value}
      to={state.to.value}
      orgName={state.orgName.value}
      joinLink={state.joinLink.value}
      subject={state.subject.value}
      title={state.title.value}
    />
  );
}