import React from 'react';
import { useParentState } from '../useIframeState';
import { IconLeading } from '../../../../packages/ui/components/form/select/components';

import { components as reactSelectComponents } from 'react-select';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    icon: {
      type: "string",
      value: "<Icon name='user' />",
      label: "Icon",
    },
  });

  return (
    <IconLeading
      icon={<div dangerouslySetInnerHTML={{ __html: state.icon.value }} />}
    >
      <reactSelectComponents.Control>
        {/* Add any children components here if needed */}
      </reactSelectComponents.Control>
    </IconLeading>
  );
}