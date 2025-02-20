import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../components/ui/form/CheckedSelect';

import { useForm } from 'react-hook-form';

export type CheckedSelectOption = {
  avatar: string;
  label: string;
  value: string;
  disabled?: boolean;
};

export default function ComponentPreview() {
  const { control } = useForm();

  const [state, setState] = useParentState({
    options: {
      type: "string",
      value: JSON.stringify([
        { avatar: "https://example.com/avatar1.jpg", label: "Option 1", value: "1" },
        { avatar: "https://example.com/avatar2.jpg", label: "Option 2", value: "2" },
        { avatar: "https://example.com/avatar3.jpg", label: "Option 3", value: "3", disabled: true }
      ]),
      label: "Options",
    },
    value: {
      type: "string",
      value: JSON.stringify([
        { avatar: "https://example.com/avatar1.jpg", label: "Option 1", value: "1" }
      ]),
      label: "Selected Values",
    },
    placeholder: {
      type: "string",
      value: "Select options",
      label: "Placeholder",
    },
    name: {
      type: "string",
      value: "checkedSelect",
      label: "Name",
    },
  });

  const options: CheckedSelectOption[] = JSON.parse(state.options.value);
  const value: CheckedSelectOption[] = JSON.parse(state.value.value);

  return (
    <ImportedComponent
      options={options}
      value={value}
      onChange={(newValue) => setState('value', JSON.stringify(newValue))}
      placeholder={state.placeholder.value}
      name={state.name.value}
      control={control}
    />
  );
}