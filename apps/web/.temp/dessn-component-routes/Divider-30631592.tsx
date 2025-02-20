import React from 'react';
import { useParentState } from '../useIframeState';
import { Divider } from '../../../../packages/ui/components/divider/Divider';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "my-custom-class",
      label: "Class Name",
    },
  });

  return <Divider className={state.className.value} />;
}