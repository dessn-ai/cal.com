import React from 'react';
import { useParentState } from '../useIframeState';
import { SkeletonAvatar } from '../../../../packages/ui/components/skeleton/Skeleton';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "w-12 h-12",
      label: "Class Name",
    },
  });

  return (
    <SkeletonAvatar className={state.className.value} />
  );
}