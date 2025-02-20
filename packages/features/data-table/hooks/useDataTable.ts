export const useDataTable = () => ({
  data: [],
  columns: [],
  filterableColumns: [],
  searchableColumns: [],
  meta: {},
  setFilterValue: () => {},
  getFilterValue: () => undefined,
  selectedRows: new Set(),
  setSelectedRows: () => {},
  table: {
    getState: () => ({
      columnFilters: [],
    }),
    setColumnFilters: () => {},
  },
});