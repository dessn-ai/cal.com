import React, { createContext, useContext, useMemo } from 'react';
import { useParentState } from '../useIframeState';
import { BookingStatusLineChart } from '../../../../packages/features/insights/components/BookingStatusLineChart';
import { trpc } from '@calcom/trpc';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { InsightsOrgTeamsProvider } from '@calcom/features/insights/context/InsightsOrgTeamsProvider';

// Create a mock context for filter values
const FilterValueContext = createContext({
  dateRange: { start: new Date(), end: new Date() },
  teamId: null,
  userId: null
});

// Create a custom hook for filter values
const useFilterValueWrapper = (filterId) => {
  const filterValues = useContext(FilterValueContext);
  return filterValues[filterId] || null;
};

// Create a provider component for filter values
const FilterValueProvider = ({ children }) => {
  const filterValues = useMemo(() => ({
    dateRange: { start: new Date(), end: new Date() },
    teamId: null,
    userId: null
  }), []);

  return (
    <FilterValueContext.Provider value={filterValues}>
      {children}
    </FilterValueContext.Provider>
  );
};

// Create a provider that provides the exact structure the component expects
const MockDataTableProvider = ({ children }) => {
  const defaultDateRange = {
    start: new Date(),
    end: new Date()
  };

  const contextValue = {
    filters: [
      {
        id: 'dateRange',
        isActive: true,
        label: 'Date Range',
        value: defaultDateRange,
        variant: 'date-range',
      },
      {
        id: 'teamId',
        isActive: true,
        label: 'Team',
        value: null,
        variant: 'select',
      },
      {
        id: 'userId',
        isActive: true,
        label: 'User',
        value: null,
        variant: 'select',
      }
    ],
    setFilters: () => {},
    filterValue: {
      dateRange: defaultDateRange,
      teamId: null,
      userId: null,
    },
    setFilterValue: () => {},
    selectedIds: new Set(),
    setSelectedIds: () => {},
    currentPage: 1,
    setCurrentPage: () => {},
    pageSize: 10,
    setPageSize: () => {},
    sortBy: [],
    setSortBy: () => {},
    tableState: {
      pagination: {
        pageIndex: 0,
        pageSize: 10
      },
      sorting: []
    }
  };

  return (
    <FilterValueContext.Provider value={contextValue.filterValue}>
      {children}
    </FilterValueContext.Provider>
  );
};

// Create a wrapper component that provides both context and error handling
const BookingStatusLineChartWrapper = () => {
  try {
    return (
      <MockDataTableProvider>
        <BookingStatusLineChart useFilterValue={useFilterValueWrapper} />
      </MockDataTableProvider>
    );
  } catch (error) {
    console.error('Error rendering BookingStatusLineChart:', error);
    return <div>Error loading chart</div>;
  }
};

export default function ComponentPreview() {
  const [state, setState] = useParentState({});

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
        cacheTime: 0,
      },
    },
  });

  // Mock data for InsightsOrgTeamsProvider
  const mockTeamsData = {
    teams: [],
    currentTeam: null,
    setCurrentTeam: () => {},
    loading: false,
  };

  return (
    <QueryClientProvider client={queryClient}>
      <InsightsOrgTeamsProvider value={mockTeamsData}>
        <BookingStatusLineChartWrapper />
      </InsightsOrgTeamsProvider>
    </QueryClientProvider>
  );
}