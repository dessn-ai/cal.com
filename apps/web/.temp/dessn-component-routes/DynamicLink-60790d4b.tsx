import React from 'react';
import { useParentState } from '../useIframeState';
import { DynamicLink } from '../../../../packages/features/users/components/UserTable/BulkActions/DynamicLink';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    table: {
      type: 'object',
      value: {
        getSelectedRowModel: () => ({
          rows: [{ original: { username: 'user1' } }, { original: { username: 'user2' } }],
          flatRows: [{ original: { username: 'user1' } }, { original: { username: 'user2' } }],
        }),
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
      table={state.table.value as any}
      domain={state.domain.value}
    />
  );
}