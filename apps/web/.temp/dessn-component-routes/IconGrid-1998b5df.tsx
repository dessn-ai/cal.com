import React from 'react';
import { useParentState } from '../useIframeState';
import { IconGrid } from '../../app/icons/IconGrid';

import { Icon } from "@calcom/ui";

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    title: {
      type: "string",
      value: "Icon Grid Preview",
      label: "Title",
    },
    icons: {
      type: "string",
      value: "activity,arrow-down,arrow-left,arrow-right,arrow-up",
      label: "Icons (comma-separated)",
    },
    rootClassName: {
      type: "string",
      value: "p-4 bg-gray-100",
      label: "Root Class Name",
    },
    iconClassName: {
      type: "string",
      value: "w-6 h-6 text-gray-600",
      label: "Icon Class Name",
    },
  });

  const iconArray = state.icons.value.split(',').map(icon => icon.trim()) as IconName[];

  return (
    <IconGrid
      title={state.title.value}
      icons={iconArray}
      rootClassName={state.rootClassName.value}
      iconClassName={state.iconClassName.value}
    />
  );
}