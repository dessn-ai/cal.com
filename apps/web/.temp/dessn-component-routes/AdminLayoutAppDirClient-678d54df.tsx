import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../app/(use-page-wrapper)/settings/(admin-layout)/AdminLayoutAppDirClient';

import { UserPermissionRole } from '@calcom/prisma/enums';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    userRole: {
      type: "dropdown",
      value: "ADMIN",
      options: ["ADMIN", "INACTIVE_ADMIN", "USER"],
      label: "User Role",
    },
  });

  return (
    <ImportedComponent
      userRole={state.userRole.value as UserPermissionRole | "INACTIVE_ADMIN" | undefined}
    >
      <div>Child content goes here</div>
    </ImportedComponent>
  );
}