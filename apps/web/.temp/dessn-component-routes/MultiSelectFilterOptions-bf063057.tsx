import React from 'react';
import { useParentState } from '../useIframeState';
import { MultiSelectFilterOptions } from '../../../../packages/features/data-table/components/filters/MultiSelectFilterOptions';
import { ColumnFilterType } from '../../../../packages/features/data-table/lib/types';

// Mock both hooks with the minimum required functionality
const mockFilterValue = [];

// Override both hooks at the module level before any imports
Object.defineProperty(window, 'useFilterValue', {
  value: () => ({
    value: mockFilterValue,
    setValue: () => {},
    removeValue: () => {},
    addValue: () => {},
  }),
  writable: true,
});

Object.defineProperty(window, 'useDataTable', {
  value: () => ({
    table: {
      getState: () => ({
        columnFilters: [{ id: 'example_column', value: [] }]
      }),
      setColumnFilters: () => {},
    },
    activeFilters: [{ f: 'example_column', v: [] }],
    setFilterValue: () => {},
    getFilterValue: () => mockFilterValue,
  }),
  writable: true,
});

// Create a wrapper component that provides the mocked hooks
function MockedMultiSelectFilterOptions(props: any) {
  try {
    return <MultiSelectFilterOptions {...props} />;
  } catch (error) {
    console.error('Error in MultiSelectFilterOptions:', error);
    return (
      <div className="p-4 border border-red-500 rounded">
        <p className="text-red-500">Failed to render MultiSelectFilterOptions</p>
        <pre className="mt-2 text-sm">
          {error instanceof Error ? error.message : 'Unknown error'}
        </pre>
      </div>
    );
  }
}

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

  return (
    <div className="p-4">
      <MockedMultiSelectFilterOptions column={column} />
    </div>
  );
}

// Ensure the mocks are applied
if (typeof window !== 'undefined') {
  // Force the hooks to be available in the module scope
  (window as any).__forceMocks = () => {
    window.useFilterValue = () => ({
      value: mockFilterValue,
      setValue: () => {},
      removeValue: () => {},
      addValue: () => {},
    });
    window.useDataTable = () => ({
      table: {
        getState: () => ({
          columnFilters: [{ id: 'example_column', value: [] }]
        }),
        setColumnFilters: () => {},
      },
      activeFilters: [{ f: 'example_column', v: [] }],
      setFilterValue: () => {},
      getFilterValue: () => mockFilterValue,
    });
  };
  (window as any).__forceMocks();
}