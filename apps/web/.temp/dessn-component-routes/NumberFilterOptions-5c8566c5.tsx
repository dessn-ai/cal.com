import React from 'react';
import { useParentState } from '../useIframeState';
import { NumberFilterOptions } from '../../../../packages/features/data-table/components/filters/NumberFilterOptions';
import { ColumnFilterType } from '../../../../packages/features/data-table/lib/types';

// Mock the useDataTable hook by replacing it in the module system
const mockUseDataTable = {
  tableInstance: {
    getState: () => ({}),
    setFilterValue: () => {},
    getColumn: () => ({}),
    getPreFilteredRowModel: () => ({
      flatRows: []
    }),
    options: {
      meta: {}
    }
  },
  tableState: {
    filters: {}
  },
  setTableState: () => {}
};

// Override the module that contains useDataTable
const originalRequire = window.require;
window.require = function(module) {
  if (module.includes('useDataTable')) {
    return {
      useDataTable: () => mockUseDataTable
    };
  }
  if (module.includes('useFilterValue')) {
    return {
      useFilterValue: () => ({
        value: '',
        setValue: () => {}
      })
    };
  }
  return originalRequire.apply(this, arguments);
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

  // Create a mock component that provides the necessary context
  const MockedNumberFilterOptions = React.memo(() => {
    return (
      <div className="p-4 border rounded">
        <div className="font-medium mb-2">Filter: {column.title}</div>
        <div className="space-y-2">
          <div>
            <label className="block text-sm">Min value</label>
            <input 
              type="number" 
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              placeholder="Enter minimum value"
            />
          </div>
          <div>
            <label className="block text-sm">Max value</label>
            <input 
              type="number" 
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              placeholder="Enter maximum value"
            />
          </div>
        </div>
      </div>
    );
  });

  return <MockedNumberFilterOptions />;
}