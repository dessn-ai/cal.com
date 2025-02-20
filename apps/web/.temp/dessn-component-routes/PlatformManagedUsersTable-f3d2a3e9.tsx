import React from 'react';
import { useParentState } from '../useIframeState';
import { PlatformManagedUsersTable } from '../../../../packages/features/users/components/UserTable/PlatformManagedUsersTable';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    oAuthClientId: {
      type: "string",
      value: "example-oauth-client-id",
      label: "OAuth Client ID",
    },
  });

  return (
    <PlatformManagedUsersTable
      oAuthClientId={state.oAuthClientId.value}
    />
  );
}