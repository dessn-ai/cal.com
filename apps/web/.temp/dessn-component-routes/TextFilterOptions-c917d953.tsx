import React from 'react';
import { useParentState } from '../useIframeState';
import { TextFilterOptions } from '../../../../packages/features/data-table/components/filters/TextFilterOptions';

import { ColumnFilterType } from '../../../../packages/features/data-table/lib/types';

export default function ComponentPreview() {
  const [state] = useParentState({
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
  });

  const column = {
    id: state.columnId.value,
    title: state.columnTitle.value,
    type: ColumnFilterType.TEXT,
  };

  return (
    <TextFilterOptions column={column} />
  );
}