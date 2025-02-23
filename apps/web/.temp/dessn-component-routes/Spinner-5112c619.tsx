import React from 'react';
import { useParentState } from '../useIframeState';
import { Spinner } from '../../../../packages/ui/components/icon/Spinner';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "w-8 h-8 text-gray-500",
      label: "Class Name",
    },
  });

  return <Spinner className={state.className.value} />;
}