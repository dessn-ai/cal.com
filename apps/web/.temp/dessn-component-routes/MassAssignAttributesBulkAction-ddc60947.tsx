import React from 'react';
import { useParentState } from '../useIframeState';
import { MassAssignAttributesBulkAction } from '../../../../packages/features/users/components/UserTable/BulkActions/MassAssignAttributes';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    table: {
      type: 'object',
      value: {
        getSelectedRowModel: () => ({ flatRows: [] }),
      },
      label: 'Table',
    },
    filters: {
      type: 'object',
      value: [],
      label: 'Filters',
    },
  });

  return (
    <MassAssignAttributesBulkAction
      table={state.table.value as any}
      filters={state.filters.value}
    />
  );
}