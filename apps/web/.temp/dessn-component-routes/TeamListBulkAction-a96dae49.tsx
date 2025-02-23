import React, { useMemo } from 'react';
import { useParentState } from '../useIframeState';
import { TeamListBulkAction } from '../../../../packages/features/users/components/UserTable/BulkActions/TeamList';

export default function ComponentPreview() {
  const selectedRows = [
    { id: 1, teams: [{ id: 1, name: 'Team 1' }] },
    { id: 2, teams: [{ id: 2, name: 'Team 2' }] },
  ];

  const tableData = useMemo(() => ({
    getSelectedRowModel: () => ({
      flatRows: selectedRows.map((row) => ({ original: row }))
    }),
    toggleAllRowsSelected: () => {},
  }), []);

  return <TeamListBulkAction table={tableData} />;
}