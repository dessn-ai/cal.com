import React, { useState } from 'react';
import { useParentState } from '../useIframeState';
import { ColumnFilterType } from '../../../../packages/features/data-table/lib/types';

// Create a simplified version of SingleSelectFilterOptions
const SimplifiedSingleSelectFilterOptions = ({ column }) => {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleOptionSelect = (value) => {
    setSelectedValue(value);
  };

  return (
    <div className="flex flex-col space-y-2 p-2">
      {column.options.map((option) => (
        <button
          key={option.value}
          className={`px-3 py-2 text-sm rounded ${
            selectedValue === option.value 
              ? 'bg-gray-200 text-gray-900' 
              : 'hover:bg-gray-100'
          }`}
          onClick={() => handleOptionSelect(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
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

  return <SimplifiedSingleSelectFilterOptions column={column} />;
}