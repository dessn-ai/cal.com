import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/ui/components/navigation/tabs/VerticalTabItem';


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
    icon: {
      type: "dropdown",
      value: "home",
      options: ["home", "calendar", "user", "settings"],
      label: "Icon",
    },
    info: {
      type: "string",
      value: "Navigate to home page",
      label: "Info",
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled",
    },
    isExternalLink: {
      type: "boolean",
      value: false,
      label: "Is External Link",
    },
    isActive: {
      type: "boolean",
      value: false,
      label: "Is Active",
    },
  });

  return (
    <ImportedComponent
      name={state.name.value}
      href={state.href.value}
      icon={state.icon.value}
      info={state.info.value}
      disabled={state.disabled.value}
      isExternalLink={state.isExternalLink.value}
      isActive={state.isActive.value}
    />
  );
}