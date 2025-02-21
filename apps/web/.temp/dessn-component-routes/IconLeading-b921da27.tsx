import React from 'react';
import { useParentState } from '../useIframeState';
import Select from 'react-select';
import { IconLeading } from '../../../../packages/ui/components/form/select/components';
import { Icon } from '../../../../packages/ui/components/icon';

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
    <Select
      options={options}
      components={{
        Control: (props) => (
          <IconLeading
            {...props}
            icon={<Icon name="user" className="ml-3 h-4 w-4 text-gray-500" />}
          />
        ),
      }}
    />
  );
}