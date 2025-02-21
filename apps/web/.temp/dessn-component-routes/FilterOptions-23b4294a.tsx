import React from 'react';
import { useParentState } from '../useIframeState';
import { FilterOptions } from '../../../../packages/features/data-table/components/filters/FilterOptions';

import { ColumnFilterType } from '../../../../packages/features/data-table/lib/types';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    columnType: {
      type: "dropdown",
      value: "TEXT",
      options: ["TEXT", "MULTI_SELECT", "SINGLE_SELECT", "NUMBER", "DATE_RANGE"],
      label: "Column Type",
    },
  });

  const getColumnData = () => {
    const baseColumn = {
      id: "example-column",
      title: "Example Column",
      icon: "filter",
    };

    switch (state.columnType.value) {
      case "MULTI_SELECT":
      case "SINGLE_SELECT":
        return {
          ...baseColumn,
          type: state.columnType.value === "MULTI_SELECT" ? ColumnFilterType.MULTI_SELECT : ColumnFilterType.SINGLE_SELECT,
          options: [
            { label: "Option 1", value: "1" },
            { label: "Option 2", value: "2" },
            { label: "Option 3", value: "3" },
          ],
        };
      case "NUMBER":
        return {
          ...baseColumn,
          type: ColumnFilterType.NUMBER,
        };
      case "DATE_RANGE":
        return {
          ...baseColumn,
          type: ColumnFilterType.DATE_RANGE,
        };
      case "TEXT":
      default:
        return {
          ...baseColumn,
          type: ColumnFilterType.TEXT,
        };
    }
  };

  return <FilterOptions column={getColumnData()} />;
}