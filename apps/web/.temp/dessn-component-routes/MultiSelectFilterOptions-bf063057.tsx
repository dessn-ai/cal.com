import React from 'react';
import { useParentState } from '../useIframeState';
import { ColumnFilterType } from '../../../../packages/features/data-table/lib/types';

// Create a mock version of MultiSelectFilterOptions that doesn't depend on the context
const MockMultiSelectFilterOptions = ({ column }) => {
  const [selectedValues, setSelectedValues] = React.useState([]);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-1">
        {column.options.map((option) => (
          <label key={option.value} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={selectedValues.includes(option.value)}
              onChange={(e) => {
                if (e.target.checked) {
                  setSelectedValues([...selectedValues, option.value]);
                } else {
                  setSelectedValues(selectedValues.filter(v => v !== option.value));
                }
              }}
            />
            {option.label}
          </label>
        ))}
      </div>
    </div>
  );
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    column: {
      type: "dropdown",
      value: "multi_select",
      options: ["multi_select"],
      label: "Column Type",
    },
    columnId: {
      type: "string",
      value: "example_column",
      label: "Column ID",
    },
    columnTitle: {
      type: "string",
      value: "Example Column",
      label: "Column Title",
    },
    columnIcon: {
      type: "dropdown",
      value: "filter",
      options: ["filter", "search", "calendar", "user", "settings"],
      label: "Column Icon",
    },
  });

  const column = {
    id: state.columnId.value,
    title: state.columnTitle.value,
    icon: state.columnIcon.value,
    type: ColumnFilterType.MULTI_SELECT,
    options: [
      { label: "Option 1", value: "option1" },
      { label: "Option 2", value: "option2" },
      { label: "Option 3", value: "option3" },
    ],
  };

  return <MockMultiSelectFilterOptions column={column} />;
}