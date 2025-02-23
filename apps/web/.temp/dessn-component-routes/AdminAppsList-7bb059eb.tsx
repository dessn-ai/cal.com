import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/apps/AdminAppsList';

import { useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    baseURL: {
      type: "string",
      value: "/apps",
      label: "Base URL",
    },
    useQueryParam: {
      type: "boolean",
      value: false,
      label: "Use Query Param",
    },
    className: {
      type: "string",
      value: "custom-class",
      label: "Class Name",
    },
  });

  const formMethods = useForm();

  return (
    <ImportedComponent
      baseURL={state.baseURL.value}
      useQueryParam={state.useQueryParam.value}
      className={state.className.value}
      onSubmit={() => console.log("Form submitted")}
      {...formMethods}
    />
  );
}