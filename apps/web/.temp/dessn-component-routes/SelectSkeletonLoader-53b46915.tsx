import React from 'react';
import { useParentState } from '../useIframeState';
import { SelectSkeletonLoader } from '../../../../packages/features/availability/components/SkeletonLoader';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "custom-class",
      label: "Class Name",
    },
  });

  return (
    <SelectSkeletonLoader className={state.className.value} />
  );
}