import React from 'react';
import { useParentState } from '../useIframeState';
import { DeleteBulkUsers } from '../../../../packages/features/users/components/UserTable/BulkActions/DeleteBulkUsers';

// Inline mocks
const mockDataTable = {
  useDataTable: () => ({
    loading: false,
    setLoading: () => {},
    data: [],
    setData: () => {},
    selectedRows: new Set(),
    setSelectedRows: () => {},
  }),
  useFilterValue: () => ({
    filterValue: "",
    setFilterValue: () => {},
  })
};

// Mock the data-table hooks globally
global["@calcom/features/data-table/hooks/useDataTable"] = mockDataTable.useDataTable;
global["@calcom/features/data-table/hooks/useFilterValue"] = mockDataTable.useFilterValue;

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    users: {
      type: "string",
      value: JSON.stringify([{ id: 1 }, { id: 2 }, { id: 3 }]),
      label: "Users",
    },
  });

  const users = JSON.parse(state.users.value);

  return (
    <DeleteBulkUsers
      users={users}
      onRemove={() => {
        console.log("Users removed");
      }}
    />
  );
}