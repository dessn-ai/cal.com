import React, { createContext, useContext, useMemo } from 'react';
import { useParentState } from '../useIframeState';
import { ColumnFilterType } from '../../../../packages/features/data-table/lib/types';

// Create the DataTable context
const DataTableContext = createContext<any>(null);

// Mock useDataTable hook
const useDataTable = () => {
  const context = useContext(DataTableContext);
  if (!context) {
    throw new Error("useDataTable must be used within a DataTableProvider");
  }
  return context;
};

// Mock useFilterValue hook
const useFilterValue = (columnId: string, schema: any) => {
  const { activeFilters } = useDataTable();
  return useMemo(() => {
    const value = activeFilters?.find((filter: any) => filter.f === columnId)?.v;
    if (schema && value) {
      return value;
    }
    return undefined;
  }, [activeFilters, columnId, schema]);
};

// Create the actual SingleSelectFilterOptions component with proper hooks
const SingleSelectFilterOptions = ({ column }) => {
  const { setFilter, removeFilter } = useDataTable();
  const value = useFilterValue(column.id, null);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    if (selectedValue) {
      setFilter(column.id, selectedValue);
    } else {
      removeFilter(column.id);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <select 
          className="w-full rounded-md border border-gray-300 p-2"
          value={value || ""}
          onChange={handleChange}
        >
          <option value="">Select...</option>
          {column.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

// DataTableProvider with all necessary context values
const DataTableProvider = ({ children }) => {
  const value = {
    setFilter: () => {},
    removeFilter: () => {},
    activeFilters: [],
    table: {
      getState: () => ({
        columnFilters: [],
        sorting: [],
        pagination: {
          pageIndex: 0,
          pageSize: 10
        }
      }),
      setColumnFilters: () => {},
      setSorting: () => {},
      setPagination: () => {},
    },
    setSelectedRows: () => {},
    selectedRows: new Set(),
    isLoading: false,
    tableState: {
      pagination: {
        pageIndex: 0,
        pageSize: 10
      },
      sorting: [],
      columnFilters: []
    }
  };

  return (
    <DataTableContext.Provider value={value}>
      {children}
    </DataTableContext.Provider>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
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
    columnIcon: {
      type: "dropdown",
      value: "user",
      options: ["user", "calendar", "settings", "star"],
      label: "Column Icon",
    },
  });

  const column = {
    id: state.columnId.value,
    title: state.columnTitle.value,
    icon: state.columnIcon.value,
    type: ColumnFilterType.SINGLE_SELECT,
    options: [
      { label: "Option 1", value: "option1" },
      { label: "Option 2", value: "option2" },
      { label: "Option 3", value: "option3" },
    ],
  };

  return (
    <DataTableProvider>
      <SingleSelectFilterOptions column={column} />
    </DataTableProvider>
  );
}