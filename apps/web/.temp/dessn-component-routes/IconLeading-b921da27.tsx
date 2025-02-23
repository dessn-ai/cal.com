import React from 'react';
import { useParentState } from '../useIframeState';
import ReactSelect from 'react-select';
import { Icon } from "@calcom/ui";

const CustomSelect = ReactSelect.default || ReactSelect;

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    icon: {
      type: "string",
      value: "<Icon name='user' />",
      label: "Icon",
    },
  });

  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
  ];

  return (
    <div className="relative w-[200px]">
      <div className="absolute left-3 top-1/2 -translate-y-1/2 z-10">
        <Icon.FiUser className="h-4 w-4 text-gray-500" />
      </div>
      <CustomSelect
        options={options}
        defaultValue={options[0]}
        classNames={{
          control: (state) => 'pl-10 !cursor-pointer'
        }}
        styles={{
          control: (base) => ({
            ...base,
            minHeight: '40px'
          })
        }}
      />
    </div>
  );
}