import React from 'react';
import { useParentState } from '../useIframeState';
import { DateRangeFilter } from '../../../../packages/features/data-table/components/filters/DateRangeFilter';

import { ColumnFilterType } from '../../../../packages/features/data-table/lib/types';

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
    <DateRangeFilter
      column={state.column.value as Extract<FilterableColumn, { type: ColumnFilterType.DATE_RANGE }>}
    />
  );
}