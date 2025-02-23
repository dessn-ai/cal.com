import React from 'react';
import { useParentState } from '../useIframeState';
import { TeamListBulkAction } from '../../../../packages/features/users/components/UserTable/BulkActions/TeamList';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    table: {
      type: 'object',
      value: {
        getSelectedRowModel: () => ({
          flatRows: [
            { original: { id: 1, teams: [{ id: 1, name: 'Team 1' }] } },
            { original: { id: 2, teams: [{ id: 2, name: 'Team 2' }] } },
          ],
        }),
        toggleAllRowsSelected: () => {},
      },
      label: 'Table',
    },
  });

  return <TeamListBulkAction table={state.table.value} />;
}