import React from 'react';
import { useParentState } from '../useIframeState';
import { DynamicComponent } from '../../../../packages/app-store/_components/DynamicComponent';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    componentMap: {
      type: "object",
      value: {},
      label: "Component Map",
    },
    slug: {
      type: "string",
      value: "example-slug",
      label: "Slug",
    },
    wrapperClassName: {
      type: "string",
      value: "example-wrapper-class",
      label: "Wrapper Class Name",
    },
  });

  return (
    <DynamicComponent
      componentMap={state.componentMap.value}
      slug={state.slug.value}
      wrapperClassName={state.wrapperClassName.value}
    />
  );
}