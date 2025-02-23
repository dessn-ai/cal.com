import React, { useRef } from 'react';
import { useParentState } from '../useIframeState';
import { DataTable } from '../../../../packages/features/data-table/components/DataTable';
import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

// Define a simple data type for the table
type Person = {
  firstName: string;
  lastName: string;
  age: number;
};

export default function ComponentPreview() {
  const tableContainerRef = useRef<HTMLDivElement>(null);
  
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

  // Create sample data
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