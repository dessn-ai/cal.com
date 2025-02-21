import React from 'react';
import { useParentState } from '../useIframeState';
import Select, { components } from 'react-select';
import { OptionComponent } from '../../../../packages/ui/components/form/select/components';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    option: {
      type: "dropdown",
      value: "option1",
      options: ["option1", "option2", "option3"],
      label: "Select Option",
    },
    isMulti: {
      type: "boolean",
      value: false,
      label: "Is Multi Select",
    },
    isSelected: {
      type: "boolean",
      value: false,
      label: "Is Selected",
    },
    needsTeamsUpgrade: {
      type: "boolean",
      value: false,
      label: "Needs Teams Upgrade",
    },
  });

  // Create options array for Select
  const options = state.option.options.map(opt => ({
    label: opt,
    value: opt,
    needsTeamsUpgrade: state.needsTeamsUpgrade.value
  }));

  return (
    <Select
      options={options}
      value={options.find(opt => opt.value === state.option.value)}
      isMulti={state.isMulti.value}
      components={{
        Option: OptionComponent
      }}
      onChange={() => {}}
    />
  );
}