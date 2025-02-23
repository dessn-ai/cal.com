import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/app-store/_components/AppCategoryNavigation';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    baseURL: {
      type: "string",
      value: "/apps/categories",
      label: "Base URL",
    },
    containerClassname: {
      type: "string",
      value: "w-full",
      label: "Container Class Name",
    },
    className: {
      type: "string",
      value: "app-store-wrapper",
      label: "Class Name",
    },
    useQueryParam: {
      type: "boolean",
      value: false,
      label: "Use Query Param",
    },
  });

  return (
    <ImportedComponent
      baseURL={state.baseURL.value}
      containerClassname={state.containerClassname.value}
      className={state.className.value}
      useQueryParam={state.useQueryParam.value}
    >
      <div>App Category Content</div>
    </ImportedComponent>
  );
}