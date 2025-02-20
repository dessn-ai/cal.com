import React from 'react';
import { useParentState } from '../useIframeState';
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

  const optionProps = {
    label: state.option.value,
    value: state.option.value,
    isMulti: state.isMulti.value,
    isSelected: state.isSelected.value,
    data: {
      needsTeamsUpgrade: state.needsTeamsUpgrade.value,
    },
  };

  return <OptionComponent {...optionProps} />;
}