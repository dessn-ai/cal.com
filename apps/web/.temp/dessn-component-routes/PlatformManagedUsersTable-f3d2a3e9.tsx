import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';
import { PlatformManagedUsersTable } from '../../../../packages/features/users/components/UserTable/PlatformManagedUsersTable';
import { DataTableProvider } from '../../../../packages/features/data-table';

// Create a custom provider wrapper with mock data
const MockDataTableProvider = ({ children }) => {
  return (
    <DataTableProvider>
      {children}
    </DataTableProvider>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    oAuthClientId: {
      type: "string",
      value: "example-oauth-client-id",
      label: "OAuth Client ID",
    },
  });

  return (
    <div className="p-4">
      <Suspense fallback={<div>Loading...</div>}>
        <MockDataTableProvider>
          <PlatformManagedUsersTable
            oAuthClientId={state.oAuthClientId.value}
          />
        </MockDataTableProvider>
      </Suspense>
    </div>
  );
}