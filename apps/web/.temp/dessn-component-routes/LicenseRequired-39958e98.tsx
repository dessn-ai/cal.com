import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../../../packages/features/ee/common/components/LicenseRequired';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    as: {
      type: "string",
      value: "",
      label: "As",
    },
    className: {
      type: "string",
      value: "",
      label: "Class Name",
    },
    role: {
      type: "string",
      value: "",
      label: "Role",
    },
  });

  return (
    <ImportedComponent
      as={state.as.value as keyof JSX.IntrinsicElements | ""}
      className={state.className.value}
      role={state.role.value as AriaRole | undefined}
    >
      <div>Child content goes here</div>
    </ImportedComponent>
  );
}