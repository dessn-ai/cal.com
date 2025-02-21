import React from 'react';
import { useParentState } from '../useIframeState';
import { SkeletonButton } from '../../../../packages/ui/components/skeleton/Skeleton';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "w-24 h-10",
      label: "Class Name",
    },
  });

  return (
    <SkeletonButton className={state.className.value} />
  );
}