import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/routing-forms/pages/routing-link/[...appPages]';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    isEmbed: {
      type: "boolean",
      value: false,
      label: "Is Embed",
    },
    themeBasis: {
      type: "string",
      value: "light",
      label: "Theme Basis",
    },
    profile: {
      type: "dropdown",
      value: "default",
      options: ["default", "custom"],
      label: "Profile",
    },
  });

  const profile = {
    theme: state.themeBasis.value,
    brandColor: "#000000",
    darkBrandColor: "#FFFFFF",
  };

  const form = {
    id: "example-form",
    name: "Example Form",
    description: "This is an example form for preview purposes",
    fields: [],
  };

  return (
    <ImportedComponent
      isEmbed={state.isEmbed.value}
      themeBasis={state.themeBasis.value}
      profile={profile}
      form={form}
    />
  );
}