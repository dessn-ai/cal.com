import React from 'react';
import { useParentState } from '../useIframeState';
import { FilterOptions } from '../../../../packages/features/data-table/components/filters/FilterOptions';
import { ColumnFilterType } from '../../../../packages/features/data-table/lib/types';
import { DataTableContext } from '../../../../packages/features/data-table/lib/context';

const DataTableProvider = ({ children }) => {
  const mockContextValue = {
    table: {
      getState: () => ({
        columnFilters: [],
        sorting: [],
        globalFilter: '',
        pagination: {
          pageIndex: 0,
          pageSize: 10
        }
      }),
      setColumnFilters: () => {},
      setSorting: () => {},
      setGlobalFilter: () => {},
      setPagination: () => {},
      getColumn: (columnId: string) => ({
        getFilterValue: () => undefined,
        setFilterValue: () => {},
        id: columnId,
        columnDef: {}
      }),
      getPreFilteredRowModel: () => ({ rows: [] }),
      getFilteredRowModel: () => ({ rows: [] }),
      getCoreRowModel: () => ({ rows: [] }),
    },
    selectedRows: new Set(),
    setSelectedRows: () => {},
    data: [],
    isLoading: false,
    tableState: {
      pagination: { pageIndex: 0, pageSize: 10 },
      sorting: [],
      columnFilters: [],
      globalFilter: '',
    },
    onTableStateChange: () => {},
    tableRef: { current: null },
    rowSelection: {},
    setRowSelection: () => {},
    columns: [],
    filterableColumns: [],
    searchableColumns: [],
    selectable: false,
    // Add activeFilters array that useFilterValue expects
    activeFilters: [],
    setActiveFilters: () => {},
    // Add any other filter-related properties
    setFilter: () => {},
    removeFilter: () => {},
    clearFilters: () => {},
    activeFilterCount: 0
  };

  return (
    <DataTableContext.Provider value={mockContextValue}>
      {children}
    </DataTableContext.Provider>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    columnType: {
      type: "dropdown",
      value: "TEXT",
      options: ["TEXT", "MULTI_SELECT", "SINGLE_SELECT", "NUMBER", "DATE_RANGE"],
      label: "Column Type",
    },
  });

  const getColumnData = () => {
    const baseColumn = {
      id: "example-column",
      title: "Example Column",
      icon: "filter",
    };

    switch (state.columnType.value) {
      case "MULTI_SELECT":
      case "SINGLE_SELECT":
        return {
          ...baseColumn,
          type: state.columnType.value === "MULTI_SELECT" ? ColumnFilterType.MULTI_SELECT : ColumnFilterType.SINGLE_SELECT,
          options: [
            { label: "Option 1", value: "1" },
            { label: "Option 2", value: "2" },
            { label: "Option 3", value: "3" },
          ],
        };
      case "NUMBER":
        return {
          ...baseColumn,
          type: ColumnFilterType.NUMBER,
        };
      case "DATE_RANGE":
        return {
          ...baseColumn,
          type: ColumnFilterType.DATE_RANGE,
        };
      case "TEXT":
      default:
        return {
          ...baseColumn,
          type: ColumnFilterType.TEXT,
        };
    }
  };

  return (
    <DataTableProvider>
      <FilterOptions column={getColumnData()} />
    </DataTableProvider>
  );
}