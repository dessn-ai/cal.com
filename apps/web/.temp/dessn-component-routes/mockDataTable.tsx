import { createContext, useContext } from 'react';

const DataTableContext = createContext<any>(null);

export const useDataTable = () => {
  const context = useContext(DataTableContext);
  if (!context) {
    throw new Error('useDataTable must be used within a DataTableProvider');
  }
  return context;
};

export const useFilterValue = () => {
  const { filterValue = "", setFilterValue = () => {} } = useDataTable();
  return [filterValue, setFilterValue];
};

export const DataTableProvider = ({ children, value }: { children: React.ReactNode; value: any }) => {
  return (
    <DataTableContext.Provider value={value}>
      {children}
    </DataTableContext.Provider>
  );
};