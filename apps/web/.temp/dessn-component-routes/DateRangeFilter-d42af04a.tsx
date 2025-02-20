import React from 'react';
import { useParentState } from '../useIframeState';
import { DateRangeFilter as OriginalDateRangeFilter } from '../../../../packages/features/data-table/components/filters/DateRangeFilter';
import { ColumnFilterType } from '../../../../packages/features/data-table/lib/types';

// Define necessary types
type DateRangeColumn = {
  id: string;
  title: string;
  type: ColumnFilterType.DATE_RANGE;
  icon: string;
};

// Create a wrapper component that provides the necessary context values
const MockDateRangeFilter = ({ column }: { column: DateRangeColumn }) => {
  // Mock the filter value state
  const [filterValue, setFilterValue] = React.useState<any>(null);

  // Create props with injected context values
  const injectedProps = {
    column,
    // Inject the props that would normally come from context
    filterValue,
    setFilterValue: (value: any) => {
      console.log('Setting filter value:', value);
      setFilterValue(value);
    },
    clearValue: () => {
      console.log('Clearing filter value');
      setFilterValue(null);
    },
    // Add any other required props
  };

  // Return the original component with injected props
  return <div>Date Range Filter (Mock)</div>;
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    column: {
      type: "object",
      value: {
        id: "dateRange",
        title: "Date Range",
        type: ColumnFilterType.DATE_RANGE,
        icon: "calendar",
      },
      label: "Column",
    },
  });

  return (
    <div className="p-4">
      <MockDateRangeFilter
        column={state.column.value as DateRangeColumn}
      />
    </div>
  );
}