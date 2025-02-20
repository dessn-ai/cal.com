import React, { createContext, useContext, useMemo } from 'react';
import { useParentState } from '../useIframeState';

// Define necessary types
type FilterType = 'multi-select' | 'single-select';

interface FilterableColumn {
  id: string;
  title: string;
  type: FilterType;
}

interface DataTableContextType {
  activeFilters: Array<{ f: string }>;
  setActiveFilters?: (filters: Array<{ f: string }>) => void;
}

// Create context
const DataTableContext = createContext<DataTableContextType>({
  activeFilters: [],
});

// Custom hooks
const useDataTable = () => {
  const context = useContext(DataTableContext);
  if (!context) {
    throw new Error('useDataTable must be used within a DataTableProvider');
  }
  return context;
};

const useFilterableColumns = (table: any): FilterableColumn[] => {
  return useMemo(() => {
    const columns = table.getAllColumns();
    return columns.map((col: any) => ({
      id: col.id,
      title: col.columnDef.header,
      type: col.columnDef.meta?.filter?.type || 'multi-select'
    }));
  }, [table]);
};

// Modified FilterPopover component
const FilterPopover = ({ column }: { column: FilterableColumn }) => {
  return (
    <div style={{ display: 'inline-block', margin: '0 4px' }}>
      <span style={{ padding: '2px 8px', background: '#f0f0f0', borderRadius: '4px' }}>
        {column.title}
      </span>
    </div>
  );
};

// Modified ActiveFilters component
const ActiveFilters = ({ table }: { table: any }) => {
  const { activeFilters } = useDataTable();
  const filterableColumns = useFilterableColumns(table);

  return (
    <div style={{ display: 'flex', gap: '8px', padding: '8px' }}>
      {(activeFilters || []).map((filter) => {
        const column = filterableColumns.find((col) => col.id === filter.f);
        if (!column) return null;
        return <FilterPopover key={column.id} column={column} />;
      })}
    </div>
  );
};

const createMockColumn = (id: string) => ({
  id,
  columnDef: {
    header: id.charAt(0).toUpperCase() + id.slice(1),
    meta: {
      filter: {
        type: 'multi-select' as const,
      },
      filterable: true
    }
  },
  getCanFilter: () => true,
  getFacetedUniqueValues: () => new Map([['value1', 1], ['value2', 2]]),
});

const createMockTable = () => ({
  getAllColumns: () => [
    createMockColumn('name'),
    createMockColumn('email')
  ],
  getColumn: (columnId: string) => createMockColumn(columnId),
  getState: () => ({
    columnFilters: []
  }),
  setColumnFilters: () => {},
  getPreFilteredRowModel: () => ({
    flatRows: []
  }),
  getFilteredRowModel: () => ({
    flatRows: []
  }),
  options: {
    getFacetedUniqueValues: () => new Map([['value1', 1], ['value2', 2]])
  }
});

const MockDataTableProvider = ({ children }: { children: React.ReactNode }) => {
  const value = useMemo(() => ({
    activeFilters: [
      { f: 'name' },
      { f: 'email' }
    ],
    setActiveFilters: (filters: Array<{ f: string }>) => console.log('filters updated:', filters)
  }), []);

  return (
    <DataTableContext.Provider value={value}>
      {children}
    </DataTableContext.Provider>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    table: {
      type: 'object',
      value: createMockTable(),
      label: 'Table',
    },
  });

  const table = useMemo(() => state.table.value, [state.table.value]);

  return (
    <MockDataTableProvider>
      <ActiveFilters table={table} />
    </MockDataTableProvider>
  );
}