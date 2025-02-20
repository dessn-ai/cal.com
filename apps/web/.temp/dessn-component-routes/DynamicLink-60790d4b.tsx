import React from 'react';
import { useParentState } from '../useIframeState';
import { DynamicLink as OriginalDynamicLink } from '../../../../packages/features/users/components/UserTable/BulkActions/DynamicLink';

// Create a wrapper component that handles the data transformation
const MockDynamicLink = ({ table, domain }: any) => {
  // Extract the usernames directly from the data
  const selectedUsers = table.selectedRows.map((row: any) => row.original.username);
  
  // Create a simplified version of the table prop
  const simplifiedTable = {
    getSelectedRowModel: () => ({
      rows: table.selectedRows,
      flatRows: table.selectedRows
    })
  };

  return <OriginalDynamicLink table={simplifiedTable} domain={domain} />;
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    table: {
      type: 'object',
      value: {
        selectedRows: [
          { original: { username: 'user1' } },
          { original: { username: 'user2' } }
        ]
      },
      label: 'Table',
    },
    domain: {
      type: 'string',
      value: 'https://example.com',
      label: 'Domain',
    },
  });

  return (
    <MockDynamicLink
      table={state.table.value}
      domain={state.domain.value}
    />
  );
}