import React from 'react';
import { useParentState } from '../useIframeState';
import { UserListTable } from '../../../../packages/features/users/components/UserTable/UserListTable';

import { DataTableProvider } from '@calcom/features/data-table';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "",
      label: "Class Name",
    },
    payouts: {
      type: "string",
      value: "{}",
      label: "Payouts",
    },
    isLoading: {
      type: "boolean",
      value: false,
      label: "Is Loading",
    },
    props: {
      type: "string",
      value: "{}",
      label: "Table Props",
    },
  });

  return (
    <DataTableProvider>
      <UserListTable
        className={state.className.value}
        payouts={JSON.parse(state.payouts.value)}
        isLoading={state.isLoading.value}
        props={JSON.parse(state.props.value)}
      />
    </DataTableProvider>
  );
}