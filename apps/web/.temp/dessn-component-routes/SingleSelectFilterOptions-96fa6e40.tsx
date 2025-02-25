import React, { useState } from 'react';
import { useParentState } from '../useIframeState';
import { ColumnFilterType } from '../../../../packages/features/data-table/lib/types';

// Simplified version of SingleSelectFilterOptions
function SimplifiedSelectFilter({ column }: { column: any }) {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  return (
    <div className="rounded-md border p-4">
      <div className="mb-4">
        <input 
          type="text" 
          placeholder="Search..."
          className="w-full rounded-md border p-2"
        />
      </div>
      <div className="space-y-2">
        {column.options.map((option: any) => {
          const optionValue = option.value;
          const optionLabel = option.label;
          
          return (
            <div 
              key={optionValue}
              className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 p-2 rounded"
              onClick={() => setSelectedValue(optionValue)}
            >
              <div className={`w-4 h-4 border rounded-sm flex items-center justify-center ${selectedValue === optionValue ? 'bg-blue-500 border-blue-500' : 'border-gray-300'}`}>
                {selectedValue === optionValue && (
                  <svg className="w-3 h-3 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                )}
              </div>
              <span>{optionLabel}</span>
            </div>
          );
        })}
      </div>
      <div className="mt-4 border-t pt-4">
        <button
          onClick={() => setSelectedValue(null)}
          className="w-full rounded-md bg-gray-100 px-4 py-2 text-sm hover:bg-gray-200"
        >
          Clear
        </button>
      </div>
    </div>
  );
}

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
    <div className="p-4">
      <SimplifiedSelectFilter column={column} />
    </div>
  );
}