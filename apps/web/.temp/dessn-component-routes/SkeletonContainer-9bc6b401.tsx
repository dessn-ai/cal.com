import React from 'react';
import { useParentState } from '../useIframeState';
import { SkeletonContainer } from '../../../../packages/ui/components/skeleton/Skeleton';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    as: {
      type: "dropdown",
      value: "div",
      options: ["div", "span", "section"],
      label: "Container Element",
    },
    className: {
      type: "string",
      value: "animate-pulse",
      label: "CSS Class",
    },
  });

  return (
    <SkeletonContainer
      as={state.as.value as keyof JSX.IntrinsicElements}
      className={state.className.value}
    >
      <div className="bg-emphasis h-4 w-32 rounded-md"></div>
      <div className="bg-emphasis mt-2 h-4 w-24 rounded-md"></div>
    </SkeletonContainer>
  );
}