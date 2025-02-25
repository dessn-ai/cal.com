import React from 'react';
import { useParentState } from '../useIframeState';
import { DataTableWrapper } from '../../../../packages/features/data-table/components/DataTableWrapper';
import { DataTableProvider } from '../../../../packages/features/data-table/components/DataTableProvider';
import { useReactTable } from '@tanstack/react-table';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    testId: {
      type: "string",
      value: "data-table-wrapper",
      label: "Test ID",
    },
    bodyTestId: {
      type: "string",
      value: "data-table-body",
      label: "Body Test ID",
    },
    isPending: {
      type: "boolean",
      value: false,
      label: "Is Pending",
    },
    hasNextPage: {
      type: "boolean",
      value: true,
      label: "Has Next Page",
    },
    isFetching: {
      type: "boolean",
      value: false,
      label: "Is Fetching",
    },
    hideHeader: {
      type: "boolean",
      value: false,
      label: "Hide Header",
    },
    variant: {
      type: "dropdown",
      value: "default",
      options: ["default", "compact"],
      label: "Variant",
    },
    totalDBRowCount: {
      type: "number",
      value: 100,
      label: "Total DB Row Count",
    },
  });

  const mockTable = useReactTable({
    data: [],
    columns: [],
    getCoreRowModel: () => ({ rows: [] }),
  });

  return (
    <DataTableProvider
      table={mockTable}
      selectedRows={new Set()}
      setSelectedRows={() => {}}
    >
      <DataTableWrapper
        testId={state.testId.value}
        bodyTestId={state.bodyTestId.value}
        table={mockTable}
        isPending={state.isPending.value}
        hasNextPage={state.hasNextPage.value}
        fetchNextPage={() => {}}
        isFetching={state.isFetching.value}
        hideHeader={state.hideHeader.value}
        variant={state.variant.value}
        totalDBRowCount={state.totalDBRowCount.value}
      />
    </DataTableProvider>
  );
}