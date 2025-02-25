import React from 'react';
import { useParentState } from '../useIframeState';
import { Group } from '../../../../packages/ui/form/radio-area/Radio';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    children: {
      type: "string",
      value: "<RadioField label='Option 1' id='option1' value='option1' />",
      label: "Children",
    },
  });

  return (
    <Group>
      {React.createElement('div', { dangerouslySetInnerHTML: { __html: state.children.value } })}
    </Group>
  );
}