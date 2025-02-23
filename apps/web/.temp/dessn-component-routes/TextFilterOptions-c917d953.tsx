import React from 'react';
import { useParentState } from '../useIframeState';
import { ColumnFilterType } from '../../../../packages/features/data-table/lib/types';

// Mock TextFilterOptions component
const MockTextFilterOptions = ({ column }: { column: { id: string; title: string; type: ColumnFilterType } }) => {
  return (
    <div className="flex flex-col gap-2">
      <input
        type="text"
        placeholder={`Filter by ${column.title}`}
        className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
        onChange={(e) => {
          console.log('Filter value changed:', e.target.value);
        }}
      />
      <div className="flex justify-end">
        <button
          className="text-sm text-gray-500 hover:text-gray-700"
          onClick={() => {
            console.log('Clear filter');
          }}
        >
          Clear
        </button>
      </div>
    </div>
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

  return <MockTextFilterOptions column={column} />;
}