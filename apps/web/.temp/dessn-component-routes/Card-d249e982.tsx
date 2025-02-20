import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/ui/components/card/Card';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    variant: {
      type: "dropdown",
      value: "basic",
      options: ["basic", "ProfileCard", "SidebarCard"],
      label: "Variant",
    },
    image: {
      type: "string",
      value: "https://example.com/image.jpg",
      label: "Image URL",
    },
    title: {
      type: "string",
      value: "Card Title",
      label: "Title",
    },
    description: {
      type: "string",
      value: "This is a description of the card.",
      label: "Description",
    },
    actionButtonHref: {
      type: "string",
      value: "https://example.com",
      label: "Action Button URL",
    },
    actionButtonText: {
      type: "string",
      value: "Learn More",
      label: "Action Button Text",
    },
    learnMoreHref: {
      type: "string",
      value: "https://example.com/learn-more",
      label: "Learn More URL",
    },
    learnMoreText: {
      type: "string",
      value: "Read More",
      label: "Learn More Text",
    },
    mediaLink: {
      type: "string",
      value: "https://example.com/video",
      label: "Media Link",
    },
    thumbnailUrl: {
      type: "string",
      value: "https://example.com/thumbnail.jpg",
      label: "Thumbnail URL",
    },
  });

  return (
    <ImportedComponent
      variant={state.variant.value as "basic" | "ProfileCard" | "SidebarCard"}
      image={state.image.value}
      title={state.title.value}
      description={state.description.value}
      actionButton={{
        href: state.actionButtonHref.value,
        child: state.actionButtonText.value,
      }}
      learnMore={{
        href: state.learnMoreHref.value,
        text: state.learnMoreText.value,
      }}
      mediaLink={state.mediaLink.value}
      thumbnailUrl={state.thumbnailUrl.value}
    />
  );
}