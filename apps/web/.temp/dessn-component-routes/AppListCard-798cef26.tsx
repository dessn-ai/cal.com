import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/apps/components/AppListCard';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    logo: {
      type: "string",
      value: "/path/to/logo.png",
      label: "Logo URL",
    },
    title: {
      type: "string",
      value: "App Title",
      label: "Title",
    },
    description: {
      type: "string",
      value: "This is a sample app description.",
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
    shouldHighlight: {
      type: "boolean",
      value: false,
      label: "Should Highlight",
    },
    slug: {
      type: "string",
      value: "app-slug",
      label: "Slug",
    },
  });

  const credentialOwner = {
    name: "John Doe",
    avatar: "https://example.com/avatar.jpg",
    teamId: 1,
    credentialId: 123,
    readOnly: false,
  };

  return (
    <ImportedComponent
      logo={state.logo.value}
      title={state.title.value}
      description={state.description.value}
      isDefault={state.isDefault.value}
      isTemplate={state.isTemplate.value}
      invalidCredential={state.invalidCredential.value}
      credentialOwner={credentialOwner}
      shouldHighlight={state.shouldHighlight.value}
      slug={state.slug.value}
    />
  );
}