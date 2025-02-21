import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../app/(use-page-wrapper)/settings/(admin-layout)/layout';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    children: {
      type: "string",
      value: "<div>Sample Content</div>",
      label: "Children",
    },
    userRole: {
      type: "dropdown",
      value: "ADMIN",
      options: ["ADMIN", "OWNER", "MEMBER", "INACTIVE_ADMIN"],
      label: "User Role",
    },
  });

  return (
    <ImportedComponent
      children={<div dangerouslySetInnerHTML={{ __html: state.children.value }} />}
      userRole={state.userRole.value as any}
    />
  );
}