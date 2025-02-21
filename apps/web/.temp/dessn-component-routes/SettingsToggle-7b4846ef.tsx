import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/ui/components/form/switch/SettingsToggle';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    title: {
      type: "string",
      value: "Example Toggle",
      label: "Title",
    },
    description: {
      type: "string",
      value: "This is an example description",
      label: "Description",
    },
    checked: {
      type: "boolean",
      value: true,
      label: "Checked",
    },
    disabled: {
      type: "boolean",
      value: false,
      label: "Disabled",
    },
    toggleSwitchAtTheEnd: {
      type: "boolean",
      value: false,
      label: "Toggle Switch at the End",
    },
    noIndentation: {
      type: "boolean",
      value: false,
      label: "No Indentation",
    },
    hideSwitch: {
      type: "boolean",
      value: false,
      label: "Hide Switch",
    },
  });

  return (
    <ImportedComponent
      title={state.title.value}
      description={state.description.value}
      checked={state.checked.value}
      disabled={state.disabled.value}
      toggleSwitchAtTheEnd={state.toggleSwitchAtTheEnd.value}
      noIndentation={state.noIndentation.value}
      hideSwitch={state.hideSwitch.value}
      onCheckedChange={(checked) => setState('checked', checked)}
    />
  );
}