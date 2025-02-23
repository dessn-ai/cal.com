import React from 'react';
import { useParentState } from '../useIframeState';
import { SkeletonLoader } from '../../../../packages/ui/components/apps/SkeletonLoader';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "custom-class",
      label: "Class Name",
    },
    title: {
      type: "string",
      value: "Loading Content",
      label: "Title",
    },
    description: {
      type: "string",
      value: "Please wait while we fetch the data",
      label: "Description",
    },
  });

  return (
    <SkeletonLoader
      className={state.className.value}
      title={state.title.value}
      description={state.description.value}
    />
  );
}