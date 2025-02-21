import React from 'react';
import { useParentState } from '../useIframeState';
import { FilterPopover } from '../../../../packages/features/data-table/components/filters/FilterPopover';

import { ColumnFilterType } from '../../../../packages/features/data-table/lib/types';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    column: {
      type: "dropdown",
      value: JSON.stringify({
        id: "example-column",
        title: "Example Column",
        icon: "filter",
        type: ColumnFilterType.SINGLE_SELECT,
        options: [
          { label: "Option 1", value: "option1" },
          { label: "Option 2", value: "option2" },
        ],
      }),
      options: [
        JSON.stringify({
          id: "example-column",
          title: "Example Column",
          icon: "filter",
          type: ColumnFilterType.SINGLE_SELECT,
          options: [
            { label: "Option 1", value: "option1" },
            { label: "Option 2", value: "option2" },
          ],
        }),
        JSON.stringify({
          id: "another-column",
          title: "Another Column",
          icon: "calendar",
          type: ColumnFilterType.DATE_RANGE,
        }),
      ],
      label: "Column Configuration",
    },
  });

  const column = JSON.parse(state.column.value);

  return <FilterPopover column={column} />;
}