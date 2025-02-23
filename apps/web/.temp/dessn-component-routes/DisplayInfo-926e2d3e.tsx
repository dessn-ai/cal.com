import React from 'react';
import { useParentState } from '../useIframeState';
import { DisplayInfo } from '../../../../packages/features/users/components/UserTable/EditSheet/DisplayInfo';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    label: {
      type: "string",
      value: "User Info",
      label: "Label",
    },
    icon: {
      type: "dropdown",
      value: "user",
      options: ["user", "mail", "calendar", "phone"],
      label: "Icon",
    },
    value: {
      type: "string",
      value: "John Doe",
      label: "Value",
    },
    coloredBadges: {
      type: "boolean",
      value: false,
      label: "Colored Badges",
    },
    labelClassname: {
      type: "string",
      value: "",
      label: "Label Classname",
    },
    valueClassname: {
      type: "string",
      value: "",
      label: "Value Classname",
    },
  });

  return (
    <DisplayInfo
      label={state.label.value}
      icon={state.icon.value as any}
      value={state.value.value}
      coloredBadges={state.coloredBadges.value}
      labelClassname={state.labelClassname.value}
      valueClassname={state.valueClassname.value}
    />
  );
}