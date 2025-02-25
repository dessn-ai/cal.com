import React from 'react';
import { useParentState } from '../useIframeState';
import { TeamListBulkAction } from '../../../../packages/features/users/components/UserTable/BulkActions/TeamList';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    table: {
      type: 'object',
      value: {
        selectedRows: [
          { id: 1, teams: [{ id: 1, name: 'Team 1' }] },
          { id: 2, teams: [{ id: 2, name: 'Team 2' }] }
        ],
        // Instead of passing functions, we'll pass the data directly
        selectedRowsData: {
          flatRows: [
            { original: { id: 1, teams: [{ id: 1, name: 'Team 1' }] } },
            { original: { id: 2, teams: [{ id: 2, name: 'Team 2' }] } }
          ]
        }
      },
      label: 'Table',
    },
  });

  // Create a mock table object that uses the static data
  const tableProps = {
    ...state.table.value,
    getSelectedRowModel: () => state.table.value.selectedRowsData,
    toggleAllRowsSelected: () => {
      // No-op function that will be handled by the actual component
      console.log('Toggle all rows selected');
    }
  };

  return <TeamListBulkAction table={tableProps} />;
}