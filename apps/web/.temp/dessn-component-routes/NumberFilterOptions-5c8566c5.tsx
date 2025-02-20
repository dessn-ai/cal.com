import React from 'react';
import { useParentState } from '../useIframeState';
import { ColumnFilterType } from '../../../../packages/features/data-table/lib/types';

// Create mock implementations of the components and hooks
const MockNumberFilterOptions = ({ column }) => {
  return (
    <div className="mx-3 my-2">
      <div>
        <div className="-mt-2 flex items-center gap-2">
          <select className="basis-1/3">
            <option value="equals">Equals</option>
            <option value="greater_than">Greater than</option>
            <option value="less_than">Less than</option>
          </select>
          <input type="number" className="mt-2 basis-2/3" />
        </div>
        <div className="bg-subtle -mx-3 mb-2 h-px" role="separator" />
        <div className="flex items-center justify-between">
          <button type="button">Clear</button>
          <button type="submit">Apply</button>
        </div>
      </div>
    </div>
  );
};

// Override the import of NumberFilterOptions with our mock version
const NumberFilterOptions = MockNumberFilterOptions;

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
    <div className="p-4">
      <NumberFilterOptions column={column} />
    </div>
  );
}