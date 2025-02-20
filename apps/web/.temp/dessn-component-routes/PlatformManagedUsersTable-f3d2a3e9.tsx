import React from 'react';
import { useParentState } from '../useIframeState';
import { PlatformManagedUsersTable } from '../../../../packages/features/users/components/UserTable/PlatformManagedUsersTable';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { DataTableContext } from '../../../../packages/features/data-table/lib/context';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

// Mock data table context values
const mockDataTableContext = {
  activeFilters: [],
  setActiveFilters: () => {},
  clearAll: () => {},
  updateFilter: () => {},
  removeFilter: () => {},
  sorting: [],
  setSorting: () => {},
  columnVisibility: {},
  setColumnVisibility: () => {},
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
    <QueryClientProvider client={queryClient}>
      <DataTableContext.Provider value={mockDataTableContext}>
        <div className="w-full">
          <PlatformManagedUsersTable
            oAuthClientId={state.oAuthClientId.value}
          />
        </div>
      </DataTableContext.Provider>
    </QueryClientProvider>
  );
}