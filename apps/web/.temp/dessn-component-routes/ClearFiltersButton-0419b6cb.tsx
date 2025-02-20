import React from 'react';
import { useParentState } from '../useIframeState';
import { DataTableProvider } from '@calcom/features/data-table';

// Import ClearFiltersButton after other imports
import { ClearFiltersButton } from '@calcom/features/data-table/components/filters/ClearFiltersButton';

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
      initialState={{
        columnFilters: [],
        sorting: [],
      }}
      meta={{
        skipFetchCount: true,
      }}
    >
      <ClearFiltersButton exclude={excludeArray} />
    </DataTableProvider>
  );
}