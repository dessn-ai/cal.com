import React from 'react';
import { useParentState } from '../useIframeState';
import { ColumnFilterType } from '../../../../packages/features/data-table/lib/types';
import { createContext, useContext } from 'react';

// Create contexts
const DataTableContext = createContext<any>(null);
const LocaleContext = createContext<any>(null);

// Mock the text filter options
const textFilterOperatorOptions = [
  { value: 'contains', label: 'Contains', requiresOperand: true },
  { value: 'equals', label: 'Equals', requiresOperand: true },
  { value: 'empty', label: 'Is empty', requiresOperand: false },
];

// Create a mock TextFilterOptions component that doesn't depend on the original hooks
const MockTextFilterOptions = ({ column }: { column: any }) => {
  const { t } = useContext(LocaleContext);
  
  return (
    <div className="mx-3 my-2">
      <div>
        <select className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2">
          {textFilterOperatorOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <input
          type="text"
          className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2"
          placeholder="Filter value..."
        />
        <div className="bg-subtle -mx-3 mb-2 h-px mt-2" role="separator" />
        <div className="flex items-center justify-between mt-2">
          <button
            type="button"
            className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            {t("clear")}
          </button>
          <button
            type="submit"
            className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
          >
            {t("apply")}
          </button>
        </div>
      </div>
    </div>
  );
};

// Create providers
const LocaleProvider = ({ children }: { children: React.ReactNode }) => {
  const value = {
    t: (key: string) => key, // Simple translation mock
  };
  
  return (
    <LocaleContext.Provider value={value}>
      {children}
    </LocaleContext.Provider>
  );
};

const DataTableProvider = ({ children }: { children: React.ReactNode }) => {
  const mockDataTableValue = {
    filterValue: null,
    setFilterValue: () => {},
    table: {
      getState: () => ({
        columnFilters: [],
      }),
      setColumnFilters: () => {},
    },
    updateFilter: () => {},
    removeFilter: () => {},
    activeFilters: [],
  };

  return (
    <DataTableContext.Provider value={mockDataTableValue}>
      {children}
    </DataTableContext.Provider>
  );
};

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
  };

  return (
    <div className="p-4">
      <LocaleProvider>
        <DataTableProvider>
          <MockTextFilterOptions column={column} />
        </DataTableProvider>
      </LocaleProvider>
    </div>
  );
}