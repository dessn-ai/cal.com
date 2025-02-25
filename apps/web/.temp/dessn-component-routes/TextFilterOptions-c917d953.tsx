import React from 'react';
import { useParentState } from '../useIframeState';
import { TextFilterOptions } from '../../../../packages/features/data-table/components/filters/TextFilterOptions';
import { ColumnFilterType } from '../../../../packages/features/data-table/lib/types';

// Mock the useDataTable hook by intercepting the module
const mockDataTableHook = () => ({
  data: [],
  columns: [],
  options: {
    enableFilters: true,
    enableSorting: true,
    enableMultiSort: true,
    enablePagination: true,
  },
  state: {
    columnFilters: [],
    globalFilter: '',
    pagination: { pageIndex: 0, pageSize: 10 },
    sorting: [],
  },
  setColumnFilters: () => {},
  getColumn: () => ({}),
  getPreFilteredRowModel: () => ({ rows: [] }),
  getFilteredRowModel: () => ({ rows: [] }),
  getSortedRowModel: () => ({ rows: [] }),
  getPaginationRowModel: () => ({ rows: [] }),
  setFilter: () => {},
  getFilter: () => ({}),
  resetFilter: () => {},
});

// Override the module import
const originalModule = await import('../../../../packages/features/data-table/hooks/useDataTable');
originalModule.useDataTable = mockDataTableHook;

export default function ComponentPreview() {
  const [state] = useParentState({
    columnId: {
      type: "string",
      value: "exampleColumn",
      label: "Column ID",
    },
    columnTitle: {
      type: "string",
      value: "Example Column",
      label: "Column Title",
    },
  });

  const column = {
    id: state.columnId.value,
    title: state.columnTitle.value,
    type: ColumnFilterType.TEXT,
    filterFn: (row: any, columnId: string, filterValue: string) => true,
    getFilterValue: () => "",
    setFilterValue: () => {},
  };

  // Render with error boundary
  return (
    <ErrorBoundary fallback={<div>Error loading filter options</div>}>
      <TextFilterOptions column={column} />
    </ErrorBoundary>
  );
}

// Simple error boundary component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}