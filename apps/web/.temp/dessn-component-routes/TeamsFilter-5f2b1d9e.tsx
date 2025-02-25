import React from 'react';
import { useParentState } from '../useIframeState';
import { TeamsFilter } from '../../../../packages/features/filters/components/TeamsFilter';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    popoverTriggerClassNames: {
      type: "string",
      value: "custom-popover-trigger",
      label: "Popover Trigger Class Names",
    },
    showVerticalDivider: {
      type: "boolean",
      value: false,
      label: "Show Vertical Divider",
    },
    useProfileFilter: {
      type: "boolean",
      value: false,
      label: "Use Profile Filter",
    },
  });

  return (
    <TeamsFilter
      popoverTriggerClassNames={state.popoverTriggerClassNames.value}
      showVerticalDivider={state.showVerticalDivider.value}
      useProfileFilter={state.useProfileFilter.value}
    />
  );
}