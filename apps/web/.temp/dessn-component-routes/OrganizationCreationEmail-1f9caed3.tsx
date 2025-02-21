import React from 'react';
import { useParentState } from '../useIframeState';
import { OrganizationCreationEmail } from '../../../../packages/emails/src/templates/OrganizationCreationEmail';

import { TFunction } from 'next-i18next';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    language: {
      type: "string",
      value: "en",
      label: "Language",
    },
    from: {
      type: "string",
      value: "sender@example.com",
      label: "From",
    },
    to: {
      type: "string",
      value: "recipient@example.com",
      label: "To",
    },
    ownerNewUsername: {
      type: "string",
      value: "newuser",
      label: "New Username",
    },
    ownerOldUsername: {
      type: "string",
      value: "olduser",
      label: "Old Username",
    },
    orgDomain: {
      type: "string",
      value: "example.org",
      label: "Organization Domain",
    },
    orgName: {
      type: "string",
      value: "Example Organization",
      label: "Organization Name",
    },
    prevLink: {
      type: "string",
      value: "https://old.example.com",
      label: "Previous Link",
    },
    newLink: {
      type: "string",
      value: "https://new.example.com",
      label: "New Link",
    },
  });

  const mockLanguage: TFunction = (key: string, options?: any) => {
    return key + (options ? JSON.stringify(options) : '');
  };

  return (
    <OrganizationCreationEmail
      language={mockLanguage}
      from={state.from.value}
      to={state.to.value}
      ownerNewUsername={state.ownerNewUsername.value}
      ownerOldUsername={state.ownerOldUsername.value}
      orgDomain={state.orgDomain.value}
      orgName={state.orgName.value}
      prevLink={state.prevLink.value}
      newLink={state.newLink.value}
    />
  );
}