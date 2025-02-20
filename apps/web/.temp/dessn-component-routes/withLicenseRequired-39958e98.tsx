import React from 'react';
import { useParentState } from '../useIframeState';
import { withLicenseRequired } from '../../../../packages/features/ee/common/components/LicenseRequired';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    children: {
      type: "string",
      value: "Preview Content",
      label: "Children",
    },
    as: {
      type: "dropdown",
      value: "",
      options: ["", "div", "span", "section"],
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
      label: "ARIA Role",
    },
  });

  const WrappedComponent = withLicenseRequired(({ children, as, className, role }) => (
    <div>{children}</div>
  ));

  return (
    <WrappedComponent
      children={state.children.value}
      as={state.as.value || undefined}
      className={state.className.value}
      role={state.role.value || undefined}
    />
  );
}