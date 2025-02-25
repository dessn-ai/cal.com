import React, { useState } from 'react';
import { useParentState } from '../useIframeState';
import { ColumnFilterType } from '../../../../packages/features/data-table/lib/types';

// Create a simplified version of FilterOptions that doesn't rely on context
const SimplifiedFilterOptions = ({ column }: { column: any }) => {
  const [filterValue, setFilterValue] = useState('');

  const renderFilterInput = () => {
    switch (column.type) {
      case ColumnFilterType.TEXT:
        return (
          <div className="flex flex-col gap-2">
            <input
              type="text"
              value={filterValue}
              onChange={(e) => setFilterValue(e.target.value)}
              placeholder="Filter text..."
              className="border p-2 rounded"
            />
          </div>
        );
      case ColumnFilterType.SINGLE_SELECT:
      case ColumnFilterType.MULTI_SELECT:
        return (
          <div className="flex flex-col gap-2">
            <select
              value={filterValue}
              onChange={(e) => setFilterValue(e.target.value)}
              className="border p-2 rounded"
            >
              <option value="">Select option...</option>
              {column.options?.map((option: any) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        );
      case ColumnFilterType.NUMBER:
        return (
          <div className="flex flex-col gap-2">
            <input
              type="number"
              value={filterValue}
              onChange={(e) => setFilterValue(e.target.value)}
              placeholder="Filter number..."
              className="border p-2 rounded"
            />
          </div>
        );
      case ColumnFilterType.DATE_RANGE:
        return (
          <div className="flex flex-col gap-2">
            <input
              type="date"
              value={filterValue}
              onChange={(e) => setFilterValue(e.target.value)}
              className="border p-2 rounded"
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-4">
      <div className="mb-4">
        <h3 className="text-lg font-medium">{column.title}</h3>
        <p className="text-sm text-gray-500">Filter by {column.type.toLowerCase()}</p>
      </div>
      {renderFilterInput()}
      {filterValue && (
        <div className="mt-4">
          <button
            onClick={() => setFilterValue('')}
            className="px-3 py-1 bg-gray-200 rounded text-sm"
          >
            Clear
          </button>
        </div>
      )}
    </div>
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

  return <SimplifiedFilterOptions column={getColumnData()} />;
}