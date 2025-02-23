import React, { createContext, useContext } from 'react';
import { useParentState } from '../useIframeState';
import { ColumnFilterType } from '../../../../packages/features/data-table/lib/types';

// Mock the required contexts and hooks
const DataTableContext = createContext<any>(null);

// Mock the useLocale hook
const LocaleContext = createContext<any>(null);
const useLocale = () => {
  return {
    t: (key: string) => key // Simple translation mock
  };
};

// Mock the useDataTable hook
const useDataTable = () => {
  const context = useContext(DataTableContext);
  if (!context) throw new Error("useDataTable must be used within a DataTableProvider");
  return {
    updateFilter: () => {},
    removeFilter: () => {},
    ...context
  };
};

// Mock the useFilterValue hook
const useFilterValue = () => null;

// Mock NumberFilterOptions component with all required providers
const NumberFilterOptions = ({ column }: { column: any }) => {
  const { t } = useLocale();
  
  return (
    <div className="mx-3 my-2">
      <div>
        <div className="-mt-2 flex items-center gap-2">
          <select className="basis-1/3">
            <option value="equals">Equals</option>
            <option value="gt">Greater than</option>
            <option value="lt">Less than</option>
          </select>
          <input 
            type="number" 
            className="mt-2 basis-2/3 rounded-md border px-2 py-1" 
            placeholder="Enter value"
          />
        </div>

        <div className="bg-subtle -mx-3 mb-2 h-px" role="separator" />

        <div className="flex items-center justify-between">
          <button
            type="button"
            className="rounded-md border px-3 py-1"
            onClick={() => {}}>
            {t("clear")}
          </button>
          <button
            type="submit"
            className="rounded-md bg-blue-500 px-3 py-1 text-white"
            onClick={() => {}}>
            {t("apply")}
          </button>
        </div>
      </div>
    </div>
  );
};

// Create the DataTableProvider component
const DataTableProvider = ({ children }: { children: React.ReactNode }) => {
  const value = {
    filterValue: {},
    setFilterValue: () => {},
    table: {
      getColumn: () => ({
        getFilterValue: () => undefined,
        setFilterValue: () => {},
      }),
    },
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
      value: "numberColumn",
      label: "Column ID",
    },
    columnTitle: {
      type: "string",
      value: "Number Column",
      label: "Column Title",
    },
  });

  const column = {
    id: state.columnId.value,
    title: state.columnTitle.value,
    type: ColumnFilterType.NUMBER,
  };

  return (
    <DataTableProvider>
      <NumberFilterOptions column={column} />
    </DataTableProvider>
  );
}