import React, { Suspense } from 'react';
import { useParentState } from '../useIframeState';
import { DataTableProvider } from '@calcom/features/data-table';
import { ClearFiltersButton } from '@calcom/features/data-table/components/filters/ClearFiltersButton';

const ClearFiltersButtonWrapper = ({ exclude }: { exclude?: string[] }) => {
  try {
    return <ClearFiltersButton exclude={exclude} />;
  } catch (error) {
    console.error('Error rendering ClearFiltersButton:', error);
    return (
      <button 
        type="button" 
        className="btn-secondary btn"
        onClick={() => {}}
      >
        Clear Filters
      </button>
    );
  }
};

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
    <Suspense fallback={<div>Loading...</div>}>
      <DataTableProvider
        data={[]}
        columns={[]}
        initialState={{}}
        meta={{}}
      >
        <ClearFiltersButtonWrapper exclude={excludeArray} />
      </DataTableProvider>
    </Suspense>
  );
}