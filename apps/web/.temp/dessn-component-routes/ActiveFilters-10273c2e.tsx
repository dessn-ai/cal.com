import React, { createContext, useContext } from 'react';
import { useParentState } from '../useIframeState';
import type { Table } from '@tanstack/react-table';

// Create a mock context with the minimum required properties
const DataTableContext = createContext<{
  activeFilters: Array<{ f: string }>;
  setActiveFilters: (filters: Array<{ f: string }>) => void;
}>({
  activeFilters: [],
  setActiveFilters: () => {},
});

// Create a mock provider component
function DataTableProvider({ children }: { children: React.ReactNode }) {
  const value = {
    activeFilters: [{ f: 'mockFilter' }],
    setActiveFilters: () => {},
  };

  return (
    <DataTableContext.Provider value={value}>
      {children}
    </DataTableContext.Provider>
  );
}

// Mock the useDataTable hook
const useDataTable = () => {
  return useContext(DataTableContext);
};

// Mock the useFilterableColumns hook
const useFilterableColumns = (table: Table<any>) => {
  return [{
    id: 'mockFilter',
    label: 'Mock Filter'
  }];
};

// Mock the ActiveFilters component
function MockActiveFilters({ table }: { table: Table<any> }) {
  const { activeFilters } = useDataTable();
  const filterableColumns = useFilterableColumns(table);

  return (
    <div>
      {activeFilters.map((filter) => {
        const column = filterableColumns.find((col) => col.id === filter.f);
        if (!column) return null;
        return (
          <div key={column.id}>
            Filter: {column.label}
          </div>
        );
      })}
    </div>
  );
}

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    table: {
      type: 'object',
      value: {} as Table<any>,
      label: 'Table',
    },
  });

  return (
    <DataTableProvider>
      <MockActiveFilters table={state.table.value} />
    </DataTableProvider>
  );
}