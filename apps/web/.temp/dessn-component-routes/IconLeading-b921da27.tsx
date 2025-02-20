import React from 'react';
import { useParentState } from '../useIframeState';
import { IconLeading } from '../../../../packages/ui/components/form/select/components';
import { Select } from '../../../../packages/ui/components/form/select/Select';
import { Icon } from '../../../../packages/ui/components/icon';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    icon: {
      type: "string",
      value: "<Icon name='user' />",
      label: "Icon",
    },
  });

  return (
    <Select
      options={[
        { value: '1', label: 'Option 1' },
        { value: '2', label: 'Option 2' },
      ]}
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