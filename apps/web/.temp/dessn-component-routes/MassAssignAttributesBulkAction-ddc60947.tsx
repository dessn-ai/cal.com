import React from 'react';
import { useParentState } from '../useIframeState';
import { MassAssignAttributesBulkAction } from '../../../../packages/features/users/components/UserTable/BulkActions/MassAssignAttributes';

export default function ComponentPreview() {
  const [state] = useParentState({
    filters: {
      type: 'object',
      value: [],
      label: 'Filters',
    }
  });

  // Create the table mock directly in the component, not in state
  const tableMock = {
    getSelectedRowModel: () => ({
      flatRows: []
    }),
    selectedRowIds: {},
    setRowSelection: () => {},
    resetRowSelection: () => {},
    getState: () => ({ rowSelection: {} }),
    getRowModel: () => ({ rows: [] })
  };

  return (
    <div type="component">
      <MassAssignAttributesBulkAction
        table={tableMock}
        filters={state.filters.value}
      />
    </div>
  );
}