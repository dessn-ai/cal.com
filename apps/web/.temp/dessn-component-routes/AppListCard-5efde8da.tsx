import React from 'react';
import { useParentState } from '../useIframeState';
import { AppListCard } from '../../../../packages/ui/components/app-list-card/AppListCard';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    logo: {
      type: "string",
      value: "https://example.com/logo.png",
      label: "Logo URL",
    },
    title: {
      type: "string",
      value: "App Title",
      label: "Title",
    },
    description: {
      type: "string",
      value: "App description goes here",
      label: "Description",
    },
    isDefault: {
      type: "boolean",
      value: false,
      label: "Is Default",
    },
    isTemplate: {
      type: "boolean",
      value: false,
      label: "Is Template",
    },
    invalidCredential: {
      type: "boolean",
      value: false,
      label: "Invalid Credential",
    },
    highlight: {
      type: "boolean",
      value: false,
      label: "Highlight",
    },
    credentialOwner: {
      type: "string",
      value: JSON.stringify({
        name: "John Doe",
        avatar: "https://example.com/avatar.png",
      }),
      label: "Credential Owner",
    },
  });

  const credentialOwner = state.credentialOwner.value ? JSON.parse(state.credentialOwner.value) : null;

  return (
    <AppListCard
      logo={state.logo.value}
      title={state.title.value}
      description={state.description.value}
      isDefault={state.isDefault.value}
      isTemplate={state.isTemplate.value}
      invalidCredential={state.invalidCredential.value}
      highlight={state.highlight.value}
      credentialOwner={credentialOwner}
    />
  );
}