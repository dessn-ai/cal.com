import React, { createContext, useContext } from 'react';
import { useParentState } from '../useIframeState';
import { InsightsOrgTeamsProvider } from '../../../../packages/features/insights/context/InsightsOrgTeamsProvider';
import { useForm } from 'react-hook-form';

// Create DataTable context
const DataTableContext = createContext<any>(null);

// Create the DataTable provider component
const DataTableProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const value = {
    data: [],
    setData: () => {},
    loading: false,
    setLoading: () => {},
    filter: {},
    setFilter: () => {},
    selectedRows: new Set(),
    setSelectedRows: () => {},
    page: 1,
    setPage: () => {},
    pageSize: 10,
    setPageSize: () => {},
    sortBy: "",
    setSortBy: () => {},
    sortOrder: "asc",
    setSortOrder: () => {},
    total: 0,
    columns: [],
    setColumns: () => {},
  };

  return (
    <DataTableContext.Provider value={value}>
      {children}
    </DataTableContext.Provider>
  );
};

// Create a hook that matches the original
const useDataTable = () => {
  const context = useContext(DataTableContext);
  if (!context) {
    throw new Error('useDataTable must be used within a DataTableProvider');
  }
  return context;
};

// Override the module's exports
if (typeof window !== 'undefined') {
  // @ts-ignore
  window.__dataTable = { useDataTable };
  
  // Override the module's exports
  const originalRequire = window.require;
  // @ts-ignore
  window.require = function(path: string) {
    if (path.includes('data-table/hooks/useDataTable')) {
      return { useDataTable };
    }
    return originalRequire?.(path);
  };
}

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    userId: {
      type: "number",
      value: 1,
      label: "User ID",
    },
    teamId: {
      type: "number",
      value: 1,
      label: "Team ID",
    },
    startDate: {
      type: "string",
      value: new Date().toISOString().split('T')[0],
      label: "Start Date",
    },
    endDate: {
      type: "string",
      value: new Date().toISOString().split('T')[0],
      label: "End Date",
    },
    isAll: {
      type: "boolean",
      value: false,
      label: "Is All",
    },
    routingFormId: {
      type: "string",
      value: "form-123",
      label: "Routing Form ID",
    },
  });

  const methods = useForm();

  // Mock data for the InsightsOrgTeamsProvider
  const mockTeamsData = {
    teams: [
      {
        id: 1,
        name: "Team 1",
        slug: "team-1",
        membership: {
          accepted: true,
          role: "ADMIN",
        },
      }
    ],
    currentTeamId: 1,
    currentTeam: {
      id: 1,
      name: "Team 1",
      slug: "team-1",
      membership: {
        accepted: true,
        role: "ADMIN",
      },
    },
    loading: false,
    error: null,
    isLoading: false,
    isPending: false,
    isError: false,
    status: "success",
    data: {
      teams: [
        {
          id: 1,
          name: "Team 1",
          slug: "team-1",
          membership: {
            accepted: true,
            role: "ADMIN",
          },
        }
      ]
    }
  };

  try {
    return (
      <DataTableProvider>
        <InsightsOrgTeamsProvider defaultValue={mockTeamsData}>
          <RoutedToPerPeriod />
        </InsightsOrgTeamsProvider>
      </DataTableProvider>
    );
  } catch (error) {
    console.error('Error rendering RoutedToPerPeriod:', error);
    return <div>Error rendering component: {error.message}</div>;
  }
}