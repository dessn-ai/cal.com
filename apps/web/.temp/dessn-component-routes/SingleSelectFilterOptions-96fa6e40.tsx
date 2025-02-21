import React from 'react';
import { useParentState } from '../useIframeState';
import { SingleSelectFilterOptions } from '../../../../packages/features/data-table/components/filters/SingleSelectFilterOptions';

import { ColumnFilterType } from '../../../../packages/features/data-table/lib/types';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    columnId: {
      type: "string",
      value: "exampleColumn",
      label: "Column ID",
    },
    columnTitle: {
      type: "string",
      value: "Example Column",
      label: "Column Title",
    },
    columnIcon: {
      type: "dropdown",
      value: "user",
      options: ["user", "calendar", "settings", "star"],
      label: "Column Icon",
    },
  });

  const column = {
    id: state.columnId.value,
    title: state.columnTitle.value,
    icon: state.columnIcon.value,
    type: ColumnFilterType.SINGLE_SELECT,
    options: [
      { label: "Option 1", value: "option1" },
      { label: "Option 2", value: "option2" },
      { label: "Option 3", value: "option3" },
    ],
  };

  return <SingleSelectFilterOptions column={column} />;
}