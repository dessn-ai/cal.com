import React from 'react';
import { useParentState } from '../useIframeState';
import { NumberFilterOptions } from '../../../../packages/features/data-table/components/filters/NumberFilterOptions';

import { ColumnFilterType } from '../../../../packages/features/data-table/lib/types';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    columnId: {
      type: "string",
      value: "numberColumn",
      label: "Column ID",
    },
    columnTitle: {
      type: "string",
      value: "Number Column",
      label: "Column Title",
    },
  });

  const column = {
    id: state.columnId.value,
    title: state.columnTitle.value,
    type: ColumnFilterType.NUMBER,
  };

  return (
    <NumberFilterOptions column={column} />
  );
}