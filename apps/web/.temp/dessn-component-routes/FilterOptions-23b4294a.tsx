import React, { useState } from 'react';
import { useParentState } from '../useIframeState';
import { FilterOptions } from '../../../../packages/features/data-table/components/filters/FilterOptions';
import { ColumnFilterType } from '../../../../packages/features/data-table/lib/types';

// Create a HOC that provides the mocked hooks
const withDataTableHooks = (WrappedComponent: any) => {
  return function WithDataTableHooks(props: any) {
    const [filters, setFilters] = useState<Array<{ f: string; v: any }>>([]);

    // Mock the hooks directly in the component's scope
    const mockHooks = {
      useDataTable: () => ({
        activeFilters: filters,
        updateFilter: (columnId: string, value: any) => {
          setFilters(prev => {
            const existing = prev.findIndex(f => f.f === columnId);
            if (existing !== -1) {
              const newFilters = [...prev];
              newFilters[existing] = { f: columnId, v: value };
              return newFilters;
            }
            return [...prev, { f: columnId, v: value }];
          });
        },
        removeFilter: (columnId: string) => {
          setFilters(prev => prev.filter(f => f.f !== columnId));
        },
        table: {
          getColumn: () => ({
            getFilterValue: () => undefined,
            setFilterValue: () => {},
          }),
          getState: () => ({
            columnFilters: filters,
          }),
        }
      }),
      useFilterValue: (columnId: string) => {
        const filter = filters.find(f => f.f === columnId);
        return filter ? filter.v : undefined;
      }
    };

    // Override the hooks in the module
    const originalUseDataTable = require('../../../../packages/features/data-table/hooks/useDataTable').useDataTable;
    const originalUseFilterValue = require('../../../../packages/features/data-table/hooks/useFilterValue').useFilterValue;

    try {
      require('../../../../packages/features/data-table/hooks/useDataTable').useDataTable = mockHooks.useDataTable;
      require('../../../../packages/features/data-table/hooks/useFilterValue').useFilterValue = mockHooks.useFilterValue;

      return <WrappedComponent {...props} />;
    } finally {
      // Restore original hooks
      require('../../../../packages/features/data-table/hooks/useDataTable').useDataTable = originalUseDataTable;
      require('../../../../packages/features/data-table/hooks/useFilterValue').useFilterValue = originalUseFilterValue;
    }
  };
};

// Wrap FilterOptions with the HOC
const FilterOptionsWithHooks = withDataTableHooks(FilterOptions);

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

  return <FilterOptionsWithHooks column={getColumnData()} />;
}