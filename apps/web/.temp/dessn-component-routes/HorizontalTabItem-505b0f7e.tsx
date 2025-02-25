import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/ui/components/navigation/tabs/HorizontalTabItem';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    name: {
      type: "string",
      value: "Home",
      label: "Name",
    },
    href: {
      type: "string",
      value: "/home",
      label: "Href",
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled",
    },
    icon: {
      type: "dropdown",
      value: "home",
      options: ["home", "calendar", "user", "settings"],
      label: "Icon",
    },
    avatar: {
      type: "string",
      value: "https://example.com/avatar.jpg",
      label: "Avatar URL",
    },
    isActive: {
      type: "boolean",
      value: false,
      label: "Is Active",
    },
  });

  const handleClick = (name: string) => {
    console.log(`Clicked on ${name}`);
  };

  return (
    <ImportedComponent
      name={state.name.value}
      href={state.href.value}
      disabled={state.disabled.value}
      icon={state.icon.value as any}
      avatar={state.avatar.value}
      isActive={state.isActive.value}
      onClick={handleClick}
    />
  );
}