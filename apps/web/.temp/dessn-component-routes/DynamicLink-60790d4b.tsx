import React from 'react';
import { useParentState } from '../useIframeState';
import { DynamicLink } from '../../../../packages/features/users/components/UserTable/BulkActions/DynamicLink';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    table: {
      type: 'object',
      value: {
        selectedRows: [
          { original: { username: 'user1' } },
          { original: { username: 'user2' } }
        ],
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
    <DynamicLink
      table={{
        getSelectedRowModel: () => ({
          rows: state.table.value.selectedRows,
          flatRows: state.table.value.selectedRows,
        }),
      }}
      domain={state.domain.value}
    />
  );
}