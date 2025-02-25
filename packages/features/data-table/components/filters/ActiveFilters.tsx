"use client";

import { type Table } from "@tanstack/react-table";
import { Fragment } from "react";

import { useDataTable, useFilterableColumns } from "../../hooks";
import { FilterPopover } from "./FilterPopover";

interface ActiveFiltersProps<TData> {
  table: Table<TData>;
}

export function ActiveFilters<TData>({ table }: ActiveFiltersProps<TData>) {
  const dataTable = useDataTable();
  const filterableColumns = useFilterableColumns(table);
  
  // Add safety check
  if (!dataTable || !dataTable.activeFilters) {
    return null;
  }

  return (
    <>
      {(dataTable.activeFilters || []).map((filter) => {
        const column = filterableColumns.find((col) => col.id === filter.f);
        if (!column) return null;
        return <FilterPopover key={column.id} column={column} />;
      })}
    </>
  );
}