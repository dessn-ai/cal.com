import React from 'react';
import { useParentState } from '../useIframeState';
import { AppCard } from '../../../../packages/ui/components/apps/AppCard';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    app: {
      type: "dropdown",
      value: "video_conferencing",
      options: ["video_conferencing", "calendar", "payment", "other"],
      label: "App Type",
    },
    name: {
      type: "string",
      value: "Zoom",
      label: "App Name",
    },
    description: {
      type: "string",
      value: "Video conferencing solution for businesses",
      label: "App Description",
    },
    logo: {
      type: "string",
      value: "https://example.com/zoom-logo.png",
      label: "Logo URL",
    },
    slug: {
      type: "string",
      value: "zoom",
      label: "App Slug",
    },
    categories: {
      type: "dropdown",
      value: "video",
      options: ["video", "calendar", "payment", "other"],
      label: "App Category",
    },
    isGlobal: {
      type: "boolean",
      value: false,
      label: "Is Global",
    },
    price: {
      type: "number",
      value: 0,
      label: "Price",
    },
    isInstalled: {
      type: "boolean",
      value: false,
      label: "Is Installed",
    },
  });

  const app = {
    type: state.app.value,
    name: state.name.value,
    description: state.description.value,
    logo: state.logo.value,
    slug: state.slug.value,
    categories: [state.categories.value],
    isGlobal: state.isGlobal.value,
    paid: state.price.value > 0 ? { price: state.price.value } : undefined,
  };

  const credentials = state.isInstalled.value ? [{}] : [];

  return <AppCard app={app} credentials={credentials} />;
}