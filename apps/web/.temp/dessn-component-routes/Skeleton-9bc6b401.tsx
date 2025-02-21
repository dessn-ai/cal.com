import React from 'react';
import { useParentState } from '../useIframeState';
import { Skeleton } from '../../../../packages/ui/components/skeleton/Skeleton';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    as: {
      type: "string",
      value: "div",
      label: "As",
    },
    className: {
      type: "string",
      value: "w-full h-20",
      label: "Class Name",
    },
    loading: {
      type: "boolean",
      value: true,
      label: "Loading",
    },
    waitForTranslation: {
      type: "boolean",
      value: false,
      label: "Wait for Translation",
    },
    loadingClassName: {
      type: "string",
      value: "bg-gray-200",
      label: "Loading Class Name",
    },
  });

  return (
    <Skeleton
      as={state.as.value as keyof JSX.IntrinsicElements}
      className={state.className.value}
      loading={state.loading.value}
      waitForTranslation={state.waitForTranslation.value}
      loadingClassName={state.loadingClassName.value}
    >
      This is the content inside the Skeleton component
    </Skeleton>
  );
}