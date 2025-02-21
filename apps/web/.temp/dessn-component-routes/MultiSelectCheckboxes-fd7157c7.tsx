import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/ui/components/form/checkbox/MultiSelectCheckboxes';

import { useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const { control } = useForm();

  const [state, setState] = useParentState({
    options: {
      type: "string",
      value: JSON.stringify([
        { label: "Option 1", value: "option1" },
        { label: "Option 2", value: "option2" },
        { label: "Option 3", value: "option3" }
      ]),
      label: "Options"
    },
    selected: {
      type: "string",
      value: JSON.stringify([]),
      label: "Selected"
    },
    countText: {
      type: "string",
      value: "{count} selected",
      label: "Count Text"
    },
    isDisabled: {
      type: "boolean",
      value: false,
      label: "Is Disabled"
    },
    isLoading: {
      type: "boolean",
      value: false,
      label: "Is Loading"
    }
  });

  const options = JSON.parse(state.options.value);
  const selected = JSON.parse(state.selected.value);

  const setSelected = (newSelected) => {
    setState('selected', JSON.stringify(newSelected));
  };

  const setValue = (newValue) => {
    console.log('setValue called with:', newValue);
  };

  return (
    <ImportedComponent
      options={options}
      selected={selected}
      setSelected={setSelected}
      setValue={setValue}
      countText={state.countText.value}
      isDisabled={state.isDisabled.value}
      isLoading={state.isLoading.value}
    />
  );
}