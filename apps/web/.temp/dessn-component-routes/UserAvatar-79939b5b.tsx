import React from 'react';
import { useParentState } from '../useIframeState';
import { UserAvatar } from '../../../../packages/ui/components/avatar/UserAvatar';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    name: {
      type: "string",
      value: "John Doe",
      label: "Name",
    },
    username: {
      type: "string",
      value: "johndoe",
      label: "Username",
    },
    avatarUrl: {
      type: "string",
      value: "https://example.com/avatar.jpg",
      label: "Avatar URL",
    },
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
    noOrganizationIndicator: {
      type: "boolean",
      value: false,
      label: "No Organization Indicator",
    },
    previewSrc: {
      type: "string",
      value: "",
      label: "Preview Source",
    },
  });

  const user = {
    name: state.name.value,
    username: state.username.value,
    avatarUrl: state.avatarUrl.value,
    profile: {
      id: 1,
      username: state.username.value,
      organizationId: null,
      organization: null,
    },
  };

  return (
    <UserAvatar
      user={user}
      size={state.size.value as any}
      shape={state.shape.value as "circle" | "square"}
      noOrganizationIndicator={state.noOrganizationIndicator.value}
      previewSrc={state.previewSrc.value || undefined}
    />
  );
}