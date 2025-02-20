import React from 'react';
import { useParentState } from '../useIframeState';
import ImportedComponent from '../../modules/insights/insights-view';

import { DataTableProvider } from "@calcom/features/data-table";
import { InsightsOrgTeamsProvider } from "@calcom/features/insights/context/InsightsOrgTeamsProvider";
import { DataTableContext } from "@calcom/features/data-table/lib/context";

// Create mock columns for the table
const mockColumns = [
  {
    id: 'name',
    accessorKey: 'name',
    header: 'Name',
    enableSorting: true,
    enableHiding: true,
    filterFn: 'includesString',
  },
  {
    id: 'date',
    accessorKey: 'date',
    header: 'Date',
    enableSorting: true,
    enableHiding: true,
    filterFn: 'includesString',
  }
];

// Create a mock table object with proper structure
const mockTable = {
  getState: () => ({
    columnFilters: [],
    globalFilter: "",
    sorting: [],
    columnVisibility: {},
  }),
  setColumnFilters: () => {},
  setGlobalFilter: () => {},
  getColumn: (id: string) => ({
    id,
    getFilterValue: () => undefined,
    setFilterValue: () => {},
    getCanFilter: () => true,
    getFacetedUniqueValues: () => new Map(),
    getFacetedMinMaxValues: () => [0, 100],
  }),
  getAllColumns: () => mockColumns.map(col => ({
    ...col,
    getFilterValue: () => undefined,
    setFilterValue: () => {},
    getCanFilter: () => true,
    getFacetedUniqueValues: () => new Map(),
    getFacetedMinMaxValues: () => [0, 100],
  })),
  getFilteredRowModel: () => ({ rows: [] }),
  getPreFilteredRowModel: () => ({ rows: [] }),
  getCoreRowModel: () => ({ rows: [] }),
};

// Mock the useDataTable hook context
const mockDataTableContext = {
  activeFilters: [],
  setActiveFilters: () => {},
  clearAll: () => {},
  updateFilter: () => {},
  removeFilter: () => {},
  sorting: [],
  setSorting: () => {},
  columnVisibility: {},
  setColumnVisibility: () => {},
  table: mockTable
};

const MockDataTableProvider = ({ children }) => {
  return (
    <DataTableContext.Provider value={mockDataTableContext}>
      {children}
    </DataTableContext.Provider>
  );
};

// Create a wrapper component that provides all necessary context
const MockProvider = ({ children }) => {
  return (
    <div>
      <MockDataTableProvider>
        <InsightsOrgTeamsProvider>
          {children}
        </InsightsOrgTeamsProvider>
      </MockDataTableProvider>
    </div>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // No props identified for this component
  });

  return (
    <MockProvider>
      <div className="mock-insights" data-testid="mock-insights">
        <ImportedComponent />
      </div>
    </MockProvider>
  );
}