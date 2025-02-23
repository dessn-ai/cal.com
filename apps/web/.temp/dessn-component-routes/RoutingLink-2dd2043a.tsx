import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/routing-forms/pages/routing-link/[...appPages]';

import { useForm } from 'react-hook-form';

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
    profileTheme: {
      type: "string",
      value: "light",
      label: "Profile Theme",
    },
    profileBrandColor: {
      type: "string",
      value: "#000000",
      label: "Profile Brand Color",
    },
    profileDarkBrandColor: {
      type: "string",
      value: "#FFFFFF",
      label: "Profile Dark Brand Color",
    },
  });

  const form = useForm();

  const profile = {
    theme: state.profileTheme.value,
    brandColor: state.profileBrandColor.value,
    darkBrandColor: state.profileDarkBrandColor.value,
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