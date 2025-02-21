import React from 'react';
import { useParentState } from '../useIframeState';
import { AvatarGroup } from '../../../../packages/ui/components/avatar/AvatarGroup';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    size: {
      type: "dropdown",
      value: "sm",
      options: ["sm", "lg"],
      label: "Size",
    },
    truncateAfter: {
      type: "number",
      value: 4,
      label: "Truncate After",
    },
    hideTruncatedAvatarsCount: {
      type: "boolean",
      value: false,
      label: "Hide Truncated Avatars Count",
    },
  });

  const items = [
    { image: "https://example.com/avatar1.jpg", title: "User 1", alt: "Avatar 1" },
    { image: "https://example.com/avatar2.jpg", title: "User 2", alt: "Avatar 2" },
    { image: "https://example.com/avatar3.jpg", title: "User 3", alt: "Avatar 3" },
    { image: "https://example.com/avatar4.jpg", title: "User 4", alt: "Avatar 4" },
    { image: "https://example.com/avatar5.jpg", title: "User 5", alt: "Avatar 5" },
    { image: "https://example.com/avatar6.jpg", title: "User 6", alt: "Avatar 6" },
  ];

  return (
    <AvatarGroup
      size={state.size.value}
      items={items}
      truncateAfter={state.truncateAfter.value}
      hideTruncatedAvatarsCount={state.hideTruncatedAvatarsCount.value}
    />
  );
}