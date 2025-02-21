import React from 'react';
import { useParentState } from '../useIframeState';
import { UserAvatarGroupWithOrg } from '../../../../packages/ui/components/avatar/UserAvatarGroupWithOrg';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    size: {
      type: "dropdown",
      value: "sm",
      options: ["sm", "lg"],
      label: "Size",
    },
    className: {
      type: "string",
      value: "",
      label: "Class Name",
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
    disableHref: {
      type: "boolean",
      value: false,
      label: "Disable Href",
    },
  });

  const users = [
    {
      name: "John Doe",
      username: "johndoe",
      avatarUrl: "https://example.com/avatar1.jpg",
      bookerUrl: "https://example.com/book/johndoe",
    },
    {
      name: "Jane Smith",
      username: "janesmith",
      avatarUrl: "https://example.com/avatar2.jpg",
      bookerUrl: "https://example.com/book/janesmith",
    },
  ];

  const organization = {
    slug: "example-org",
    name: "Example Organization",
    logoUrl: "https://example.com/logo.png",
  };

  return (
    <UserAvatarGroupWithOrg
      size={state.size.value as "sm" | "lg"}
      className={state.className.value}
      truncateAfter={state.truncateAfter.value}
      hideTruncatedAvatarsCount={state.hideTruncatedAvatarsCount.value}
      disableHref={state.disableHref.value}
      users={users}
      organization={organization}
    />
  );
}