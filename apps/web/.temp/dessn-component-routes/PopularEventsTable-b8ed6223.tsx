import React from 'react';
import { useParentState } from '../useIframeState';
import { PopularEventsTable } from '../../../../packages/features/insights/components/PopularEventsTable';

// Create a more complete mock InsightsContext with proper typing
export const InsightsContext = React.createContext({
  filter: {
    startDate: '',
    endDate: '',
    teamId: null,
    userId: null,
    memberUserId: null,
    eventTypeId: null,
    isAll: false,
  },
  setFilter: () => {},
  loading: false,
  setLoading: () => {},
  data: {
    popularEvents: [],
    totalBookings: 0,
    totalUsers: 0,
    feedbackAvgRating: 0,
  },
  setData: () => {},
});

// Export the useInsights hook that components might use
export const useInsights = () => {
  const context = React.useContext(InsightsContext);
  if (!context) {
    throw new Error('useInsights must be used within an InsightsProvider');
  }
  return context;
};

const MockTRPCProvider = ({ children }) => {
  const mockTrpcClient = {
    insights: {
      popularEventTypes: {
        useQuery: () => ({
          data: [],
          isLoading: false,
          error: null,
          refetch: () => Promise.resolve({ data: [] })
        })
      },
      feedbackAvgRating: {
        useQuery: () => ({
          data: { rating: 0 },
          isLoading: false
        })
      }
    }
  };

  // Create a mock TRPC context
  const trpcContext = React.useMemo(() => ({
    client: mockTrpcClient,
    isLoading: false,
    error: null
  }), []);

  return (
    <div data-testid="mock-trpc-provider">
      {children}
    </div>
  );
};

const MockInsightsProvider = ({ children }) => {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState({
    popularEvents: [],
    totalBookings: 0,
    totalUsers: 0,
    feedbackAvgRating: 0,
  });
  const [filter, setFilter] = React.useState({
    startDate: new Date().toISOString().split('T')[0],
    endDate: new Date(new Date().setMonth(new Date().getMonth() + 1)).toISOString().split('T')[0],
    teamId: 1,
    userId: 1,
    memberUserId: 1,
    eventTypeId: 1,
    isAll: false,
  });

  const contextValue = React.useMemo(() => ({
    filter,
    setFilter,
    loading,
    setLoading,
    data,
    setData,
  }), [filter, loading, data]);

  return (
    <InsightsContext.Provider value={contextValue}>
      {children}
    </InsightsContext.Provider>
  );
};

// Mock i18n context if needed
const I18nContext = React.createContext({
  t: (key: string) => key,
  i18n: {
    language: 'en',
    changeLanguage: () => Promise.resolve(),
  },
});

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    startDate: {
      type: "string",
      value: new Date().toISOString().split('T')[0],
      label: "Start Date",
    },
    endDate: {
      type: "string",
      value: new Date(new Date().setMonth(new Date().getMonth() + 1)).toISOString().split('T')[0],
      label: "End Date",
    },
    teamId: {
      type: "number",
      value: 1,
      label: "Team ID",
    },
    userId: {
      type: "number",
      value: 1,
      label: "User ID",
    },
    memberUserId: {
      type: "number",
      value: 1,
      label: "Member User ID",
    },
    eventTypeId: {
      type: "number",
      value: 1,
      label: "Event Type ID",
    },
    isAll: {
      type: "boolean",
      value: false,
      label: "Is All",
    },
  });

  return (
    <I18nContext.Provider value={{ t: (key: string) => key, i18n: { language: 'en', changeLanguage: () => Promise.resolve() } }}>
      <MockTRPCProvider>
        <MockInsightsProvider>
          <ErrorBoundary>
            <PopularEventsTable />
          </ErrorBoundary>
        </MockInsightsProvider>
      </MockTRPCProvider>
    </I18nContext.Provider>
  );
}

// Add ErrorBoundary to catch any rendering errors
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
      return <div>Something went wrong rendering the component.</div>;
    }

    return this.props.children;
  }
}