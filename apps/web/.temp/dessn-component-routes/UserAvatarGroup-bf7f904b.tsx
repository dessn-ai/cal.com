import React from 'react';
import { useParentState } from '../useIframeState';
import { UserAvatarGroup } from '../../../../packages/ui/components/avatar/UserAvatarGroup';


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
    className: {
      type: "string",
      value: "",
      label: "Class Name",
    },
  });

  const users = [
    {
      name: "John Doe",
      username: "johndoe",
      avatarUrl: "https://example.com/avatar1.jpg",
      profile: {
        id: 1,
        username: "johndoe",
        organizationId: null,
        organization: null,
      },
    },
    {
      name: "Jane Smith",
      username: "janesmith",
      avatarUrl: "https://example.com/avatar2.jpg",
      profile: {
        id: 2,
        username: "janesmith",
        organizationId: null,
        organization: null,
      },
    },
    {
      name: "Alice Johnson",
      username: "alicejohnson",
      avatarUrl: "https://example.com/avatar3.jpg",
      profile: {
        id: 3,
        username: "alicejohnson",
        organizationId: null,
        organization: null,
      },
    },
    {
      name: "Bob Williams",
      username: "bobwilliams",
      avatarUrl: "https://example.com/avatar4.jpg",
      profile: {
        id: 4,
        username: "bobwilliams",
        organizationId: null,
        organization: null,
      },
    },
    {
      name: "Charlie Brown",
      username: "charliebrown",
      avatarUrl: "https://example.com/avatar5.jpg",
      profile: {
        id: 5,
        username: "charliebrown",
        organizationId: null,
        organization: null,
      },
    },
  ];

  return (
    <UserAvatarGroup
      size={state.size.value as "sm" | "lg"}
      users={users}
      truncateAfter={state.truncateAfter.value}
      hideTruncatedAvatarsCount={state.hideTruncatedAvatarsCount.value}
      className={state.className.value}
    />
  );
}