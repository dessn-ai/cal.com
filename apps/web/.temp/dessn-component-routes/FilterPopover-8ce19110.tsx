import React from 'react';
import { useParentState } from '../useIframeState';
import { ColumnFilterType } from '../../../../packages/features/data-table/lib/types';

// Mock FilterPopover component that mimics the original's appearance
const MockFilterPopover = ({ column }) => {
  return (
    <div className="relative inline-block">
      <button
        type="button"
        className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <span>{column.title}</span>
        {column.icon && (
          <span className="ml-2">
            <i className={`icon-${column.icon}`}></i>
          </span>
        )}
        <span className="ml-2">▼</span>
      </button>
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