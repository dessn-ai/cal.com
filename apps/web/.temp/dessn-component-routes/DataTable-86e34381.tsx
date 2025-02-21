import React from 'react';
import { useParentState } from '../useIframeState';
import { DataTable } from '../../../../packages/features/data-table/components/DataTable';
import { createColumnHelper, getCoreRowModel, useReactTable } from '@tanstack/react-table';

// Sample data type
type Person = {
  firstName: string;
  lastName: string;
  age: number;
};

// Sample data
const defaultData: Person[] = [
  {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
  },
  {
    firstName: 'Jane',
    lastName: 'Smith',
    age: 25,
  },
];

export default function ComponentPreview() {
  const columnHelper = createColumnHelper<Person>();
  
  const columns = [
    columnHelper.accessor('firstName', {
      header: 'First Name',
      cell: info => info.getValue(),
    }),
    columnHelper.accessor('lastName', {
      header: 'Last Name',
      cell: info => info.getValue(),
    }),
    columnHelper.accessor('age', {
      header: 'Age',
      cell: info => info.getValue(),
    }),
  ];

  const table = useReactTable({
    data: defaultData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const tableContainerRef = React.useRef<HTMLDivElement>(null);

  const [state, setState] = useParentState({
    isPending: {
      type: "boolean",
      value: false,
      label: "Is Pending",
    },
    variant: {
      type: "dropdown",
      value: "default",
      options: ["default", "compact"],
      label: "Variant",
    },
    hideHeader: {
      type: "boolean",
      value: false,
      label: "Hide Header",
    },
    enableColumnResizing: {
      type: "boolean",
      value: false,
      label: "Enable Column Resizing",
    },
  });

  return (
    <DataTable
      table={table}
      tableContainerRef={tableContainerRef}
      isPending={state.isPending.value}
      variant={state.variant.value}
      hideHeader={state.hideHeader.value}
      enableColumnResizing={state.enableColumnResizing.value}
    />
  );
}