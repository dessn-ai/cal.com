import React from 'react';
import { useParentState } from '../useIframeState';
import { ColumnFilterType } from '../../../../packages/features/data-table/lib/types';

// Mock FilterPopover component
const MockFilterPopover = ({ column }) => {
  return (
    <div className="p-4 border rounded shadow-sm">
      <h3 className="text-lg font-medium mb-4">Filter: {column.title}</h3>
      <div className="space-y-4">
        {column.type === ColumnFilterType.SINGLE_SELECT && (
          <div>
            <label className="block text-sm font-medium mb-2">Select Option</label>
            <select className="w-full p-2 border rounded">
              <option value="">Select...</option>
              {column.options?.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        )}
        {column.type === ColumnFilterType.DATE_RANGE && (
          <div>
            <label className="block text-sm font-medium mb-2">Date Range</label>
            <input type="date" className="w-full p-2 border rounded mb-2" />
            <input type="date" className="w-full p-2 border rounded" />
          </div>
        )}
        <div className="flex justify-end space-x-2 mt-4">
          <button className="px-4 py-2 bg-gray-200 rounded">Clear</button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded">Apply</button>
        </div>
      </div>
    </div>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    column: {
      type: "dropdown",
      value: JSON.stringify({
        id: "example-column",
        title: "Example Column",
        icon: "filter",
        type: ColumnFilterType.SINGLE_SELECT,
        options: [
          { label: "Option 1", value: "option1" },
          { label: "Option 2", value: "option2" },
        ],
      }),
      options: [
        JSON.stringify({
          id: "example-column",
          title: "Example Column",
          icon: "filter",
          type: ColumnFilterType.SINGLE_SELECT,
          options: [
            { label: "Option 1", value: "option1" },
            { label: "Option 2", value: "option2" },
          ],
        }),
        JSON.stringify({
          id: "another-column",
          title: "Another Column",
          icon: "calendar",
          type: ColumnFilterType.DATE_RANGE,
        }),
      ],
      label: "Column Configuration",
    },
  });

  const column = JSON.parse(state.column.value);

  return <MockFilterPopover column={column} />;
}