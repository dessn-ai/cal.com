import React from 'react';
import { useParentState } from '../useIframeState';
import { DataTableToolbar } from '../../../../packages/features/data-table/components/DataTableToolbar';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "custom-class",
      label: "Class Name",
    },
  });

  return (
    <div className={state.className.value}>
      {/* Render a simplified version of the toolbar */}
      <div className="flex items-center justify-between">
        <div className="flex flex-1 items-center space-x-2">
          <input
            type="text"
            placeholder="Search..."
            className="h-8 w-[150px] lg:w-[250px] rounded-md border border-input px-3"
          />
        </div>
        <div className="flex items-center space-x-2">
          <button
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-3 py-1 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground"
          >
            Clear filters
          </button>
          <button
            className="inline-flex items-center justify-center rounded-md bg-primary px-3 py-1 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90"
          >
            Action
          </button>
        </div>
      </div>
    </div>
  );
}