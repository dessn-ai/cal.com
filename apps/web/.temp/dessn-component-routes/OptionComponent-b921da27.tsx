import React from 'react';
import { useParentState } from '../useIframeState';
import ReactSelect from 'react-select';
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

  const options = state.option.options.map(opt => ({
    label: opt,
    value: opt,
    needsTeamsUpgrade: state.needsTeamsUpgrade.value,
  }));

  return (
    <ReactSelect
      options={options}
      value={options.find(opt => opt.value === state.option.value)}
      isMulti={state.isMulti.value}
      components={{
        Option: OptionComponent
      }}
      onChange={(newValue) => {
        setState(prev => ({
          ...prev,
          option: {
            ...prev.option,
            value: newValue ? (newValue as any).value : ''
          }
        }));
      }}
      classNames={{
        control: () => "border border-gray-300 rounded-md min-h-[36px]",
        option: () => "p-2 cursor-pointer hover:bg-gray-100",
        menu: () => "mt-1 border border-gray-300 rounded-md bg-white shadow-lg",
      }}
    />
  );
}