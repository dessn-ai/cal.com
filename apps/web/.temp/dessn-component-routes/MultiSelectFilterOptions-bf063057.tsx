import React from 'react';
import { useParentState } from '../useIframeState';
import { MultiSelectFilterOptions } from '../../../../packages/features/data-table/components/filters/MultiSelectFilterOptions';

import { ColumnFilterType } from '../../../../packages/features/data-table/lib/types';

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

  return <MultiSelectFilterOptions column={column} />;
}