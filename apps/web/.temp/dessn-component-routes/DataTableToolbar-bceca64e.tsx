import React from 'react';
import { useParentState } from '../useIframeState';
import { DataTableToolbar } from '../../../../packages/features/data-table/components/DataTableToolbar';


export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "custom-class",
      label: "Class Name",
    },
  });

  // Mock table object
  const mockTable = {
    getColumn: () => ({
      getFilterValue: () => "",
      setFilterValue: () => {},
    }),
    resetColumnFilters: () => {},
  };

  return (
    <DataTableToolbar.Root className={state.className.value}>
      <DataTableToolbar.SearchBar table={mockTable} searchKey="name" />
      <DataTableToolbar.ClearFiltersButton table={mockTable} />
      <DataTableToolbar.CTA>Action</DataTableToolbar.CTA>
    </DataTableToolbar.Root>
  );
}