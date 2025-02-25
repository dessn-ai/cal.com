import { useDataTable } from './useDataTable';

export const useFilterValue = () => {
  const { filterValue, setFilterValue } = useDataTable();
  return [filterValue, setFilterValue] as const;
};