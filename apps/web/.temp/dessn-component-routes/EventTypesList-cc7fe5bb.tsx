import React from 'react';
import { useParentState } from '../useIframeState';
import { EventTypesList } from '../../../../packages/features/users/components/UserTable/BulkActions/EventTypesList';

const mockTable = {
  selectedRows: [],
  getSelectedRowModel: {
    flatRows: []
  },
  toggleAllRowsSelected: false
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    table: {
      type: "object",
      value: mockTable,
      label: "Table",
    },
    orgTeams: {
      type: "object",
      value: [],
      label: "Organization Teams",
    },
  });

  return (
    <div className="p-6">
      <EventTypesList
        table={{
          getSelectedRowModel: () => ({ flatRows: [] }),
          toggleAllRowsSelected: () => {},
        } as any}
        orgTeams={[]}
      />
    </div>
  );
}