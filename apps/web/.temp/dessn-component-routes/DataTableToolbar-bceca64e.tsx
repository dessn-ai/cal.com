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

  const mockTable = {
    getState: () => ({
      columnFilters: [],
      globalFilter: '',
    }),
    setColumnFilters: () => {},
    setGlobalFilter: () => {},
    getColumn: (key: string) => ({
      getFilterValue: () => "",
      setFilterValue: () => {},
      columnDef: { cell: () => null },
      id: key,
    }),
    resetColumnFilters: () => {},
    options: {
      state: {
        columnFilters: [],
        globalFilter: '',
      }
    }
  };

  return (
    <div className="p-4">
      <DataTableToolbar.Root className={state.className.value}>
        <DataTableToolbar.SearchBar 
          table={mockTable} 
          searchKey="name" 
          onSearch={(value) => console.log('Search:', value)} 
        />
        <DataTableToolbar.CTA>Action</DataTableToolbar.CTA>
      </DataTableToolbar.Root>
    </div>
  );
}