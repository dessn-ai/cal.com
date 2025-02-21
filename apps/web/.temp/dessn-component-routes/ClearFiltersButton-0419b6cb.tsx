import React from 'react';
import { useParentState } from '../useIframeState';
import { ClearFiltersButton } from '../../../../packages/features/data-table/components/filters/ClearFiltersButton';

import { DataTableProvider } from '@calcom/features/data-table';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    exclude: {
      type: "string",
      value: "filter1,filter2",
      label: "Exclude Filters",
    },
  });

  const excludeArray = state.exclude.value ? state.exclude.value.split(',') : undefined;

  return (
    <DataTableProvider
      data={[]}
      columns={[]}
      initialState={{}}
      meta={{}}
    >
      <ClearFiltersButton exclude={excludeArray} />
    </DataTableProvider>
  );
}