import React from 'react';
import { useParentState } from '../useIframeState';
import { TeamListBulkAction } from '../../../../packages/features/users/components/UserTable/BulkActions/TeamList';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    selectedRows: {
      type: 'array',
      value: [
        { id: 1, teams: [{ id: 1, name: 'Team 1' }] },
        { id: 2, teams: [{ id: 2, name: 'Team 2' }] }
      ],
      label: 'Selected Rows'
    }
  });

  // Create a table object with memoized functions to prevent serialization issues
  const table = React.useMemo(() => ({
    getSelectedRowModel: () => ({
      flatRows: state.selectedRows.value.map(row => ({ original: row }))
    }),
    toggleAllRowsSelected: () => {
      // No-op function since we don't need the actual implementation for preview
      console.log('toggleAllRowsSelected called');
    }
  }), [state.selectedRows.value]);

  return <TeamListBulkAction table={table} />;
}