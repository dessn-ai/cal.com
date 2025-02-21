import React from 'react';
import { useParentState } from '../useIframeState';
import { Avatar } from '../../../../packages/ui/components/avatar/Avatar';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    size: {
      type: "dropdown",
      value: "md",
      options: ["xs", "xsm", "sm", "md", "mdLg", "lg", "xl"],
      label: "Size",
    },
    shape: {
      type: "dropdown",
      value: "circle",
      options: ["circle", "square"],
      label: "Shape",
    },
    imageSrc: {
      type: "string",
      value: "https://example.com/avatar.jpg",
      label: "Image Source",
    },
    title: {
      type: "string",
      value: "User Avatar",
      label: "Title",
    },
    alt: {
      type: "string",
      value: "User Avatar",
      label: "Alt Text",
    },
    href: {
      type: "string",
      value: "https://example.com/user",
      label: "Href",
    },
    accepted: {
      type: "boolean",
      value: false,
      label: "Accepted",
    },
  });

  return (
    <Avatar
      size={state.size.value}
      shape={state.shape.value}
      imageSrc={state.imageSrc.value}
      title={state.title.value}
      alt={state.alt.value}
      href={state.href.value}
      accepted={state.accepted.value}
    />
  );
}