import React, { Suspense, createContext, useContext } from 'react';
import { useParentState } from '../useIframeState';
import { AverageEventDurationChart } from '../../../../packages/features/insights/components/AverageEventDurationChart';
import { InsightsOrgTeamsProvider } from '@calcom/features/insights/context/InsightsOrgTeamsProvider';

// Create a mock DataTable context
const DataTableContext = createContext({
  filterValue: '',
  setFilterValue: () => {},
  selectedRows: new Set(),
  setSelectedRows: () => {},
  currentPage: 1,
  pageSize: 10,
  setPageSize: () => {},
  sorting: [],
  setSorting: () => {},
  tableContainerRef: { current: null },
});

const DataTableProvider = ({ children, value }) => {
  return (
    <DataTableContext.Provider value={value}>
      {children}
    </DataTableContext.Provider>
  );
};

// Simple error boundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong. Please check the console for details.</div>;
    }

    return this.props.children;
  }
}

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    // No props to set for this component
  });

  const mockTeamsData = {
    teams: [
      {
        id: 1,
        name: 'Default Team',
        slug: 'default-team',
      }
    ],
    currentTeam: {
      id: 1,
      name: 'Default Team',
      slug: 'default-team',
    },
    setCurrentTeam: () => {},
  };

  const mockDataTableData = {
    filterValue: '',
    setFilterValue: () => {},
    selectedRows: new Set(),
    setSelectedRows: () => {},
    currentPage: 1,
    pageSize: 10,
    setPageSize: () => {},
    sorting: [],
    setSorting: () => {},
    tableContainerRef: { current: null },
  };

  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <DataTableProvider value={mockDataTableData}>
          <InsightsOrgTeamsProvider value={mockTeamsData}>
            <AverageEventDurationChart />
          </InsightsOrgTeamsProvider>
        </DataTableProvider>
      </Suspense>
    </ErrorBoundary>
  );
}