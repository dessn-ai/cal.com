import React from 'react';
import { useParentState } from '../useIframeState';
import { ColumnFilterType } from '../../../../packages/features/data-table/lib/types';

// Create a simplified version of the DateRangeFilter
const SimplifiedDateRangeFilter = ({ column }: any) => {
  return (
    <div className="p-4 border rounded">
      <h3 className="text-lg font-medium mb-2">Date Range Filter</h3>
      <div className="space-y-2">
        <div>
          <label className="block text-sm font-medium">Start Date</label>
          <input type="date" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
        </div>
        <div>
          <label className="block text-sm font-medium">End Date</label>
          <input type="date" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Apply Filter
        </button>
      </div>
    </div>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    column: {
      type: "object",
      value: {
        id: "dateRange",
        title: "Date Range",
        type: ColumnFilterType.DATE_RANGE,
        icon: "calendar",
      },
      label: "Column",
    },
  });

  return (
    <div>
      <SimplifiedDateRangeFilter
        column={state.column.value as Extract<FilterableColumn, { type: ColumnFilterType.DATE_RANGE }>}
      />
    </div>
  );
}