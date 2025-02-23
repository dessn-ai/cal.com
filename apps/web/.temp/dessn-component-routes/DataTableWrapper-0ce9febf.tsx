import React from 'react';
import { useParentState } from '../useIframeState';
import { useReactTable } from '@tanstack/react-table';

// Mock DataTableWrapper component
const MockDataTableWrapper = ({
  testId,
  bodyTestId,
  table,
  isPending,
  hasNextPage,
  fetchNextPage,
  isFetching,
  hideHeader,
  variant,
  totalDBRowCount,
}) => {
  return (
    <div data-testid={testId} className="space-y-4">
      {!hideHeader && (
        <div className="flex justify-between">
          <div>Header Content</div>
          <div>Actions</div>
        </div>
      )}
      
      <div data-testid={bodyTestId} className="relative">
        <table className="w-full">
          <thead>
            <tr>
              <th>Mock Header</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mock Data</td>
            </tr>
          </tbody>
        </table>
        
        {isPending && <div>Loading...</div>}
      </div>

      {totalDBRowCount > 0 && (
        <div className="mt-4">
          <div>Total Items: {totalDBRowCount}</div>
          {hasNextPage && (
            <button 
              onClick={fetchNextPage}
              disabled={isFetching}
            >
              {isFetching ? 'Loading more...' : 'Load more'}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

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
    <MockDataTableWrapper
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
  );
}